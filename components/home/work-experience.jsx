import MainHeading from "components/common/main-heading";
import Styles from "styles/components/home/work-experience.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import KryptoImage from "assets/projects/krypto-cards/krypto-cards-small-logo.png";
import Image from "next/image";

export default function WorkExperience() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.headingDiv}>
        <MainHeading heading={"Work Experience"} />
      </div>
      <div className={Styles.timelineItem}>
        {" "}
        <div>
          <Image alt={"f"} src={KryptoImage} height={300} width={300} />
        </div>
        <div className={Styles.timelineText}>
          <span className={Styles.title}>Krypto Cards</span>
        </div>
      </div>
    </div>
  );
}
