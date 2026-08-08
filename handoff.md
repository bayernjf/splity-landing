# Handoff — splity-landing

更新时间：2026-08-08

## 项目概况
Splity 产品落地页。Astro 7 + Tailwind CSS v4 静态站点，中英双语，部署于 Cloudflare Pages。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev）
- `194a555` build: upgrade Astro to v7 and relocate content config
- `88edcfc` feat(seo): add OG social share image
- `ea096a1` feat(pages): add custom 404 page

## 注意点
- Astro 7 要求内容集合配置位于 src/content.config.ts（已用 git mv 从 src/content/config.ts 迁移），否则构建报 legacy-content-config-error。不要改回旧路径。
- OG 图为 public/og-image.png（1200×630，已去除生成水印），仅一张默认图、无中英分版。
- robots.txt、sitemap 已就位；构建通过；提交仅在本地。

## 下一步
1. （可选）补充中英双语 OG 图。
2. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
3. 部署后验证 og:image、robots.txt、sitemap、404 页面。

## taste-skill 设计审计（2026-08-08，本地未提交）
按 taste-skill 反 AI-slop 方法论清理设计 Tell，仅动样式与文案，
未改动内容 IA、URL、路由和功能逻辑。
- 英文文案 em-dash 清扫：SEO 标题 `X — Brand` 统一为 `X | Brand`、404 标题改用冒号、
  正文按语义改冒号/分号/逗号；中文“——”为规范破折号，保留未动。
- `npm run build` 验证通过（8 页）。

后续：审阅上述改动后按原子规则分批提交推送（英文 Conventional Commits）。
