import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
