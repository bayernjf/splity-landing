// i18n 工具：从 URL 解析语言、按语言取文案、生成本地化路径
import {
  translations,
  defaultLang,
  languages,
  type Lang,
  type Translation,
} from "./ui";

export { translations, defaultLang, languages };
export type { Lang, Translation };

// 从 URL 路径推断当前语言：/zh/... 返回 "zh"，其余返回 "en"
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "zh") return "zh";
  return defaultLang;
}

// 返回指定语言的翻译对象（直接访问字段，类型安全）
export function useTranslations(lang: Lang): Translation {
  return translations[lang] ?? translations[defaultLang];
}

// 生成本地化路径：en 不加前缀，zh 加 /zh 前缀
// path 形如 "/" 或 "/about" 或 "/blog/post-slug"
export function getLocalizedPath(path: string, lang: Lang = defaultLang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) {
    return clean === "/" ? "/" : clean;
  }
  // zh: /zh + path（path 为 "/" 时简化为 "/zh"）
  return clean === "/" ? "/zh" : `/zh${clean}`;
}

// 获取对端语言（用于语言切换按钮）
export function getAltLang(lang: Lang): Lang {
  return lang === "zh" ? "en" : "zh";
}

// 根据当前路径和对端语言生成交替语言路径
// 例如当前在 /zh/about，切换到 en 应得到 /about
// 当前在 /about，切换到 zh 应得到 /zh/about
export function getAltLangPath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split("/").filter(Boolean);
  // 去掉可能的语言前缀
  if (segments.length > 0 && (segments[0] === "zh" || segments[0] === "en")) {
    segments.shift();
  }
  const rest = segments.length > 0 ? `/${segments.join("/")}` : "/";
  return getLocalizedPath(rest === "" ? "/" : rest, targetLang);
}

// hreflang 完整 URL（用于 <link rel="alternate">）
export function getHrefLangUrl(
  pathname: string,
  lang: Lang,
  siteUrl: string
): string {
  const base = siteUrl.replace(/\/$/, "");
  const path = getLocalizedPath(pathname === "/" ? "/" : pathname, lang);
  return `${base}${path}`;
}

// 根据语言返回 BCP 47 语言标签（用于 <html lang="...">）
export function getHtmlLang(lang: Lang): string {
  return lang === "zh" ? "zh-CN" : "en";
}

// 根据语言返回 Open Graph locale（用于 og:locale）
export function getOgLocale(lang: Lang): string {
  return lang === "zh" ? "zh_CN" : "en_US";
}

// 根据语言返回 RSS <language> 元素值
export function getRssLanguage(lang: Lang): string {
  return lang === "zh" ? "zh-CN" : "en-US";
}

// 根据语言返回日期格式化 locale
export function getDateLocale(lang: Lang): string {
  return lang === "zh" ? "zh-CN" : "en-US";
}
