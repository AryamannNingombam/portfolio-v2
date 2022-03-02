import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Styles from "styles/utils/animated-heading.module.scss";

const boxVariants = {
  hidden: { y: 300, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};
export default function AnimatedHeading({ heading }) {
  const controls = useAnimation();
  let { ref, inView } = useInView();
  const [done, setDone] = useState(false);
  const parallax = useParallax({
    speed: 20,
  });
  ref = parallax.ref;
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
    <div
      ref={parallax.ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    >
      <motion.span className={Styles.mainTitle}>{heading}</motion.span>
    </div>
  );
}
