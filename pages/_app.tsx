import '@/styles/globals.css';
import Script from 'next/script';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <!-- Google tag (gtag.js) -->
    <>
      <Script
        strategy="afterInteractive"
        src={'https://www.googletagmanager.com/gtag/js?id=G-7KTXQHBRRD'}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-7KTXQHBRRD');
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
