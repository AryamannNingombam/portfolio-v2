import { useRef, useState } from "react";
import Styles from "styles/components/layout/navbar.module.scss";
import { motion } from "framer-motion";
import { NAVBAR_LINKS } from "constants";
import Router from "next/router";

const returnItem = (dist) => ({
  hidden: { x: 0, opacity: 0 },
  visible: { x: dist * 4, opacity: 1, transition: { delay: 0.1 } },
});

const container = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {" "}
      <div
        onClick={() => setMenuOpen((previous) => !previous)}
        className={`${Styles.navbarMenuButton}`}
      >
        {menuOpen && (
          <motion.ul
            className={Styles.linkContainer}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {NAVBAR_LINKS.map((value, index) => (
              <motion.span
                onClick={() => {
                  console.log("CLICKED");
                  Router.push(value.link);
                }}
                key={index}
                className={Styles.item}
                variants={returnItem(value.distance)}
              >
                {" "}
                <span className={Styles.mainText}>{value.name}</span>
              </motion.span>
            ))}
          </motion.ul>
        )}
        <div
          className={`${Styles.menuButtonBurger}  ${
            menuOpen ? Styles.open : ""
          }`}
        ></div>
      </div>
    </>
  );
}
