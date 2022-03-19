import React from "react";
import Styles from "styles/components/home/hero.module.scss";
import HomeImage from "./image";
import { BsInstagram, BsGithub, BsLinkedin, BsPaperclip } from "react-icons/bs";
import MyImage from "assets/me/me.jpeg";
import ReaderImage from "assets/me/reader.jpeg";
import CollegeImage from "assets/me/college.jpg";
import SchoolImage from "assets/me/school.jpeg";
import FatherImage from "assets/me/dad.jpeg";
import KryptoImage from "assets/projects/krypto-cards/krypto-cards-small-logo.png";
import ChallengeImage from "assets/me/challenge.jpeg";
import Link from "next/link";
export default function Hero() {
  const [currentImage, setCurrentImage] = React.useState(null);
  return (
    <section id="home" className={Styles.mainDiv}>
      <div className={Styles.childDiv}>
        <div className={Styles.hi}>Hello,</div>
        <div className={Styles.hi}>
          I&apos;m{" "}
          <div
            onMouseOver={() => setCurrentImage(MyImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={`${Styles.bold} ${Styles.strikethrough}`}
          >
            Aryamann
          </div>
        </div>
        <div className={Styles.description}>
          A full-stack developer, tech enthusiast, athlete, and an avid{" "}
          <span
            onMouseOver={() => setCurrentImage(ReaderImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={Styles.strikethrough}
          >
            reader
          </span>{" "}
          . Currently pursuing my Bachelor&apos;s(CSE) from{" "}
          <span
            onMouseOver={() => setCurrentImage(CollegeImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={Styles.strikethrough}
          >
            Manipal Institute Of Technology
          </span>{" "}
          , have changed more than{" "}
          <span
            onMouseOver={() => setCurrentImage(SchoolImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={Styles.strikethrough}
          >
            10 schools in my life
          </span>{" "}
          owing to{" "}
          <span
            onMouseOver={() => setCurrentImage(FatherImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={Styles.strikethrough}
          >
            father&apos;s army career.
          </span>{" "}
          Worked under multiple startups, co-founded my{" "}
          <span
            onMouseOver={() => setCurrentImage(KryptoImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={Styles.strikethrough}
          >
            own
          </span>
          , and always up for a{" "}
          <span
            onMouseOver={() => setCurrentImage(ChallengeImage)}
            onMouseLeave={() => setCurrentImage(null)}
            className={Styles.strikethrough}
          >
            challenge
          </span>{" "}
          .
        </div>
        <div className={Styles.links}>
          <div className={Styles.left}>
            <a
              target={"_blank"}
              rel="noreferrer"
              href={"https://github.com/AryamannNingombam"}
            >
              <BsGithub size={30} className={Styles.link} />
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href={"https://linkedin.com/in/aryamann"}
            >
              <BsLinkedin size={30} className={Styles.link} />
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href={"https://instagram.com/ary_amann"}
            >
              <BsInstagram size={30} className={Styles.link} />
            </a>
          </div>
          <div className={Styles.right}>
            <Link passHref={true} className={Styles.resume} href="/resume.pdf">
              <BsPaperclip size={30} className={Styles.link} />
            </Link>
          </div>
        </div>
      </div>

      {currentImage && (
        <HomeImage image={currentImage} krypto={currentImage === KryptoImage} />
      )}
    </section>
  );
}
