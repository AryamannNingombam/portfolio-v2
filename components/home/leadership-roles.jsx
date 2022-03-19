import Image from "next/image";
import Styles from "styles/components/home/leadership-roles.module.scss";
import WorkAtTechImage from "assets/clubs/work-at-tech/main-logo.png";
import MOSSImage from "assets/clubs/moss/main-logo.png";
export default function LeadershipRoles() {
  return (
    <section id="leaderships" className={Styles.mainDiv}>
      <div className={Styles.mainHeading}>Leadership Roles</div>
      <div className={Styles.topics}>
        <div className={Styles.topic}>
          <Image objectFit="cover" src={WorkAtTechImage} />
          <div className={Styles.topicHeading}>Work@Tech Manipal Chapter</div>
          <div className={Styles.subheading}>Founder & Chapter Lead</div>
        </div>
        <div className={Styles.topic}>
          <Image src={MOSSImage} />
          <div className={Styles.topicHeading}>Manipal Open Source Society</div>
          <div className={Styles.subheading}>Co-Founder & Executive Lead</div>
        </div>
      </div>
    </section>
  );
}
