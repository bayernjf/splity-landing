# 部署 — splity-landing

更新时间：2026-09-09

## 站点信息
- 域名：`https://splity.bayjf.com`（Pages 默认域 `splity.pages.dev`）
- 技术栈：Astro 7（静态输出）+ Content Collections + MDX（博客）+ `@astrojs/rss` + `@astrojs/sitemap`
- 包管理器：npm

## 构建
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## Cloudflare Pages（Git 集成）
不用 GitHub Actions，用 Pages 原生集成：push 自动部署，PR 自动预览。

| 配置项 | 值 |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22` |

自定义域名：Pages 项目 → Custom domains → 添加 `splity.bayjf.com` → 按提示设置 CNAME。

## 发布后验证
1. 首页、关于页、博客列表与文章页可访问。
2. `sitemap.xml`、`robots.txt`、RSS feed 可访问且域名一致。
3. FAQ 区块的 FAQPage JSON-LD 结构正确。
4. OG 图（构建时截出）可访问。

## 改域名时的同步点
- `astro.config.mjs` 的 `site` / `SITE` 常量
- `public/robots.txt` 的 Sitemap 行
- 结构化数据里的站点 URL
