import HomePage from "@components/pages/Home";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trending Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
