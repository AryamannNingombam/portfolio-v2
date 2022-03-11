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
            <a href="https://kryptocards.tech" target="_blank">
              <span className={Styles.heading}>kryptocards.tech </span>
            </a>

            <span className={Styles.subheading}>KRYPTO CARDS</span>
            <p className={Styles.content}>
              <span>“The Moonnets”,</span> the first project of Krypto Cards, a
              collection of <span>219 cards</span> hand-curated just for the NFT
              enthusiasts. The Moonnets are a collection of 219 Unique NFTs
              where each{" "}
              <span>NFT represents one moon of our Solar System</span>. All the
              metadata would be <span>stored in IPFS</span> to make all the data
              public.
            </p>
          </div>
        </div>
        <div className={Styles.projectrev}>
          <div styles={Styles.image}>
            <Image alt="image" src={BugBaseImage} width={400} height={400} />
          </div>
          <div className={Styles.text}>
            <a href="https://bugbase.in" target="_blank">
              <span className={Styles.heading}>bugbase.in</span>
            </a>

            <span className={Styles.subheading}>BUGBASE</span>
            <p className={Styles.content}>
              <span>The first,</span> consolidated
              <span> bug bounty platform in India</span>, BugBase is a student
              run startup that provides a <span>SaaS platform</span> to
              companies for to host their bug bounties, be it public or private.
              Companies can list down their application for a bug bounty, and a
              stream of hackers would be going through rigorous tests to find a
              bug in the platform, for a certain reward.
            </p>
          </div>
        </div>
        <div className={Styles.project}>
          <Image alt="image" src={MrexImage} width={400} height={400} />
          <div className={Styles.text}>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/12my-lOW0Akq6WjxMxbrurcZk_IOCIA-g/view"
            >
              <span className={Styles.heading}>MRex</span>
            </a>

            <span className={Styles.subheading}>REVAHACK</span>
            <p className={Styles.content}>
              <span>One of the first </span> applications to use the concept of
              <span> decentralization and web3</span> to store medical records
              of a user, in a safe way.
              <span> Our aim </span>
              is to revolutionalize the way medical records are stored and
              shared between users by decentralizing the process. All the data
              would be <span> stored in IPFS </span> encrypted on our backend to
              make sure that only{" "}
              <span>authenticated users can access the data.</span>
            </p>
          </div>
        </div>
        <div className={Styles.projectrev}>
          <div styles={Styles.image}>
            <Image alt="image" src={ExamTantraImage} width={400} height={400} />
          </div>
          <div className={Styles.text}>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Va-TlFD3ab7K3gHOzlVY4Z-IFSk7lZKx/view"
            >
              <span className={Styles.heading}>ExamTantra</span>
            </a>

            <span className={Styles.subheading}>HACKOWASP 3.0</span>
            <p className={Styles.content}>
              ExamTantra’s goal is to <span>“Gamify” the mundane tasks</span> of
              attempting exams by adding elements such as{" "}
              <span>
                peer attempts: solving papers with peers resulting in a more
                productive practice environment
              </span>{" "}
              , leaderboards to compare progress, a clean minimal UI so as to
              not distract the user, badges, awards and other reinforcements
              which have been proven to be{" "}
              <span>psychological motivators.</span>
            </p>
          </div>
        </div>
        <div className={Styles.project}>
          <Image alt="image" src={AntimatterImage} width={300} height={100} />
          <div className={Styles.text}>
            <span className={Styles.heading}>antimatterlabs.in </span>
            <span className={Styles.subheading}>ANTIMATTER LABS</span>
            <p className={Styles.content}>
              <span>An ecommerce platform</span> for users to buy and sell
              products, with a{" "}
              <span>
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
            <a href="https://hackerz-prod.web.app" target="_blank">
              {" "}
              <span className={Styles.heading}>hackerz-prod.web.app</span>
            </a>

            <span className={Styles.subheading}>SPACENOS</span>
            <p className={Styles.content}>
              A platform for users to <span>learn ethical hacking, </span>{" "}
              delving into topics such as{" "}
              <span>web exploitation, XSS attacks, etc.</span>
            </p>
          </div>
        </div>
        <div className={Styles.project}>
          <Image alt="image" src={OutremoteLogo} width={300} height={100} />
          <div className={Styles.text}>
            <a target="_blank" href="https://outremote.web.app">
              <span className={Styles.heading}>outremote.web.app </span>
            </a>
            <span className={Styles.subheading}>SPACENOS</span>
            <p className={Styles.content}>
              Outremote connects interns who are <span className="jae"></span>{" "}
              looking for industry level experience with companies working on
              <span>innovative ideas.</span> Our platform provides growth hacks
              for businesses to <span>achieve their key objectives.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
