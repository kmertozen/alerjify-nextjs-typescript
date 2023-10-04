import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  dayjs.locale("tr");
  return (
    <>
      <Head>
        <title>{pageProps?.meta?.title}</title>
        <meta name="description" content={pageProps?.meta?.description} />
        <meta
          name="keywords"
          content="Alerji, Yemek, Yemek Tarifleri, Nefis Yemek Tarifleri, Gıda Hassasiyeti, Gıda, Hassasiyet, Tarifler, Diyet, Diyet Çeşitleri"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5361129984468141"
          crossOrigin="anonymous"
        ></script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BZ7FPPDRD2"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
		function gtag() {
				dataLayer.push(arguments);
			}
		gtag('js', new Date());

		gtag('config', 'G-BZ7FPPDRD2');`,
          }}
        />
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
