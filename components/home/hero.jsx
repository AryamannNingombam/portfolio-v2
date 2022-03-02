import Styles from "styles/components/home/hero.module.scss";
import HomeImage from "./image";
import { BsInstagram, BsGithub, BsLinkedin, BsPaperclip } from "react-icons/bs";
export default function Hero() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.childDiv}>
        <div className={Styles.hi}>Hi,</div>
        <div className={Styles.hi}>
          I&apos;m <span className={Styles.bold}>Aryamann</span>{" "}
        </div>
        <div className={Styles.description}>
          A full-stack developer, tech enthusiast, athlete, and an avid reader.
          Currently pursuing my Bachelor&apos;s(CSE) from Manipal Institute Of
          Technology, have changed more than 10 schools in my life owing to
          father&apos;s army career. Have worked under multiple startups, and
          always up for a challenge.
        </div>
        <div className={Styles.links}>
          <BsGithub size={30} className={Styles.link} />
          <BsLinkedin size={30} className={Styles.link} />
          <BsInstagram size={30} className={Styles.link} />
          <BsPaperclip size={30} className={Styles.link} />
        </div>
      </div>

      <HomeImage />
    </div>
  );
}
