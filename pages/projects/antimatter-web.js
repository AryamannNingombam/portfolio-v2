import NavbarWrapper from "components/common/navbar-wrapper";
import Image from "next/image";
import styles from "styles/components/common/project.module.scss";
import AntimatterMainLogo from "assets/projects/antimatter-web/antimatter-big-logo.png";
import MainImage1 from "assets/projects/antimatter-web/main-image-1.png";
import MainImage2 from "assets/projects/antimatter-web/main-image-2.png";
import MainImage3 from "assets/projects/antimatter-web/main-image-3.png";
import Head from "next/head";
export default function AntimatterWebProject() {
  return (
    <NavbarWrapper>
      <Head>
        <title>antimatterlabs.in - Aryamann Ningombam</title>
      </Head>
      <div className={styles.mainDiv}>
        <div className={styles.headingSection}>
          <h1 className={styles.heading}>Antimatter Web</h1>
          <h2 className={styles.subheading}>ANTIMATTER LABS</h2>
        </div>
        <div className={styles.descriptionSection}>
          <div className={styles.description}>
            <p>
              Antimatter is an <span> ecommerce platform </span> where you have
              the option to buy the product you want for a{" "}
              <span> fixed price </span> or you can sell it{" "}
              <span> with a bidding system. </span>
            </p>
          </div>
          <div className={styles.image}>
            <Image
              height={4000}
              width={4000}
              alt="g"
              src={AntimatterMainLogo}
            />
          </div>
        </div>
        <div className={styles.mainImage}>
          <Image src={MainImage1} alt="f" />
        </div>
        <div className={styles.aboutMoonnets}>
          <h2 className={styles.aboutMoonnetsHeading}>About Antimatter Web</h2>
          <div className={styles.description}>
            <p>
              Antimatter labs is{" "}
              <span> one of the first ecommerce platforms in our country </span>{" "}
              that provides sellers a platform{" "}
              <span> to sell their product directly </span> or{" "}
              <span> put it up for bidding.</span>
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
              This was a <span> freelance project </span> where I
              <span> made the backend </span> and{" "}
              <span> integrated the frontend and the backend </span>, worked in
              the whole <span> payment flow </span>
              using <span> Razorpay </span>
            </p>
            <p>
              The backend is built on <span> Node.js </span> and{" "}
              <span> Typescript </span> and the frontend is built on NextJs.
            </p>
          </div>
        </div>
        <div className={styles.linksAndStack}>
          <div className={styles.links}>
            <div className={styles.section}>
              <div>
                <a
                  href="https://kryptocards.tech"
                  target="_blank"
                  rel="noreferrer"
                >
                  project
                </a>
              </div>

              <span>website</span>
            </div>
            <div className={styles.section}>
              <div className={styles.row}>
                <div>node+ts</div>
                <div>react</div>
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
