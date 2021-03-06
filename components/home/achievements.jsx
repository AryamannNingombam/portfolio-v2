import MainHeading from "components/common/main-heading";
import Styles from "styles/components/home/achievements.module.scss";
export default function Achievements() {
  return (
    <section id="achievements" className={Styles.mainDiv}>
      <MainHeading heading="Other Achievements" />
      <ul className={Styles.list}>
        <li className={Styles.listItem}>
          <span className={Styles.color}>Shortlisted</span> for representing
          college in <span>Smart India Hackathon(2022).</span>
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Winner</span> in RevaHack{" "}
          <span>(2021-22).</span>
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Runner up</span> in Hack-O-Wasp 3.0
          <span> (TIET) (2020-21)</span>
        </li>
        <li className={Styles.listItem}>
          <span className={Styles.color}> Winner</span> in Command Level
          Badminton Championship <span> (APS Mhow) (2017-18).</span>
        </li>
        <li className={Styles.listItem}>
          <span> Runner up</span> in Cluster Level Badminton Championship
          <span> (APS Mhow) (2017-18).</span>
        </li>
        <li className={Styles.listItem}>
          <span> Winner</span> in Intra-School Badminton Matches{" "}
          <span>(APS Mamun, APS Mhow)(2015-16,17-18).</span>
        </li>
        <li className={Styles.listItem}>
          <span> Semi-Finalist</span> in Junior Station-Level Badminton{" "}
          Competition<span>(Kolkata) (2016-17).</span>
        </li>
        <li className={Styles.listItem}>
          <span> Winner</span> in Intra-School Football Matches{" "}
          <span>(Pathankot, APS Kolkata)(2015-17).</span>
        </li>
        <li className={Styles.listItem}>
          <span> Winner</span> in Junior Level Open District Football Tournament{" "}
          <span>(Mamun) (2015).</span>
        </li>
        <li className={Styles.listItem}>
          <span> Head boy</span> of junior wing{" "}
          <span>(APS Bathinda) (2013-14).</span>
        </li>
      </ul>
    </section>
  );
}
