import TitleHading from "../../Components/TitleHading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

const ChefRecomendet = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  return (
    <div className="my-20">
      <TitleHading
        subHading={"Should Try"}
        hading={"CHEF RECOMMENDS"}
      ></TitleHading>
      <div>
        <Swiper
          slidesPerView={3}
          navigation={true}
          spaceBetween={30}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {chef.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={item.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.category}</p>
                  <p>{item.recipe}</p>
                  <p>Price : ${item.price}</p>
                  <div className="card-actions">
                    <button className="btn hover:btn-[#1F2937] bg-[#FFFFFF] border-0 border-b-4 text-yellow-600 uppercase border-yellow-600">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ChefRecomendet;
