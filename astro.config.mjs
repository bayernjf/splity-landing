// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "zh-CN",
        locales: { "zh-CN": "zh-CN" },
      },
    }),
    mdx(),
  ],
  output: "static",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
