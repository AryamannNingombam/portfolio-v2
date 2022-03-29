import { useState, useEffect } from "react";
import Styles from "styles/components/layout/navbar.module.scss";
import { motion } from "framer-motion";
import { NAVBAR_LINKS } from "constants";
import NavbarLink from "./navbar-link";
import Image from "next/image";
import Logo from "assets/me/logo.png";
import Link from "next/link";

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
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const changeWidth = () => {
      if (window.scrollY <= 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    changeWidth();
    window.addEventListener("scroll", changeWidth);
  });
  return (
    <div
      style={{
        top: showNavbar ? "0" : "-80px",
      }}
      onClick={() => setMenuOpen((previous) => !previous)}
      className={`${Styles.navbarMenuButton}`}
    >
      <div className={Styles.image}>
        <Link href="/">
          <Image src={Logo} height={50} width={50} />
        </Link>
      </div>
      <div className={Styles.navbar}>
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
    </div>
  );
}
