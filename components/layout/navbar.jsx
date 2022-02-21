import { useState } from "react";
import Styles from "styles/components/layout/navbar.module.scss";
import { motion } from "framer-motion";
import { NAVBAR_LINKS } from "constants";
import NavbarLink from "./navbar-link";

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
              <NavbarLink key={index} value={value} />
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
