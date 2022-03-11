import React from "react";
import Image from "next/image";
import ME from "assets/me/me.jpeg";
import Styles from "styles/components/home/image.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const boxVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    opacity: 0.5,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};
export default function HomeImage({ image, krypto }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
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
      variants={boxVariants}
      className={Styles.mainDiv}
    >
      {" "}
      <Image
        src={image}
        layout="fixed"
        width={krypto ? 500 : 380}
        objectFit="cover"
        height={500}
        alt="profile"
        className={Styles.mainImage}
      />
    </motion.div>
  );
}
