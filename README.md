# Splity Landing

> Splity 落地页 —— 把零散知识点自动分割成学习卡片。

基于 Astro 5 静态生成，针对 SEO 与 GEO（AI 大模型优化）深度优化，部署到 Cloudflare Pages。

## 快速开始

```bash
npm install
npm run dev      # 本地开发 http://localhost:4321
npm run build    # 生产构建到 dist/
npm run preview  # 预览构建产物
npm run check    # TypeScript 类型检查
```

## 技术栈

- **框架**：Astro 5（静态输出）
- **内容**：Content Collections + MDX（博客）
- **SEO**：astro-sitemap、JSON-LD 结构化数据
- **订阅**：@astrojs/rss（RSS feed）
- **部署**：Cloudflare Pages（Git 集成）

## 项目结构

```
src/
├── astro.config.mjs          # 配置 + SITE 常量
├── layouts/
│   └── BaseLayout.astro      # 全局布局（SEO meta、JSON-LD、OG）
├── components/
│   ├── Header.astro          # 导航栏
│   ├── Hero.astro            # 首屏
│   ├── Features.astro        # 功能特性
│   ├── Demo.astro            # 使用演示
│   ├── FAQ.astro             # 常见问题（FAQPage schema）
│   ├── CTA.astro             # 行动召唤
│   └── Footer.astro          # 页脚
├── content/
│   ├── config.ts             # Content Collections 定义
│   └── blog/                 # 博客 Markdown 文章
├── pages/
│   ├── index.astro           # 首页
│   ├── about.astro           # 关于
│   ├── privacy.astro         # 隐私政策
│   ├── terms.astro           # 服务条款
│   ├── rss.xml.ts            # RSS feed
│   └── blog/
│       ├── index.astro       # 博客列表
│       └── [...slug].astro   # 文章详情
└── styles/
    └── global.css            # 全局样式（设计令牌 + 暗色模式）

public/
├── favicon.svg               # 站点图标（复用 splity 应用图标）
├── robots.txt                # 爬虫规则（含 AI 爬虫白名单）
└── llms.txt                   # GEO：给 AI 大模型的站点摘要
```

## SEO 优化

- 每页独立 `<title>` / `meta description` / canonical
- Open Graph + Twitter Card
- JSON-LD 结构化数据：WebSite、SoftwareApplication、BlogPosting、FAQPage
- 自动生成 `sitemap-index.xml`（astro-sitemap）
- 语义化 HTML 结构
- RSS feed（`/rss.xml`）

## GEO 优化（针对 AI 大模型）

- **llms.txt**：在站点根目录声明项目摘要、核心功能、权威链接，供 ChatGPT/Perplexity/Claude 等 AI 检索引用
- **robots.txt 白名单**：显式允许 GPTBot、ClaudeBot、PerplexityBot、Google-Extended 等主流 AI 爬虫
- **事实密集型内容**：功能描述采用结构化列表，便于 AI 引擎抓取与召回
- **FAQ schema**：问答形式内容契合 AI 问答场景
- **about 页面**：提供项目背景、技术栈等权威性信息，增强 AI 引用可信度

## 部署到 Cloudflare Pages

采用 **Git 集成**方式（推荐，无需 GitHub Actions）：

1. 推送仓库到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create a project → Connect to Git
3. 选择本仓库，配置：
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - **Node version**：`22`（环境变量 `NODE_VERSION=22`）
4. Save and Deploy，后续每次 push 自动部署，PR 自动生成预览

### 自定义域名

在 Cloudflare Pages 项目设置 → Custom domains 中添加：
- `splity.bayjf.com`（默认）
- 自定义域名（如 `landing.splity.com`）→ 添加 CNAME 记录

配置后需更新 `astro.config.mjs` 中的 `SITE.url`，否则 canonical / sitemap / OG 链接会指向默认域名。

## 配置

站点全局配置集中在 `astro.config.mjs` 的 `SITE` 常量：

```js
export const SITE = {
  url: "https://splity.bayjf.com",  // 站点正式 URL
  title: "...",
  description: "...",
  appUrl: "https://splity.pages.dev",       // Splity 应用地址
  repoUrl: "https://github.com/...",        // GitHub 仓库
};
```
