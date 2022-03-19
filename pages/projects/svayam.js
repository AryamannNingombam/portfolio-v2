import NavbarWrapper from "components/common/navbar-wrapper";
import Image from "next/image";
import styles from "styles/components/common/project.module.scss";
import SvayamMainLogo from "assets/projects/svayam/svayam-big-logo.png";
import MainImage2 from "assets/projects/svayam/main-image-2.png";
import MainImage3 from "assets/projects/svayam/main-image-3.png";
export default function BugbaseProject() {
  return (
    <NavbarWrapper>
      <div className={styles.mainDiv}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>Svayam</h1>
          <h2 className={styles.subheading}>SMART INDIA HACKATHON(2022)</h2>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <p>
              Svayam is a web application that helps the farmers to manage their
              farms. It is a web application that helps the farmers to manage
              their farms. It is a web application that helps the farmers
            </p>
            <p>
              A realm, breathed to life, colossal yet the most oblivious one.
              Enshrouded in the allure of darkness, it still shines the
              brightest, basking in its glory - the abode of ephemeral galaxies
              - the Cosmos sovereign. Birthed and ruled by the primordial god of
              light, atmosphere, space, and heaven - Aether! We are all only a
              minuscule part of this vast expanse, one of its significant and
              active provinces - The Solar System.
            </p>
          </div>
          <div className={styles.image}>
            <Image height={4000} width={4000} alt="g" src={SvayamMainLogo} />
          </div>
        </div>
        <div className={styles.mainImage}>
          <iframe
            width="1100"
            height="700"
            src="https://www.youtube.com/embed/maI5PTvtnmY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>About Svayam</h2>
          <div className={styles.description}>
            <p>
              A realm, breathed to life, colossal yet the most oblivious one.
              Enshrouded in the allure of darkness, it still shines the
              brightest, basking in its glory - the abode of ephemeral galaxies
              - the Cosmos sovereign. Birthed and ruled by the primordial god of
              light, atmosphere, space, and heaven - Aether! We are all only a
              minuscule part of this vast expanse, one of its significant and
              active provinces - The Solar System.
            </p>
            <p>
              A realm, breathed to life, colossal yet the most oblivious one.
              Enshrouded in the allure of darkness, it still shines the
              brightest, basking in its glory - the abode of ephemeral galaxies
              - the Cosmos sovereign. Birthed and ruled by the primordial god of
              light, atmosphere, space, and heaven - Aether! We are all only a
              minuscule part of this vast expanse, one of its significant and
              active provinces - The Solar System.
            </p>
          </div>
        </div>
        <div className={styles.mainImage}>
          <Image src={MainImage2} alt="f" />
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>My Role</h2>
          <div className={styles.description}>
            <p>
              A realm, breathed to life, colossal yet the most oblivious one.
              Enshrouded in the allure of darkness, it still shines the
              brightest, basking in its glory - the abode of ephemeral galaxies
              - the Cosmos sovereign. Birthed and ruled by the primordial god of
              light, atmosphere, space, and heaven - Aether! We are all only a
              minuscule part of this vast expanse, one of its significant and
              active provinces - The Solar System.
            </p>
            <p>
              A realm, breathed to life, colossal yet the most oblivious one.
              Enshrouded in the allure of darkness, it still shines the
              brightest, basking in its glory - the abode of ephemeral galaxies
              - the Cosmos sovereign. Birthed and ruled by the primordial god of
              light, atmosphere, space, and heaven - Aether! We are all only a
              minuscule part of this vast expanse, one of its significant and
              active provinces - The Solar System.
            </p>
          </div>
        </div>
        <div className={styles.linksAndStack}>
          <div className={styles.links}>
            <div className={styles.section}>
              <div>
                <a href="https://bugbase.in" target="_blank" rel="noreferrer">
                  project here
                </a>
              </div>

              <span>website</span>
            </div>
            <div className={styles.section}>
              <div className={styles.row}>
                <div>node</div>
                <div>nextjs</div>
                <div>ipfs</div>
                <div>razorpay</div>
              </div>
              <span>tech stack</span>
            </div>
          </div>
          <div className={styles.image}>
            <Image src={MainImage3} alt="f" />
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
}
