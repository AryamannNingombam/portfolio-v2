import Styles from "styles/components/home/navbar-section.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import ParallaxHeading from "components/common/parallax-heading";

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

export default function NavbarSection({ link, title, subtitle }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const [done, setDone] = useState(false);
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
    <section className={Styles.mainSection} id={link}>
      <div className={Styles.headingDiv}>
        <ParallaxHeading title={title} subtitle={subtitle} />
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        className={Styles.imageDiv}
      ></motion.div>
    </section>
  );
}
