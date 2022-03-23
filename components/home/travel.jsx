import Styles from "styles/components/home/travel.module.scss";
import { TRAVEL_PLACES } from "constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function TravelSection() {
  console.log(TRAVEL_PLACES);
  if (!TRAVEL_PLACES) return null;
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.mainHeading}>Travel</div>
      <Swiper
        slidesPerView={"auto"}
        autoplay
        loop={true}
        loopFillGroupWithBlank={true}
        navigation
      >
        {TRAVEL_PLACES.map(({ name, image }, index) => (
          <SwiperSlide align="middle" key={index}>
            <Image
              src={image}
              width={100}
              height={100}
              objectFit="contain"
              alt="feature-1"
            />
            HI
            <div className={Styles.featureTitle}>{name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
