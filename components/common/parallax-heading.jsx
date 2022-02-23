import Styles from "styles/components/common/parallax-heading.module.scss";
import { useParallax } from "react-scroll-parallax";
export default function ParallaxHeading({ title }) {
  const parallax = useParallax({
    speed: -10,
  });
  return (
    <div className={Styles.mainDiv} ref={parallax.ref}>
      <span className={Styles.mainTitle}>{title}</span>
    </div>
  );
}
