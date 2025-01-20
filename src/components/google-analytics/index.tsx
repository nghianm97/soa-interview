import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FBS9XBC51W"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', 'G-FBS9XBC51W');`,
        }}
        strategy="afterInteractive"
      />
    </>
  );
}
