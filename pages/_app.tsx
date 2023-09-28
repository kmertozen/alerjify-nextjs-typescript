import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import dayjs from "dayjs";
import "dayjs/locale/tr";
export default function App({ Component, pageProps }: AppProps) {
  dayjs.locale("tr");
  return (
    <>
      <Head>
        <title>{pageProps?.meta?.title}</title>
        <meta name="description" content={pageProps?.meta?.description} />
      </Head>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
