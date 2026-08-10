import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

// 中文博客：src/content/blog/ 顶层（不含 en/ 子目录）
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "*.{md,mdx}" }),
  schema: blogSchema,
});

// 英文博客：src/content/blog/en/
const blogEn = defineCollection({
  loader: glob({ base: "./src/content/blog/en", pattern: "*.{md,mdx}" }),
  schema: blogSchema,
});

export const collections = { blog, blogEn };
