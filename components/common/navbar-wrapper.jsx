import Navbar from "components/layout/navbar";
import Styles from "styles/components/navbar-wrapper.module.scss";
export default function NavbarWrapper({ children }) {
  return (
    <>
      <Navbar />
      <div className={Styles.navbarWrapper}>{children}</div>
    </>
  );
}
