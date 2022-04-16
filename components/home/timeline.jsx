import Styles from "styles/components/home/timeline.module.scss";
import KryptoCardsLogo from "assets/projects/krypto-cards/krypto-cards-small-logo.png";
import SpacenosLogo from "assets/projects/spacenos-small-logo.png";
import Image from "next/image";
import FormiLogo from "assets/projects/formi.png";
export default function Timeline() {
  return (
    <section id="timeline" className={Styles.mainDiv}>
      <div className={Styles.mainHeading}>Work Experience</div>
      <div className={Styles.timelineContainer}>
        <div className={Styles.timeLine} />
        <div className={`${Styles.dot} ${Styles.dot1}`} />
        <div className={`${Styles.dot} ${Styles.dot2}`} />
        <div className={`${Styles.dot} ${Styles.dot3}`} />

        <div className={`${Styles.workTile} ${Styles.workTile1}`}>
          <Image
            src={FormiLogo}
            alt="f"
            width={330}
            height={330}
            className={Styles.workImage}
          />
          <div className={Styles.workDetails}>
            <a target="_blank" rel="noreferrer" href="https://bugbase.in">
              Formi
            </a>
            <div className={Styles.designation}>
              CHIEF TECHNOLOGY OFFICER
              <span className={Styles.light}> ( March 22 - Present )</span>
            </div>
            <div className={Styles.description}>
              Product manager at Formi
              <span>, handling the whole tech with the CTO</span> and parallely
              working <span>on the backend,</span> making sure that the tech
              team is on the same page with the business.
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
            <a target="_blank" rel="noreferrer" href="https://spacenos.com">
              Spacenos
            </a>
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
            src={KryptoCardsLogo}
            alt="f"
            width={530}
            height={530}
            className={Styles.workImage}
          />
          <div className={Styles.workDetails}>
            <a target="_blank" rel="noreferrer" href="https://kryptocards.tech">
              Krypto Cards
            </a>
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
      </div>
    </section>
  );
}
