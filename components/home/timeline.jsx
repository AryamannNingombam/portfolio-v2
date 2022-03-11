import Styles from "styles/components/home/timeline.module.scss";
import KryptoCardsLogo from "assets/projects/krypto-cards/krypto-cards-small-logo.png";
import BugBaseLogo from "assets/projects/bugbase/bugbase-small-logo.png";
import SpacenosLogo from "assets/projects/spacenos-small-logo.png";
import Image from "next/image";
export default function Timeline() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.mainHeading}>Work Experience</div>
      <div className={Styles.timelineContainer}>
        <div className={Styles.timeLine} />
        <div className={`${Styles.dot} ${Styles.dot1}`} />
        <div className={`${Styles.dot} ${Styles.dot2}`} />
        <div className={`${Styles.dot} ${Styles.dot3}`} />

        <div className={`${Styles.workTile} ${Styles.workTile1}`}>
          <Image
            src={KryptoCardsLogo}
            alt="f"
            width={530}
            height={530}
            className={Styles.workImage}
          />
          <div className={Styles.workDetails}>
            <h3 className={Styles.name}>Krypto Cards</h3>
            <div className={Styles.designation}>
              CO-FOUNDER & COO
              <span className={Styles.light}> ( June 21 - December 21 )</span>
            </div>
            <div className={Styles.description}>
              The first Ethereum based NFT platform in India. We are in talks
              with national and international NFT buyers regarding our first
              project, we&apos;ve cold-pitched our idea on Clubhouse, launched
              our own podcast, and have been shortlisted for Shark Tank India.
            </div>
          </div>
        </div>

        <div className={`${Styles.workTile} ${Styles.workTile2}`}>
          <Image
            src={SpacenosLogo}
            alt="f"
            width={330}
            height={330}
            className={Styles.workImage}
          />
          <div className={Styles.workDetails}>
            <h3 className={Styles.name}>Spacenos</h3>
            <div className={Styles.designation}>
              DEV CONSULTANT{" "}
              <span className={Styles.light}>( Jan 22 - Present )</span>
            </div>
            <div className={Styles.description}>
              Working as full-stack consultant at Spacenos, building the backend
              using firebase functions, integrating with Stripe API, and
              building the frontend for their web app.
            </div>
          </div>
        </div>

        <div className={`${Styles.workTile} ${Styles.workTile3}`}>
          <Image
            src={BugBaseLogo}
            alt="f"
            width={330}
            height={330}
            className={Styles.workImage}
          />
          <div className={Styles.workDetails}>
            <h3 className={Styles.name}>BugBase</h3>
            <div className={Styles.designation}>
              FULL-STACK DEVELOPER
              <span className={Styles.light}> ( Jan 22 - Present )</span>
            </div>
            <div className={Styles.description}>
              Full-Stack developer at BugBase, mainly handling the backend and
              integrations with the frontend, built on Node+TS & Nextjs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
