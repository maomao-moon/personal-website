# 「猫猫sama」个人网站设计文档

- 日期:2026-08-11
- 状态:已获用户批准

## 项目概述

个人介绍网站(portfolio),部署到 GitHub Pages / Cloudflare Pages,绑定中文域名「仙狐大人.我爱你」。

## 品牌与内容

- **品牌名**:猫猫sama
- **头像**:《贤惠仙狐小姐》的仙狐大人(Senko-san),文件 `b_1286a02394612d478855c719b05f4622.jpg`(640×640)
- **副标题**:一个热爱代码的普通学生,正在探索 AI 与互联网的世界
- **身份标签**:普通学生
- **技能**:Python、AI/LLM
- **项目**:
  1. **ClipCapture**(persona-distill 目录)— Tauri 2 + Vue 3 桌面应用,键盘输入捕获与语言风格分析
  2. **maomaobot** — 基于 AstrBot 框架的 QQ 聊天机器人
  3. **《未曾看见的你》** — Godot 制作的视觉小说,讲述普通县城高中生「繁城」的故事
- **联系方式**:邮箱 `945173031@qq.com`
- **语言**:中文 / 日语 双语切换

## 技术方案

**纯静态单页** HTML + CSS + Vanilla JS,零依赖、零构建。
- `index.html` — 页面骨架 + SVG sprite
- `css/style.css` — 全部样式与动效
- `js/main.js` — 语言切换、滚动渐入、交互
- `assets/` — 头像 jpg、图标

## 视觉系统(和风神狐 × 赛博极光)

- **背景**:近纯黑 `#050508`,Aurora 流动渐变光斑(青→紫)+ 狐狸暖金光斑 + 噪点纹理
- **主渐变**:琥珀金 `#FFB86B` → 樱花粉 `#FF8FAB` → 薰衣草紫 `#B39DFF`
- **卡片**:毛玻璃 + 细边框,悬停霓虹发光
- **字体**:显示字体 Syne(英数)+ Noto Serif SC(中文衬线)+ Shippori Mincho(日文衬线),回退系统字体;正文系统无衬线栈
- **图标**:内联 SVG sprite,禁用 emoji

## 页面板块(单页长滚动)

1. 顶部固定导航:锚点 + 中/日切换
2. Hero:头像渐变光环 + 大标题 + 副标题 + 标签 + 滚动 CTA
3. 关于:自我介绍
4. 技能:Python、AI/LLM 卡片
5. 项目作品:3 张作品卡
6. 联系:邮箱卡片
7. Footer:版权 + 回到顶部

## 动效与交互

- 页面加载错落渐入(stagger)
- IntersectionObserver 滚动渐入
- 光标跟随光斑
- 头像悬浮动画
- 卡片 hover 发光
- 语言切换:JS 数据驱动,一键切换全部文案
- `prefers-reduced-motion` 降级
- 移动端响应式,无障碍焦点环

## 部署

1. 本地 `python -m http.server` 测试
2. git init + GitHub 公开仓库 `personal-website` 推送
3. Cloudflare Pages 部署 + 绑定域名「仙狐大人.我爱你」
