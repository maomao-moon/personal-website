/* ============================================================
   猫猫sama — 个人网站 交互脚本
   功能:中日双语切换 / 滚动渐入 / 导航 / 菜单 / 复制邮箱 / 光标光斑
   ============================================================ */
(function () {
  "use strict";

  var EMAIL = "945173031@qq.com";

  /* ---------- 双语文案 ---------- */
  var I18N = {
    zh: {
      "nav.about": "关于",
      "nav.skills": "技能",
      "nav.projects": "项目",
      "nav.contact": "联系",
      "hero.kicker": "こんにちは、我是猫猫sama",
      "hero.sub": "一个热爱代码的普通学生,正在探索 AI 与互联网的世界",
      "hero.tag": "普通学生",
      "hero.cta1": "看看我的作品",
      "hero.cta2": "联系我",
      "hero.scroll": "向下探索",
      "about.title": "关于我",
      "about.p1": "你好,我是猫猫sama —— 一个热爱代码的普通学生。白天在知识的海洋里扑腾,晚上在键盘上敲敲打打,偶尔溜去和 AI 聊聊天。",
      "about.p2": "我喜欢把想法变成真实的东西:用 Godot 打磨一部叫《未曾看见的你》的视觉小说,用 Tauri 造一些趁手的小工具,还会折腾聊天机器人。探索 AI 与互联网的世界,是我现在最感兴趣的事。",
      "about.quote": "热爱可以点亮所有平凡的日子。",
      "about.quoteBy": "— 猫猫sama",
      "skills.title": "技能",
      "skills.py.title": "Python",
      "skills.py.desc": "脚本、自动化与 AI 应用开发的主力语言,很多小项目都靠它跑起来。",
      "skills.py.lvl": "使用中",
      "skills.ai.title": "AI / LLM",
      "skills.ai.desc": "大语言模型应用开发:Prompt 设计、API 集成、Agent 与角色扮演,探索 AI 的边界。",
      "skills.ai.lvl": "学习中",
      "skills.gd.title": "Godot 游戏开发",
      "skills.gd.desc": "用 Godot 制作视觉小说,写剧本、做演出,把一个完整的故事讲出来。",
      "skills.gd.lvl": "入门中",
      "projects.title": "项目作品",
      "projects.clip.tag": "桌面应用",
      "projects.clip.desc": "基于 Tauri 2 + Vue 3 的键盘输入捕获与语言风格分析工具,帮助你理解自己的表达习惯。",
      "projects.bot.tag": "聊天机器人",
      "projects.bot.desc": "基于 AstrBot 框架的 QQ 聊天机器人,一只会陪你聊天的猫猫机器人。",
      "projects.gal.tag": "视觉小说",
      "projects.gal.desc": "用 Godot 制作的原创视觉小说,讲述普通县城高中生「繁城」平凡又特别的故事,一部长线创作的诚意之作。",
      "contact.title": "联系我",
      "contact.lead": "想聊聊代码、AI,或是给我的视觉小说提提建议?欢迎来信。",
      "contact.copy": "点击复制",
      "contact.copied": "已复制!",
      "contact.note": "此邮箱与我同在,随时欢迎来打扰。",
      "footer.copyright": "© 2026 猫猫sama"
    },
    ja: {
      "nav.about": "私について",
      "nav.skills": "スキル",
      "nav.projects": "プロジェクト",
      "nav.contact": "お問い合わせ",
      "hero.kicker": "こんにちは、猫猫samaです",
      "hero.sub": "コードが好きな普通の学生。AI とインターネットの世界を探索しています",
      "hero.tag": "普通の学生",
      "hero.cta1": "作品を見る",
      "hero.cta2": "お問い合わせ",
      "hero.scroll": "下へスクロール",
      "about.title": "私について",
      "about.p1": "こんにちは、猫猫samaです —— コードが好きな普通の学生。昼は学問の海で泳ぎ、夜はキーボードを叩き、たまに AI とおしゃべりしています。",
      "about.p2": "アイデアを形にすることが好きです。Godot でビジュアルノベル『まだ見ぬあなた』を磨き、Tauri で便利な小さなツールを作り、チャットボットもいじっています。AI とインターネットの世界の探索が、今一番面白いことです。",
      "about.quote": "愛はすべての平凡な日々を照らす。",
      "about.quoteBy": "— 猫猫sama",
      "skills.title": "スキル",
      "skills.py.title": "Python",
      "skills.py.desc": "スクリプト・自動化・AI アプリ開発の主力言語。小さなプロジェクトはこれで動いています。",
      "skills.py.lvl": "使用中",
      "skills.ai.title": "AI / LLM",
      "skills.ai.desc": "大規模言語モデルの応用開発。プロンプト設計、API 連携、Agent とロールプレイで AI の限界を探っています。",
      "skills.ai.lvl": "勉強中",
      "skills.gd.title": "Godot ゲーム開発",
      "skills.gd.desc": "Godot でビジュアルノベルを制作。脚本を書き、演出を作り、一つの物語を語ります。",
      "skills.gd.lvl": "入門中",
      "projects.title": "プロジェクト",
      "projects.clip.tag": "デスクトップアプリ",
      "projects.clip.desc": "Tauri 2 + Vue 3 製のキーボード入力キャプチャ＆言語スタイル分析ツール。自分の表現習慣を理解するのに役立ちます。",
      "projects.bot.tag": "チャットボット",
      "projects.bot.desc": "AstrBot フレームワークに基づく QQ チャットボット。一緒におしゃべりしてくれる猫ボットです。",
      "projects.gal.tag": "ビジュアルノベル",
      "projects.gal.desc": "Godot で制作するオリジナルビジュアルノベル。地方の県城に住む高校生「繁城」の、平凡だけど特別な物語。長く作り込む意欲作です。",
      "contact.title": "お問い合わせ",
      "contact.lead": "コードや AI の話、ビジュアルノベルへの提案など、お気軽にメールしてください。",
      "contact.copy": "クリックでコピー",
      "contact.copied": "コピーしました!",
      "contact.note": "このメールはいつでも開いています。お待ちしています。",
      "footer.copyright": "© 2026 猫猫sama"
    }
  };

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 语言切换 ---------- */
  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "ja";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var text = dict[el.getAttribute("data-i18n")];
      if (text) el.textContent = text;
    });
    var btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = lang === "zh" ? "日本語" : "中文";
      btn.setAttribute("aria-label", lang === "zh" ? "切换语言 / 言語切替" : "言語切替 / 切换语言");
    }
    try { localStorage.setItem("mao-site-lang", lang); } catch (e) {}
  }
  var langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var cur = document.documentElement.lang === "ja" ? "ja" : "zh";
      applyLang(cur === "zh" ? "ja" : "zh");
    });
  }
  var savedLang = null;
  try { savedLang = localStorage.getItem("mao-site-lang"); } catch (e) {}
  applyLang(savedLang === "ja" ? "ja" : "zh");

  /* ---------- 顶部导航:滚动变毛玻璃 ---------- */
  var nav = document.getElementById("nav");
  function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 12); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 移动端菜单 ---------- */
  var menuBtn = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 滚动渐入动画 ---------- */
  function revealAll() {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
  }
  if (reduceMotion) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !en.target.classList.contains("visible")) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(function (el) {
      if (!el.closest(".hero")) io.observe(el);
    });

    // Hero 元素错落呈现
    window.addEventListener("load", function () {
      document.querySelectorAll(".hero .reveal").forEach(function (el, i) {
        setTimeout(function () { el.classList.add("visible"); }, 120 + i * 120);
      });
    });
  }

  /* ---------- 复制邮箱 ---------- */
  var contactCard = document.querySelector(".contact-card");
  function copyText(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else { fallbackCopy(text); done(); }
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }
  if (contactCard) {
    contactCard.addEventListener("click", function (e) {
      e.preventDefault();
      copyText(EMAIL, function () {
        contactCard.classList.add("copied");
        var tip = contactCard.querySelector(".copy-tip");
        var curLang = document.documentElement.lang === "ja" ? "ja" : "zh";
        if (tip) tip.textContent = I18N[curLang]["contact.copied"];
        setTimeout(function () {
          contactCard.classList.remove("copied");
          if (tip) tip.textContent = I18N[curLang]["contact.copy"];
        }, 2000);
      });
    });
  }

  /* ---------- 卡片鼠标跟随高光 ---------- */
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width) * 100;
      var y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", x.toFixed(2) + "%");
      card.style.setProperty("--my", y.toFixed(2) + "%");
    });
  });

  /* ---------- 光标跟随光斑 ---------- */
  var glow = document.querySelector(".cursor-glow");
  if (glow && window.matchMedia("(pointer: fine)").matches && !reduceMotion) {
    var x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y;
    document.addEventListener("pointermove", function (e) { tx = e.clientX; ty = e.clientY; });
    (function anim() {
      x += (tx - x) * 0.09;
      y += (ty - y) * 0.09;
      glow.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%)";
      requestAnimationFrame(anim);
    })();
  }
})();
