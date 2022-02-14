import { useRef, useState } from "react";
import Styles from "styles/components/layout/navbar.module.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef();
  return (
    <div
      onClick={() => setMenuOpen((previous) => !previous)}
      ref={menuButton}
      className={`${Styles.navbarMenuButton}`}
    >
      <div
        className={`${Styles.menuButtonBurger}  ${menuOpen ? Styles.open : ""}`}
      ></div>
    </div>
  );
}
