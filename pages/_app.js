import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="A place where you will find many meetups"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
