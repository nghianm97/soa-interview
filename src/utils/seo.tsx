interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  siteName?: string
  type?: string
}

export default function SEO({
  title,
  description,
  image = '/gkebook-logo.svg',
  url = "",
  siteName = "gk-ebook",
  type = 'website'
}: SEOProps) {
  return (
    <>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="canonical" href={url} />
      {/* End standard metadata tags */}
      {/* Facebook/Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      {/* End Facebook/Open Graph tags */}
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* End Twitter Card tags */}
      {/* LinkedIn tags */}
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <meta property="og:author" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {/* End LinkedIn tags */}
      {/* Pinterest tags */}
      <meta name="pinterest-rich-pin" content="true" />
      {/* End Pinterest tags */}
      {/* Google tags */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      {/* End Google tags */}
      {/* Apple tags */}
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {/* End Apple tags */}
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "${siteName}",
            "url": "${url}",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${url}/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>
      {/* End Schema.org markup */}
    </>
  )
}
