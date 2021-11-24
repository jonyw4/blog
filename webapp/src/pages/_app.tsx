import "normalize.css";
import "../components/global/styles/global.css";
import Script from "next/script";
import { UIProvider } from "../components/global";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { ThemeLocalStorageRepository } from "../infra/ThemeLocalStorageRepository";
import { adaptThemeRepositoryToThemeData } from "../components/global/adapters";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLocale = (nextLocale) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  const themeRepository = new ThemeLocalStorageRepository();
  const themeData = adaptThemeRepositoryToThemeData(themeRepository)

  return (
    <UIProvider themeData={themeData} locale={{ locale, changeLocale }}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3S37WC9HP3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3S37WC9HP3');
        `}
      </Script>
      <Component {...pageProps} />
    </UIProvider>
  );
}
