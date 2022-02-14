import dynamic from "next/dynamic";
import "styles/globals.scss";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="76,224,210"
        outerAlpha={0.1}
        innerScale={0.9}
        trailingSpeed={5}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
