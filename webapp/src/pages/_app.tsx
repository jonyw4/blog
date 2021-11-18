import "normalize.css";
import "../components/global/styles/global.css";
import { LocaleContext } from "../components/global";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLocale = (nextLocale) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <LocaleContext.Provider value={{ locale: locale, changeLocale }}>
      <Component {...pageProps} />
    </LocaleContext.Provider>
  );
}
