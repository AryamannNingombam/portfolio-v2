import Styles from "styles/components/common/easter-egg.module.scss";
export default function EasterEggLink() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.textDiv}>EGGS</div>
      <div className={Styles.line}></div>
      <div className={Styles.textDiv}>EASTER</div>
    </div>
  );
}
