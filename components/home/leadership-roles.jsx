import Image from "next/image";
import Styles from "styles/components/home/leadership-roles.module.scss";
import WorkAtTechImage from "assets/clubs/work-at-tech/main-logo.png";
import MOSSImage from "assets/clubs/moss/main-logo.png";
import MainHeading from "components/common/main-heading";
export default function LeadershipRoles() {
  return (
    <section id="leaderships" className={Styles.mainDiv}>
      <MainHeading heading="Leadership Roles" />
      <div className={Styles.topics}>
        <div className={Styles.topic}>
          <div className={Styles.image}>
            <Image height={300} width={300} src={WorkAtTechImage} />
          </div>
          <div className={Styles.topicHeading}>Work@Tech Manipal Chapter</div>
          <div className={Styles.subheading}>Founder & Chapter Lead</div>
        </div>
        <div className={Styles.topic}>
          <div className={Styles.image}>
            <Image height={300} width={300} src={MOSSImage} />
          </div>
          <div className={Styles.topicHeading}>Manipal Open Source Society</div>
          <div className={Styles.subheading}>Co-Founder & Executive Lead</div>
        </div>
      </div>
    </section>
  );
}
