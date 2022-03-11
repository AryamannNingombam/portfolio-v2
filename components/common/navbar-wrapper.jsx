import { useRef } from "react";
import Navbar from "components/layout/navbar";
import Styles from "styles/components/navbar-wrapper.module.scss";
export default function NavbarWrapper({ children }) {
  const scrollingContainer = useRef();
  return (
    <>
      <Navbar />
      <div ref={scrollingContainer} className={Styles.navbarWrapper}>
        {children}
      </div>
    </>
  );
}
