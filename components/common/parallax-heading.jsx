import Styles from "styles/components/common/parallax-heading.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import AnimatedText from "utils/animated-text";
import AnimatedHeading from "utils/home/animated-heading";
export default function ParallaxHeading({ title, subtitle }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [done, setDone] = useState(false);

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
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={Styles.mainDiv}
    >
      <AnimatedText
        type="heading2"
        text={subtitle}
        className={Styles.subtitle}
      />
      <AnimatedHeading heading={title} />
    </motion.div>
  );
}
