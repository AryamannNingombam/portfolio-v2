import "styles/components/home/hero.module.scss";
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

export default function NavbarSection({ title, list }) {
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
    <section id={title}>
      <div
        style={{
          margin: "23px auto",
          fontSize: "5rem",
          height: "100px",
          backgroundColor: "blue",
        }}
      >
        <ParallaxHeading title={title} />
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        style={{
          height: "300px",
          width: "300px",
          margin: "200px auto",
          backgroundColor: "red",
        }}
      ></motion.div>
    </section>
  );
}
