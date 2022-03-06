import Styles from "styles/pages/projects/krypto-cards.module.scss";
import MainImage from "assets/projects/krypto-cards/krypto-cards-2.svg";
import Image from "next/image";
import NavbarWrapper from "components/common/navbar-wrapper";
import AnimatedHeading from "utils/home/animated-heading";
import ParallaxHeading from "components/common/parallax-heading";

export default function KryptoCardsProject() {
  return (
    <NavbarWrapper>
      <div className={Styles.mainDiv}>
        <ParallaxHeading
          title={"Krypto Cards"}
          subtitle={"The first ethereum based platform in India"}
        />
      </div>
    </NavbarWrapper>
  );
}
