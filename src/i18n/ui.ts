// i18n 翻译字典：所有用户可见文案集中管理
export type Lang = "en" | "zh";

export const languages: Record<Lang, string> = {
  en: "English",
  zh: "中文",
};

export const defaultLang: Lang = "en";

// 站点元数据按语言区分（title/description/locale 在 consts.ts 中维护）
export interface SiteMeta {
  title: string;
  description: string;
  locale: string;
}

// 组件文案类型定义
export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterCol {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}

export interface Translation {
  // Header
  headerBrandAria: string;
  headerNavAria: string;
  headerLangSwitchAria: string;
  headerMenuToggleAria: string;
  headerMobileNavAria: string;
  navFeatures: string;
  navDemo: string;
  navFaq: string;
  navBlog: string;
  navAbout: string;
  navCta: string;

  // Hero
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroMetaFree: string;
  heroMetaNoSignup: string;
  heroMetaLocal: string;
  heroCardFrontLabel: string;
  heroCardFrontText: string;
  heroCardBackLabel: string;
  heroCardBackText: string;
  heroCardListLabel: string;
  heroCardListItem1: string;
  heroCardListItem2: string;
  heroCardListItem3: string;

  // Features
  featuresEyebrow: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: FeatureItem[];

  // Demo
  demoEyebrow: string;
  demoTitle: string;
  demoSubtitle: string;
  demoSteps: StepItem[];
  demoFormatsLabel: string;
  demoFormats: string[];

  // FAQ
  faqEyebrow: string;
  faqTitle: string;
  faqItems: FaqItem[];

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;

  // Footer
  footerTagline: string;
  footerCols: FooterCol[];
  footerCopyright: string;
  footerMeta: string;

  // 404
  notFoundEyebrow: string;
  notFoundTitle: string;
  notFoundDesc: string;
  notFoundBack: string;

  // About
  aboutEyebrow: string;
  aboutTitle: string;
  aboutLead: string;
  aboutLeadHighlight: string;
  aboutWhyTitle: string;
  aboutWhyP1: string;
  aboutWhyP1Highlight: string;
  aboutStackTitle: string;
  aboutStack: string[];
  aboutPrivacyTitle: string;
  aboutPrivacyP1: string;
  aboutPrivacyP1Highlight: string;
  aboutPrivacyLink: string;
  aboutOpenTitle: string;
  aboutOpenP1: string;
  aboutOpenLink: string;
  aboutRoadmapTitle: string;
  aboutRoadmap: string[];

  // Privacy
  privacyEyebrow: string;
  privacyTitle: string;
  privacyUpdated: string;
  privacySections: { h: string; p: string }[];

  // Terms
  termsEyebrow: string;
  termsTitle: string;
  termsUpdated: string;
  termsSections: { h: string; p: string }[];

  // Blog
  blogEyebrow: string;
  blogTitle: string;
  blogSubtitle: string;
  blogBack: string;
  blogUpdatedLabel: string;

  // RSS
  rssTitle: string;
  rssDescription: string;

  // BaseLayout JSON-LD
  appSchemaDescription: string;
  appSchemaFeatureList: string[];
}

