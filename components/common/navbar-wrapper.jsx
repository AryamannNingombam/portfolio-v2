import { useRef } from "react";
import Navbar from "components/layout/navbar";
import Styles from "styles/components/navbar-wrapper.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "./footer";
export default function NavbarWrapper({ children }) {
  const scrollingContainer = useRef();
  // scrollingContainer.current.scrollIntoView({
  //   behavior: "smooth",
  // });
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        ref={scrollingContainer}
        className={Styles.navbarWrapper}
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
}
