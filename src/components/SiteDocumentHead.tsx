import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  canonicalUrl,
  DEFAULT_KEYWORDS,
  seoForPath,
  SITE_ORIGIN,
} from "../constants/siteSeo";

function setMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

const OG_IMAGE = `${SITE_ORIGIN}/seo-logo.png`;

/**
 * Updates title and meta tags when users navigate between SPA routes
 * (helps social previews and some crawlers that execute JavaScript).
 */
export function SiteDocumentHead() {
  const { pathname } = useLocation();
  const seo = seoForPath(pathname);
  const canonical = canonicalUrl(pathname);
  const keywords = seo.keywords ?? DEFAULT_KEYWORDS;

  useEffect(() => {
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "keywords", keywords);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", OG_IMAGE);
    setLink("canonical", canonical);
  }, [seo.title, seo.description, keywords, canonical]);

  return null;
}
