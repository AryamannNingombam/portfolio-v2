import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
export default function ParallaxHeading({ title }) {
  const parallax = useParallax({
    speed: -10,
  });
  return (
    <>
      <div style={{ margin: "100px" }} ref={parallax.ref}>
        {title} HEHHEHEHH
      </div>
    </>
  );
}
