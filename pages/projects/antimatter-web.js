import Styles from "styles/pages/projects/krypto-cards.module.scss";
import MainImage from "assets/projects/krypto-cards/krypto-cards-2.svg";
import Image from "next/image";
import NavbarWrapper from "components/common/navbar-wrapper";
import ParallaxHeading from "components/common/parallax-heading";

export default function AntimatterWeb() {
  return (
    <NavbarWrapper>
      <div className={Styles.mainDiv}>
        <ParallaxHeading
          title={"Antimatter Labs"}
          subtitle={"An Ecommerce Store"}
        />
      </div>
    </NavbarWrapper>
  );
}
