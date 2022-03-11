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
              <span>The first</span> Ethereum based NFT platform in{" "}
              <span>India</span> . We are in talks with{" "}
              <span>national and international NFT buyers</span> regarding our
              first project, we&apos;ve{" "}
              <span>cold-pitched our idea on Clubhouse,</span>
              launched our own podcast, and have been{" "}
              <span>shortlisted for Shark Tank India</span>(round 2).
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
              Working as <span> full-stack consultant</span> at Spacenos,
              building the backend using firebase functions, integrations with{" "}
              <span>Stripe API, Quickblox, </span> and building the frontend for
              their web app projects. Promoted from{" "}
              <span>intern to consultant in 3 months.</span>
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
              Full-Stack developer at BugBase, mainly{" "}
              <span>handling the backend</span> and{" "}
              <span> integrations with the frontend,</span> built on{" "}
              <span> Node+TS & Nextjs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
