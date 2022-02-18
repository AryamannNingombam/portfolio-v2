import "styles/globals.scss";
import router from "next/router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TopBarProgress from "react-topbar-progress-indicator";
import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

TopBarProgress.config({
  barThickess: 5,
  shadowBlur: 3,
  barColors: {
    0.1: "#0F433A",
    0.2: "#176457",
    0.3: "#1E8574",
    0.4: "#26A691",
    0.5: "#2DC8AE",
    0.6: "#48D5BE",
    0.7: "#59D9C4",
    0.8: "#7AE1D0",
    0.9: "#9BE8DC",
    1: "#BCF0E8",
  },
});

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(false);

  router.events.on("routeChangeStart", () => {
    setProgress(true);
    //when route change starts;
  });
  router.events.on("routeChangeComplete", () => {
    setProgress(false);
    //when route change ends;
  });
  return (
    <>
      <ParallaxProvider>
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          color="76,224,210"
          outerAlpha={0.1}
          innerScale={0.9}
          trailingSpeed={5}
        />
        {progress && <TopBarProgress />}
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
