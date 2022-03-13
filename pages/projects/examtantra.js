import NavbarWrapper from "components/common/navbar-wrapper";
import Image from "next/image";
import styles from "styles/components/common/project.module.scss";
import ExamtantraMainLogo from "assets/projects/examtantra/examtantra-big-logo.png";
import MainImage1 from "assets/projects/examtantra/main-image-1.png";
import MainImage2 from "assets/projects/examtantra/main-image-2.png";
import MainImage3 from "assets/projects/examtantra/main-image-3.png";
export default function ExamtantraProject() {
  return (
    <NavbarWrapper>
      <div className={styles.mainDiv}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>Examtantra</h1>
          <h2 className={styles.subheading}>HACKOWASP 3.0</h2>
        </div>
        <div className={styles.descriptionSection}>
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
          <div className={styles.image}>
            <Image
              height={4000}
              width={4000}
              alt="g"
              src={ExamtantraMainLogo}
            />
          </div>
        </div>
        <div className={styles.mainImage}>
          <Image src={MainImage1} alt="f" />
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>About Examtantra</h2>
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
                  download here
                </a>
              </div>

              <span>link</span>
            </div>
            <div className={styles.section}>
              <div className={styles.row}>
                <div>firebase</div>
                <div>ionic</div>
                <div>react</div>
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
