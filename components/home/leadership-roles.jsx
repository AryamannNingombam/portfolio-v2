import Styles from "styles/components/home/leadership-roles.module.scss";

export default function LeadershipRoles() {
  return (
    <section id="leaderships" className={Styles.mainDiv}>
      <div className={Styles.mainHeading}>Leadership Roles</div>
      <div className={Styles.topics}>
        <div className={Styles.topic}></div>
        <div className={Styles.topic}></div>
      </div>
    </section>
  );
}
