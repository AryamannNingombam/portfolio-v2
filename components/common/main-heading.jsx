import Styles from "styles/components/common/main-heading.module.scss";

export default function MainHeading({ heading }) {
  return <div className={Styles.mainHeading}>{heading}</div>;
}
