import React from "react";
import Styles from "styles/components/home/hero.module.scss";
import HomeImage from "./image";
import { BsInstagram, BsGithub, BsLinkedin, BsPaperclip } from "react-icons/bs";
import MyImage from "assets/me/me.jpeg";
import ManipalImage from "assets/me/manipal.jpeg";
import Link from "next/link";
export default function Hero() {
  const [currentImage, setCurrentImage] = React.useState(null);
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.childDiv}>
        <div className={Styles.hi}>Hello,</div>
        <div className={Styles.hi}>
          I&apos;m{" "}
          <div
            onMouseEnter={() => setCurrentImage(MyImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={`${Styles.bold} ${Styles.strikethrough}`}
          >
            Aryamann
          </div>
        </div>
        <div className={Styles.description}>
          A full-stack developer, tech enthusiast, athlete, and an avid{" "}
          <span className={Styles.strikethrough}>reader</span> . Currently
          pursuing my Bachelor&apos;s(CSE) from{" "}
          <span
            onMouseEnter={() => setCurrentImage(ManipalImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={Styles.strikethrough}
          >
            Manipal Institute Of Technology
          </span>{" "}
          , have changed more than{" "}
          <span className={Styles.strikethrough}>10 schools in my life</span> 10
          schools in my life owing to{" "}
          <span className={Styles.strikethrough}>
            father&apos;s army career.
          </span>
          Worked under multiple startups, co-founded my{" "}
          <span className={Styles.strikethrough}>own</span>, and always up for a{" "}
          <span className={Styles.strikethrough}>challenge</span> .
        </div>
        <div className={Styles.links}>
          <Link
            target={"_blank"}
            passHref={true}
            href={"https://github.com/AryamannNingombam"}
          >
            <BsGithub size={30} className={Styles.link} />
          </Link>
          <Link
            target={"_blank"}
            passHref={true}
            href={"https://linkedin.com/in/aryamann"}
          >
            <BsLinkedin size={30} className={Styles.link} />
          </Link>
          <Link
            target={"_blank"}
            passHref={true}
            href={"https://instagram.com/ary_amann"}
          >
            <BsInstagram size={30} className={Styles.link} />
          </Link>
          <Link href="/resume.pdf">
            <BsPaperclip size={30} className={Styles.link} />
          </Link>
        </div>
      </div>

      {currentImage && <HomeImage image={currentImage} />}
    </div>
  );
}
