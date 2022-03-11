import Styles from "styles/components/home/achievements.module.scss";
export default function Achievements() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.mainHeading}>Other Achievements</div>
      <ul className={Styles.list}>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Winner</span> in RevaHack (2021-22).
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Runner up</span> in Hack-O-Wasp 3.0
          (TIET) (2020-21).
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Winner</span> in Command Level
          Badminton Championship (APS Mhow) (2017-18).
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Runner up</span> in Cluster Level
          Badminton Championship (APS Mhow) (2017-18).
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Winner</span> in Intra-School
          Badminton Matches (APS Mamun, APS Mhow) (2015-16,17-18).
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Semi-Finalist</span> in Junior
          Station-Level Badminton Competition (Kolkata) (2016-17).
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Winner</span> in Intra-School Football
          Matches (Pathankot, APS Kolkata)(2015-17).
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Winner</span> in Junior Level Open
          District Football Tournament(Mamun) (2015).
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Head boy</span> of junior wing (APS
          Bathinda) (2013-14).
        </li>
      </ul>
    </div>
  );
}
