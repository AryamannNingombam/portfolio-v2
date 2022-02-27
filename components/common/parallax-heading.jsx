import Styles from "styles/components/common/parallax-heading.module.scss";
import { useParallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import AnimatedText from "utils/navbar/animated-text";
export default function ParallaxHeading({ title, subtitle }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [done, setDone] = useState(false);
  const parallax = useParallax({
    speed: -10,
  });

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  useEffect(() => {
    if (!done) {
      if (inView) {
        controls.start("visible");
        setDone(true);
      }
      if (!inView) {
        controls.start("hidden");
      }
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className={Styles.mainDiv}
    >
      <span ref={parallax.ref} className={Styles.mainTitle}>
        {title}
      </span>
      <AnimatedText
        type="heading2"
        text={subtitle}
        className={Styles.subtitle}
      />
    </motion.div>
  );
}
