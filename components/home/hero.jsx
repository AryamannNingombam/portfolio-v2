import Button from "antd";
import "styles/components/home/hero.module.scss";

export default function HeroSection(props) {
  return (
    <div className="landing">
      <div className="inner">
        {props.landingItems[0].fields.headline ? (
          <h1 id="title">{props.landingItems[0].fields.headline}</h1>
        ) : (
          <></>
        )}
        {props.landingItems[0].fields.description ? (
          <p>{props.landingItems[0].fields.description}</p>
        ) : (
          <></>
        )}
        <Button
          clickAction={handleClick}
          href="#"
          title="View Work"
          class="view-work-btn"
          duration="0"
          delay="0"
          aos="none"
        />
      </div>
    </div>
  );
}
