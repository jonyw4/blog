import "normalize.css";
import "../components/global/styles/global.css";

import Head from "next/head";
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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </UIProvider>
  );
}