const en: Translation = {
  headerBrandAria: "Splity home",
  headerNavAria: "Main navigation",
  headerLangSwitchAria: "Switch language",
  headerMenuToggleAria: "Menu",
  headerMobileNavAria: "Mobile navigation",
  navFeatures: "Features",
  navDemo: "Demo",
  navFaq: "FAQ",
  navBlog: "Blog",
  navAbout: "About",
  navCta: "Get Started",

  heroBadge: "Knowledge → Flashcards",
  heroTitleLine1: "Turn scattered knowledge,",
  heroTitleHighlight: "into auto-split flashcards",
  heroSubtitle:
    "Paste text, Splity auto-detects 6 formats and splits into flip cards. No signup, data stays in your browser, ready to use.",
  heroPrimaryCta: "Try Now",
  heroSecondaryCta: "View Demo",
  heroMetaFree: "Free",
  heroMetaNoSignup: "No signup",
  heroMetaLocal: "Local privacy",
  heroCardFrontLabel: "Front · Question",
  heroCardFrontText: "What is a closure?",
  heroCardBackLabel: "Back · Answer",
  heroCardBackText:
    "The combination of a function and its lexical environment, allowing inner functions to access outer variables.",
  heroCardListLabel: "List overview",
  heroCardListItem1: "① Closure",
  heroCardListItem2: "② Prototype chain",
  heroCardListItem3: "③ Event loop",

  featuresEyebrow: "Features",
  featuresTitle: "Built for efficient review",
  featuresSubtitle:
    "From knowledge point to mastery, Splity covers the full learning loop: split → review → track → reinforce.",
  features: [
    {
      icon: "✂️",
      title: "Smart Split",
      desc: "Auto-detects numbered lists, bullet lists, Q&A pairs, key-value pairs, definitions, and blank-line segments — 6 formats parsed at once.",
    },
    {
      icon: "🔄",
      title: "3D Flip Cards",
      desc: "Smooth cubic-bezier animations, click or spacebar to flip. Arrow keys to navigate, M to mark mastered. Built for keyboard users.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      desc: "Real-time progress bar shows mastery ratio. Mark mastered cards and keep your review pace visible at a glance.",
    },
    {
      icon: "📋",
      title: "List Overview",
      desc: "Switch to list mode anytime, browse all cards, and quickly spot what still needs attention.",
    },
    {
      icon: "🔒",
      title: "Local Privacy",
      desc: "Runs entirely in the browser. Data stays in memory only, never sent to any server, cleared on refresh.",
    },
    {
      icon: "⚡",
      title: "Zero Config",
      desc: "No signup, no login, no install. Open the page and start using it, with native mobile support.",
    },
  ],

  demoEyebrow: "How it works",
  demoTitle: "Three steps to flashcard review",
  demoSubtitle: "From text to cards, just one paste away.",
  demoSteps: [
    {
      num: "01",
      title: "Paste knowledge",
      desc: "Paste notes, textbook excerpts, or class takeaways into the input area. Supports numbered lists, bullets, Q&A, and more.",
    },
    {
      num: "02",
      title: "One-click split",
      desc: "Splity auto-detects the format and splits text into front/back cards — no manual editing required.",
    },
    {
      num: "03",
      title: "Flip & review",
      desc: "Spacebar flips cards to reveal answers, M marks mastery, arrow keys navigate, with live progress.",
    },
  ],
  demoFormatsLabel: "Supported input formats",
  demoFormats: [
    "Numbered list: 1. 2. 3. ...",
    "Bullet list: - or * prefix",
    "Q&A pairs: Q: ... A: ...",
    "Key-value: key: value",
    "Definition: term — definition",
    "Blank-line segments: one paragraph per card",
  ],

  faqEyebrow: "FAQ",
  faqTitle: "Frequently asked questions",
  faqItems: [
    {
      q: "Is Splity free?",
      a: "Completely free. Splity is a pure front-end tool — no signup, no payment, just open the page and use every feature.",
    },
    {
      q: "Is my data uploaded to a server?",
      a: "No. All data lives only in browser memory and is never sent to any server. Refresh the page and it's cleared, maximizing your privacy.",
    },
    {
      q: "What text formats are supported?",
      a: "Six formats: numbered lists (1. 2. 3.), bullet lists (- or *), Q&A pairs (Q:/A:), key-value pairs (key: value), definitions (term — definition), and blank-line segments.",
    },
    {
      q: "Can I use it on mobile?",
      a: "Splity is built mobile-first. Open it in any phone browser — touch flipping and keyboard shortcuts both work.",
    },
    {
      q: "Can I save my review progress?",
      a: "The current version keeps data in session memory only, cleared on refresh. Local persistence and export are on the roadmap — stay tuned.",
    },
    {
      q: "How is this different from Anki?",
      a: "Splity focuses on instant card creation — no pre-built decks needed. Paste text and start reviewing, perfect for quick reviews and fragmented learning. Anki is better for long-term spaced repetition. The two complement each other.",
    },
  ],

  ctaTitle: "Turn knowledge into cards now",
  ctaSubtitle: "No signup, open and use. Finish your first review in 30 seconds.",
  ctaButton: "Start using Splity",

  footerTagline:
    "One page of knowledge, auto-split into study cards.",
  footerCols: [
    {
      heading: "Product",
      links: [
        { label: "App", href: "APP_URL" },
        { label: "Features", href: "/#features" },
        { label: "Demo", href: "/#demo" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "About", href: "/about" },
        { label: "BayJF", href: "https://bayjf.com", external: true },
        { label: "GitHub", href: "REPO_URL", external: true },
        { label: "llms.txt", href: "/llms.txt" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  footerCopyright: "© {year} Splity. All rights reserved.",
  footerMeta: "Pure front-end · Local data · Zero tracking",

  notFoundEyebrow: "404",
  notFoundTitle: "Page not found",
  notFoundDesc: "The page you're looking for doesn't exist or has been moved.",
  notFoundBack: "← Back to home",

  aboutEyebrow: "About",
  aboutTitle: "About Splity",
  aboutLead:
    "Splity is a pure front-end tool that auto-splits scattered knowledge into front/back flashcards. Its core philosophy:",
  aboutLeadHighlight:
    "review should be active recall, not passive rereading.",
  aboutWhyTitle: "Why we built this",
  aboutWhyP1:
    "Most flashcard tools require pre-building decks, signing up, and syncing to the cloud. That's too heavy for the scenario of \"quickly reviewing a set of notes\". Splity's goal:",
  aboutWhyP1Highlight:
    "paste to use, flip to review, refresh to clear. No accounts, no cloud, no data collection.",
  aboutStackTitle: "Tech stack",
  aboutStack: [
    "App: React 19 + TypeScript + Vite 8 + pure CSS",
    "Landing page: Astro 5 + Content Collections + MDX",
    "Hosting: Cloudflare Pages (Git-integrated auto-deploy)",
    "Analytics: Cloudflare Web Analytics (privacy-friendly, cookie-less)",
  ],
  aboutPrivacyTitle: "Privacy promise",
  aboutPrivacyP1:
    "Splity is a pure client-side app. All data lives only in browser memory and is",
  aboutPrivacyP1Highlight: "never sent to any server.",
  aboutPrivacyLink: "Privacy Policy",
  aboutOpenTitle: "Open source & feedback",
  aboutOpenP1:
    "Both the app and landing page source code are open on",
  aboutOpenLink: "GitHub",
  aboutRoadmapTitle: "Roadmap",
  aboutRoadmap: [
    "Local persistence (localStorage / IndexedDB)",
    "Card export (JSON / Anki apkg)",
    "Custom split rules",
    "Dark mode toggle",
  ],

  privacyEyebrow: "Privacy",
  privacyTitle: "Privacy Policy",
  privacyUpdated: "Last updated: August 5, 2026",
  privacySections: [
    {
      h: "Core principles",
      p: "Splity is a pure front-end tool. We follow the principle of data minimization: we do not collect, store, or transmit any of your learning content.",
    },
    {
      h: "Data processing",
      p: "All text you paste into Splity, generated cards, and mastery marks exist only in browser memory. This data is never sent to our servers or any third-party service. Closing or refreshing the page clears it.",
    },
    {
      h: "Cookies & local storage",
      p: "The Splity app itself uses no cookies and does not use localStorage or IndexedDB for persistence. The current version clears everything on refresh. If we add local persistence in the future, it will be opt-in and clearly disclosed in this policy.",
    },
    {
      h: "Landing page analytics",
      p: "This landing page (splity-landing.pages.dev) uses Cloudflare Web Analytics to collect aggregate visit statistics (page views, traffic sources, country/region). This service uses no cookies, no cross-site tracking, and no personal identification.",
    },
    {
      h: "Third-party services",
      p: "Splity integrates no third-party analytics, advertising, or tracking services. The landing page is hosted on Cloudflare Pages and relies only on Cloudflare's infrastructure for content delivery.",
    },
    {
      h: "Children's privacy",
      p: "Splity is designed for general learning scenarios, is not directed at children under 13, and does not knowingly collect any personal information.",
    },
    {
      h: "Policy changes",
      p: "If this policy is updated, we will publish the new version on this page and update the \"Last updated\" date. Material changes will be announced on the landing page.",
    },
    {
      h: "Contact us",
      p: "For privacy-related questions, please reach out via GitHub Issues.",
    },
  ],

  termsEyebrow: "Terms",
  termsTitle: "Terms of Service",
  termsUpdated: "Last updated: August 5, 2026",
  termsSections: [
    {
      h: "Service description",
      p: "Splity (\"the Service\") is a browser-based knowledge splitter and flashcard review tool, consisting of the app (splity.pages.dev) and this landing page (splity-landing.pages.dev).",
    },
    {
      h: "License to use",
      p: "The Service is free and open to the public. You may use it freely for personal or commercial learning, but you may not: attempt to reverse engineer, tamper with the service code, or use it for any illegal purpose.",
    },
    {
      h: "Intellectual property",
      p: "The source code of the Service is open on GitHub under the license declared in the repository. The copyright of any learning content you paste into the Service belongs to you.",
    },
    {
      h: "Disclaimer",
      p: "The Service is provided \"as is\", without any express or implied warranties. We do not guarantee that the Service will be uninterrupted, defect-free, or fit for a particular purpose. We are not liable for any direct or indirect loss arising from the use of the Service.",
    },
    {
      h: "Data responsibility",
      p: "Since the Service does not store any user data, you are responsible for backing up your own learning content. We are not liable for data loss caused by refreshing the page.",
    },
    {
      h: "Service changes & termination",
      p: "We reserve the right to modify, suspend, or terminate the Service at any time without prior notice. Material changes will be announced on the landing page.",
    },
    {
      h: "Governing law",
      p: "These Terms are interpreted and disputes are resolved under the laws applicable in your jurisdiction.",
    },
    {
      h: "Changes to these Terms",
      p: "If these Terms are updated, we will publish the new version on this page and update the \"Last updated\" date.",
    },
  ],

  blogEyebrow: "Blog",
  blogTitle: "Learning methods & product notes",
  blogSubtitle:
    "Cognitive science in practice: flashcard review, spaced repetition, and active recall.",
  blogBack: "← Back to blog",
  blogUpdatedLabel: "(updated {date})",

  rssTitle: "Splity Blog",
  rssDescription:
    "Learning methods, flashcard review techniques, cognitive science, and product updates.",

  appSchemaDescription:
    "Auto-split scattered knowledge into front/back flashcards. Supports numbered lists, Q&A pairs, key-value pairs, definitions, and more. 3D flip review with mastery tracking.",
  appSchemaFeatureList: [
    "Smart split for 6 text formats",
    "3D flip card review",
    "Mastery progress tracking",
    "List overview mode",
    "Keyboard shortcuts",
    "Local data processing, privacy-first",
  ],
};

const zh: Translation = {
  headerBrandAria: "Splity 首页",
  headerNavAria: "主导航",
  headerLangSwitchAria: "切换语言",
  headerMenuToggleAria: "菜单",
  headerMobileNavAria: "移动端导航",
  navFeatures: "功能",
  navDemo: "演示",
  navFaq: "FAQ",
  navBlog: "博客",
  navAbout: "关于",
  navCta: "开始使用",

  heroBadge: "知识点 → 学习卡片",
  heroTitleLine1: "把零散知识，",
  heroTitleHighlight: "自动分割成卡片",
  heroSubtitle:
    "粘贴一段文本，Splity 自动识别 6 种格式，拆分为正反面翻转卡片。无需注册，数据留在浏览器，开箱即用。",
  heroPrimaryCta: "立即使用",
  heroSecondaryCta: "查看演示",
  heroMetaFree: "免费",
  heroMetaNoSignup: "无需注册",
  heroMetaLocal: "本地隐私",
  heroCardFrontLabel: "正面 · 问题",
  heroCardFrontText: "什么是闭包？",
  heroCardBackLabel: "背面 · 答案",
  heroCardBackText:
    "函数与其词法环境的组合，使内部函数可访问外部变量。",
  heroCardListLabel: "列表总览",
  heroCardListItem1: "① 闭包",
  heroCardListItem2: "② 原型链",
  heroCardListItem3: "③ 事件循环",

  featuresEyebrow: "Features",
  featuresTitle: "为高效复习而生",
  featuresSubtitle:
    "从知识点到掌握，Splity 覆盖完整学习闭环：分割 → 复习 → 追踪 → 巩固。",
  features: [
    {
      icon: "✂️",
      title: "智能分割",
      desc: "自动识别编号列表、符号列表、问答对、键值对、定义式、空行分段，6 种格式一次拆解。",
    },
    {
      icon: "🔄",
      title: "3D 翻转卡片",
      desc: "cubic-bezier 流畅动画，点击或空格翻转。左右键切换，M 键标记掌握，键盘党的福音。",
    },
    {
      icon: "📊",
      title: "进度追踪",
      desc: "实时进度条显示掌握比例，标记已掌握卡片，复习节奏一目了然。",
    },
    {
      icon: "📋",
      title: "列表总览",
      desc: "一键切换列表模式，浏览全部卡片，快速定位需要重点复习的内容。",
    },
    {
      icon: "🔒",
      title: "本地隐私",
      desc: "纯前端运行，数据仅存于浏览器内存，不发送到任何服务器，刷新即清空。",
    },
    {
      icon: "⚡",
      title: "零配置开箱",
      desc: "无需注册、无需登录、无需安装。打开网页即可使用，移动端原生适配。",
    },
  ],

  demoEyebrow: "How it works",
  demoTitle: "三步完成卡片化复习",
  demoSubtitle: "从文本到卡片，只需粘贴一次。",
  demoSteps: [
    {
      num: "01",
      title: "粘贴知识点",
      desc: "把笔记、教材摘录或课堂要点粘贴到输入区。支持编号、列表、问答等多种格式。",
    },
    {
      num: "02",
      title: "一键分割",
      desc: "Splity 自动识别格式，把文本拆成正反面卡片，无需手动逐条整理。",
    },
    {
      num: "03",
      title: "翻转复习",
      desc: "空格翻转卡片查看答案，M 键标记掌握，左右键切换，进度实时可见。",
    },
  ],
  demoFormatsLabel: "支持的输入格式",
  demoFormats: [
    "编号列表：1. 2. 3. ...",
    "符号列表：- 或 * 开头",
    "问答对：Q: ... A: ...",
    "键值对：key: value",
    "定义式：术语 — 定义",
    "空行分段：段落即卡片",
  ],

  faqEyebrow: "FAQ",
  faqTitle: "常见问题",
  faqItems: [
    {
      q: "Splity 是免费的吗？",
      a: "完全免费。Splity 是纯前端工具，无需注册、无需付费，打开网页即可使用全部功能。",
    },
    {
      q: "我的数据会被上传到服务器吗？",
      a: "不会。所有数据仅存在浏览器内存中，不发送到任何服务器。刷新页面即清空，最大程度保护隐私。",
    },
    {
      q: "支持哪些文本格式？",
      a: "支持 6 种：编号列表（1. 2. 3.）、符号列表（- 或 *）、问答对（Q:/A:）、键值对（key: value）、定义式（术语 — 定义）、空行分段。",
    },
    {
      q: "如何在手机上使用？",
      a: "Splity 已做移动端原生适配，手机浏览器打开即可使用，支持触屏翻转与键盘快捷键。",
    },
    {
      q: "能保存复习进度吗？",
      a: "当前版本数据仅存于会话内存，刷新即清空。本地持久化与导出功能在路线图中，敬请期待。",
    },
    {
      q: "和 Anki 有什么区别？",
      a: "Splity 聚焦即时卡片化，无需提前建卡：粘贴文本即拆分复习，适合临时复习与碎片化学习。Anki 适合长期重复记忆，二者互补。",
    },
  ],

  ctaTitle: "现在就把知识变成卡片",
  ctaSubtitle: "无需注册，打开即用。30 秒内完成第一次复习。",
  ctaButton: "开始使用 Splity",

  footerTagline: "一张纸，写上知识点，自动分割成学习卡片。",
  footerCols: [
    {
      heading: "产品",
      links: [
        { label: "应用", href: "APP_URL" },
        { label: "功能", href: "/#features" },
        { label: "使用演示", href: "/#demo" },
      ],
    },
    {
      heading: "资源",
      links: [
        { label: "博客", href: "/blog" },
        { label: "关于", href: "/about" },
        { label: "BayJF", href: "https://bayjf.com", external: true },
        { label: "GitHub", href: "REPO_URL", external: true },
        { label: "llms.txt", href: "/llms.txt" },
      ],
    },
    {
      heading: "法律",
      links: [
        { label: "隐私政策", href: "/privacy" },
        { label: "服务条款", href: "/terms" },
      ],
    },
  ],
  footerCopyright: "© {year} Splity. 保留所有权利.",
  footerMeta: "纯前端 · 数据本地 · 零收集",

  notFoundEyebrow: "404",
  notFoundTitle: "页面不存在",
  notFoundDesc: "你访问的页面不存在，或者已经被移动。",
  notFoundBack: "← 回到首页",

  aboutEyebrow: "About",
  aboutTitle: "关于 Splity",
  aboutLead:
    "Splity 是一款把零散知识点自动分割成正反面学习卡片的纯前端工具。它的核心理念是：",
  aboutLeadHighlight: "复习应该主动检索，而非被动重读。",
  aboutWhyTitle: "为什么做这个工具",
  aboutWhyP1:
    "市面上的闪卡工具大多需要提前建卡、注册账号、同步云端。对于\"临时复习一段笔记\"这种场景，流程太重。Splity 的目标是：",
  aboutWhyP1Highlight:
    "粘贴即用，翻面即复习，刷新即清空。没有账号，没有云端，没有数据收集。",
  aboutStackTitle: "技术栈",
  aboutStack: [
    "应用：React 19 + TypeScript + Vite 8 + 纯 CSS",
    "落地页：Astro 5 + Content Collections + MDX",
    "部署：Cloudflare Pages（Git 集成自动部署）",
    "分析：Cloudflare Web Analytics（隐私友好、无 cookie）",
  ],
  aboutPrivacyTitle: "隐私承诺",
  aboutPrivacyP1:
    "Splity 应用是纯客户端程序，所有数据仅存在浏览器内存中，",
  aboutPrivacyP1Highlight: "不发送到任何服务器。",
  aboutPrivacyLink: "隐私政策",
  aboutOpenTitle: "开源与反馈",
  aboutOpenP1: "项目源码与落地页均在",
  aboutOpenLink: "GitHub",
  aboutRoadmapTitle: "路线图",
  aboutRoadmap: [
    "本地持久化（localStorage / IndexedDB）",
    "卡片导出（JSON / Anki apkg）",
    "自定义分割规则",
    "暗色模式切换",
  ],

  privacyEyebrow: "Privacy",
  privacyTitle: "隐私政策",
  privacyUpdated: "最后更新：2026年8月5日",
  privacySections: [
    {
      h: "核心原则",
      p: "Splity 是一款纯前端工具。我们遵循\"数据最小化\"原则：不收集、不存储、不传输用户的任何学习内容。",
    },
    {
      h: "数据处理",
      p: "你在 Splity 应用中粘贴的所有文本、生成的卡片、掌握标记等数据，仅存在浏览器内存中。这些数据不会发送到我们的服务器或任何第三方服务。关闭或刷新页面后，数据将被清除。",
    },
    {
      h: "Cookies 与本地存储",
      p: "Splity 应用本身不使用 cookie，也不使用 localStorage 或 IndexedDB 进行持久化。当前版本刷新即清空，未来若增加本地持久化功能，将默认开启并在隐私政策中明确告知。",
    },
    {
      h: "落地页分析",
      p: "本落地页（splity-landing.pages.dev）使用 Cloudflare Web Analytics 收集聚合访问统计（页面浏览量、访问来源、国家/地区）。该服务不使用 cookie，不跨站跟踪，不识别个人身份。",
    },
    {
      h: "第三方服务",
      p: "Splity 不集成任何第三方分析、广告或跟踪服务。落地页托管于 Cloudflare Pages，仅依赖 Cloudflare 的基础设施进行内容分发。",
    },
    {
      h: "儿童隐私",
      p: "Splity 面向通用学习场景，不针对 13 岁以下儿童设计，也不主动收集任何个人信息。",
    },
    {
      h: "政策变更",
      p: "本政策如有更新，将在本页面发布并修改\"最后更新\"日期。重大变更会通过落地页公告告知用户。",
    },
    {
      h: "联系我们",
      p: "如有隐私相关问题，请通过 GitHub Issues 联系。",
    },
  ],

  termsEyebrow: "Terms",
  termsTitle: "服务条款",
  termsUpdated: "最后更新：2026年8月5日",
  termsSections: [
    {
      h: "服务描述",
      p: "Splity（以下简称\"本服务\"）是一款基于浏览器的知识点分割与卡片复习工具，包含应用（splity.pages.dev）与落地页（splity-landing.pages.dev）两部分。",
    },
    {
      h: "使用许可",
      p: "本服务免费向公众开放。你可以在个人或商业学习场景中自由使用，但不得：试图逆向工程、篡改服务代码、或用于违法用途。",
    },
    {
      h: "知识产权",
      p: "本服务的源代码在 GitHub 开放，遵循其仓库声明的开源协议。你粘贴到服务中的学习内容版权归属于你本人。",
    },
    {
      h: "免责声明",
      p: "本服务按\"现状\"提供，不提供任何明示或暗示的担保。我们不保证服务持续可用、无缺陷或满足特定用途。使用本服务产生的任何直接或间接损失，我们不承担责任。",
    },
    {
      h: "数据责任",
      p: "由于本服务不存储任何用户数据，你应对自己的学习内容自行备份。刷新页面导致的数据丢失，我们不承担责任。",
    },
    {
      h: "服务变更与终止",
      p: "我们保留随时修改、暂停或终止本服务的权利，无需另行通知。重大变更将在落地页公告。",
    },
    {
      h: "适用法律",
      p: "本条款的解释与争议解决适用中华人民共和国法律。",
    },
    {
      h: "条款变更",
      p: "本条款如有更新，将在本页面发布并修改\"最后更新\"日期。",
    },
  ],

  blogEyebrow: "Blog",
  blogTitle: "学习方法与产品思考",
  blogSubtitle: "关于卡片复习、间隔重复、主动检索的认知科学实践。",
  blogBack: "← 返回博客",
  blogUpdatedLabel: "（更新于 {date}）",

  rssTitle: "Splity 博客",
  rssDescription:
    "学习方法、卡片复习技巧、认知科学与产品更新。",

  appSchemaDescription:
    "把零散知识点自动分割成正反面学习卡片。支持编号列表、问答对、键值对、定义式等多种格式，3D 翻转复习，标记掌握进度。",
  appSchemaFeatureList: [
    "智能分割 6 种文本格式",
    "3D 翻转卡片复习",
    "掌握进度追踪",
    "列表总览模式",
    "键盘快捷键",
    "本地数据处理，隐私优先",
  ],
};

export const translations: Record<Lang, Translation> = { en, zh };
