import FoodsCard from "./FoodsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-4">
            {items.map((item) => (
              <FoodsCard key={item._id} item={item}></FoodsCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
