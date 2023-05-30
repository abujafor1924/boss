import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";

import slid1 from "../../../src/assets/home/slide1.jpg";
import slid2 from "../../../src/assets/home/slide2.jpg";
import slid3 from "../../../src/assets/home/slide3.jpg";
import slid4 from "../../../src/assets/home/slide4.jpg";
import slid5 from "../../../src/assets/home/slide5.jpg";
import TitleHading from "../../Components/TitleHading";
const FoodCategory = () => {
  return (
    <section>
      <TitleHading
        subHading={"From 11:00am to 10:00pm"}
        hading={"ORDER ONLINE"}
      ></TitleHading>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slid1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FoodCategory;
