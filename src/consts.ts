// 站点全局配置：astro.config.mjs 与所有组件/端点统一从此导入
// 避免从 astro.config.mjs 导入（Vite 端点解析受限）
export const SITE = {
  url: "https://splity-landing.pages.dev",
  author: "Splity",
  twitter: "@splity",
  // 产品尚未部署独立站点，CTA 指向本站演示区（splity.pages.dev 属于无关第三方，不可使用）
  appUrl: "/#demo",
  repoUrl: "https://github.com/bayernjf/splity",
};

export const SITE_EN = {
  ...SITE,
  title: "Splity | Smart Knowledge Splitter & Auto Flashcard Maker",
  description:
    "Splity automatically splits scattered knowledge into Q&A flashcards. Paste text, auto-detect 6 formats, 3D flip review, track progress, boost learning efficiency.",
  locale: "en-US",
};

export const SITE_ZH = {
  ...SITE,
  title: "Splity | 智能知识点分割，自动生成学习卡片",
  description:
    "Splity 是一款把零散知识点自动分割成正反面学习卡片的工具。粘贴文本，自动识别编号列表、问答对、键值对、定义式等多种格式，3D 翻转卡片复习，标记掌握进度，提升学习效率。",
  locale: "zh-CN",
};
