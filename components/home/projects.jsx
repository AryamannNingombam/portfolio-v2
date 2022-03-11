import MainHeading from "components/common/main-heading";
import Styles from "styles/components/home/projects.module.scss";
import MoonnetImage from "assets/projects/krypto-cards/moonnet-logo.png";
import BugBaseImage from "assets/projects/bugbase/bugbase-small-logo.png";
import MrexImage from "assets/projects/mrex/mrex-logo.png";
import ExamTantraImage from "assets/projects/examtantra/examtantra-logo.png";
import AntimatterImage from "assets/projects/antimatter-web/antimatter-logo.png";
import MetaHackerImage from "assets/projects/metahacker-admin/metahacker-admin-logo.png";
import OutremoteLogo from "assets/projects/outremote-admin/outremote-logo.png";
import Image from "next/image";
export default function Projects() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.headingDiv}>
        <MainHeading heading={"Projects"} />
      </div>
      <div className={Styles.projectsList}>
        <div className={Styles.project}>
          <Image alt="image" src={MoonnetImage} width={400} height={400} />
          <div className={Styles.text}>
            <span className={Styles.heading}>kryptocards.tech </span>
            <span className={Styles.subheading}>KRYPTO CARDS</span>
            <p className={Styles.content}>
              <span className={Styles.bold}>“The Moonnets”,</span> the first
              project of Krypto Cards, a collection of{" "}
              <span className={Styles.bold}>219 cards</span>
              hand-curated just for the NFT enthusiasts. The Moonnets are a
              collection of 219 Unique NFTs where each{" "}
              <span className={Styles.bold}>
                NFT represents one moon of our Solar System
              </span>{" "}
              All the metadata would be{" "}
              <span className={Styles.bold}>stored in IPFS</span> to make all
              the data public.
            </p>
          </div>
        </div>
        <div className={Styles.projectrev}>
          <div styles={Styles.image}>
            <Image alt="image" src={BugBaseImage} width={400} height={400} />
          </div>
          <div className={Styles.text}>
            <span className={Styles.heading}>bugbase.in</span>
            <span className={Styles.subheading}>BUGBASE</span>
            <p className={Styles.content}>
              <span className={Styles.bold}>The first,</span> consolidated
              <span className={Styles.bold}> bug bounty platform in India</span>
              , BugBase is a student run startup that provides a
              <span className={Styles.bold}>SaaS solution</span> to companies
              for their bug bounties, be it public or private. Companies can
              list down their application for a bug bounty, and a stream of
              hackers would be going through rigorous tests process to find a
              bug in the platform.
            </p>
          </div>
        </div>
        <div className={Styles.project}>
          <Image alt="image" src={MrexImage} width={400} height={400} />
          <div className={Styles.text}>
            <span className={Styles.heading}>MRex </span>
            <span className={Styles.subheading}>REVAHACK</span>
            <p className={Styles.content}>
              <span className={Styles.bold}>One of the first,</span>{" "}
              applications to{" "}
              <span className={Styles.bold}>
                {" "}
                use decentralization and web3
              </span>{" "}
              to store medical records of a user, in a safe way
              <span className={Styles.bold}>Our aim</span>
              is to revolutionalize the way medical records are stored and
              shared between users by decentralizing the process. All the data
              would be <span className={Styles.bold}>stored in IPFS</span>{" "}
              encrypted on our backend to make sure that only authenticated
              users can access the data.
            </p>
          </div>
        </div>
        <div className={Styles.projectrev}>
          <div styles={Styles.image}>
            <Image alt="image" src={ExamTantraImage} width={400} height={400} />
          </div>
          <div className={Styles.text}>
            <span className={Styles.heading}>ExamTantra</span>
            <span className={Styles.subheading}>HACKOWASP 2.0</span>
            <p className={Styles.content}>
              <span className={Styles.bold}>The first,</span> consolidated
              <span className={Styles.bold}> bug bounty platform in India</span>
              , BugBase is a student run startup that provides a
              <span className={Styles.bold}>SaaS solution</span> to companies
              for their bug bounties, be it public or private. Companies can
              list down their application for a bug bounty, and a stream of
              hackers would be going through rigorous tests process to find a
              bug in the platform.
            </p>
          </div>
        </div>
        <div className={Styles.project}>
          <Image alt="image" src={AntimatterImage} width={300} height={100} />
          <div className={Styles.text}>
            <span className={Styles.heading}>antimatterlabs.in </span>
            <span className={Styles.subheading}>ANTIMATTER LABS</span>
            <p className={Styles.content}>
              <span className={Styles.bold}>An ecommerce platform</span> for
              users to buy and sell products, with a{" "}
              <span className={Styles.bold}>
                {" "}
                direct price or place a bid smaller than the actual values.
              </span>{" "}
              Users need to have KYC verified to sell products, and that is done
              by the admin.
            </p>
          </div>
        </div>
        <div className={Styles.projectrev}>
          <div styles={Styles.image}>
            <Image alt="image" src={MetaHackerImage} width={400} height={400} />
          </div>
          <div className={Styles.text}>
            <span className={Styles.heading}>hackerz-prod.web.app</span>
            <span className={Styles.subheading}>SPACENOS</span>
            <p className={Styles.content}>
              A platform for users to{" "}
              <span className={Styles.bold}>learn ethical hacking, </span>{" "}
              delving into topics such as web exploitation, XSS attacks, etc.
            </p>
          </div>
        </div>
        <div className={Styles.project}>
          <Image alt="image" src={OutremoteLogo} width={300} height={100} />
          <div className={Styles.text}>
            <span className={Styles.heading}>outremote.web.app </span>
            <span className={Styles.subheading}>SPACENOS</span>
            <p className={Styles.content}>
              Outremote connects interns who are <span className="jae"></span>{" "}
              looking for industry level experience with companies working on
              innovative ideas. Our platform provides growth hacks for
              businesses to achieve their key objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
