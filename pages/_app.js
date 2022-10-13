import "styles/globals.scss";
import router from "next/router";
import { useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import dynamic from "next/dynamic";
import Head from "next/head";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <SmoothScroll />  */}
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="255,255,255"
        outerAlpha={0.1}
        innerScale={0.9}
        trailingSpeed={5}
      />
      <Head>
        <title>Aryamann Ningombam</title>
        <meta
          name="description"
          content="Aryamann Ningombam is a full stack developer and entrepreneur.
          He loves all things tech, and
          believes in the power of technology."
        />
        <meta
          name="keywords"
          content="aryamann,ningombam,manipal,entrepreneur,formi,krypto,cards,bugbase,mrex,mit"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
