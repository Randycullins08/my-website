import Head from "next/head";

import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Randy Cullins</title>
        <meta name="description" content="Randy Cullins Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </>
  );
}
