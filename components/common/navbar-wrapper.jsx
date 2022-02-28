import Navbar from "components/layout/navbar";
import Styles from "styles/components/navbar-wrapper.module.scss";
import EasterEggLink from "./easter-egg";
export default function NavbarWrapper({ children }) {
  return (
    <>
      <Navbar />
      <EasterEggLink />
      <div className={Styles.navbarWrapper}>{children}</div>
    </>
  );
}
