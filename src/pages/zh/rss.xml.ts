import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE, SITE_ZH } from "../../consts.ts";
import { getRssLanguage, type Lang } from "../../i18n/utils.ts";

const lang: Lang = "zh";

export async function GET(context: { site: URL }) {
  // 中文 RSS 使用 blog 集合（src/content/blog/ 顶层）
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const siteMeta = SITE_ZH;

  return rss({
    title: siteMeta.title,
    description: siteMeta.description,
    site: context.site ?? SITE.url,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      // 中文文章链接前缀加 /zh
      link: `/zh/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>${getRssLanguage(lang)}</language>`,
  });
}
