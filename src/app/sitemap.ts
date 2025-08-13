// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://growsavoir.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/courses`, lastModified: now },
    { url: `${baseUrl}/admin`, lastModified: now },
    { url: `${baseUrl}/auth/signin`, lastModified: now },
    { url: `${baseUrl}/auth/signup`, lastModified: now },
  ];
}
