# AGENTS.md — splity-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
Splity 落地页：把零散知识点自动分割成学习卡片的工具官网。Astro 静态生成，
针对 SEO 与 GEO（AI 大模型优化）优化，部署在 Cloudflare Pages。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（静态输出） |
| 内容 | Content Collections + MDX（博客） |
| SEO | `@astrojs/sitemap`、JSON-LD 结构化数据 |
| 订阅 | `@astrojs/rss`（RSS feed） |
| 包管理 | npm |

## 常用命令
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- 页面区块在 `src/components/`（Header、Hero、Features、Demo、FAQ、CTA、Footer），
  FAQ 需带 FAQPage schema。
- 博客文章写在 `src/content/blog/`，集合定义在 `src/content/config.ts`。
- 站点常量集中在 `astro.config.mjs` 的 `SITE`，改域名时同步 `robots.txt` 与结构化数据里的 URL。
- 部署细节见 `docs/DEPLOYMENT.md`（Pages 构建 `npm run build`，输出 `dist`，`NODE_VERSION=22`）。

## 不要做的事
- 不要提交构建产物与 `.env`。
- 不要在组件里硬编码站点 URL（走 `SITE` 常量）。
- 不要跳过 `git pull --rebase` 直接 push。
