import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/quiz-create", "/book"],
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/quiz-create", "/book"],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/quiz-create", "/book"],
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/quiz-create", "/book"],
      },
    ],
    sitemap: "https://gkebooks.edu.vn/sitemap.xml",
  };
}
