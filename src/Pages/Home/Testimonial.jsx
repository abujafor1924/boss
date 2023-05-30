import TitleHading from "../../Components/TitleHading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviw, setReviw] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviw(data));
  }, []);
  return (
    <div className="my-20">
      <TitleHading
        subHading={"What Our Clients Say"}
        hading={"TESTIMONIALS"}
      ></TitleHading>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviw.map((review) => (
            <SwiperSlide key={review._id}>
              <Rating
                className="mx-auto py-8 border-0"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div className="w-8/12 mx-auto text-center">
                <p>{review.details}</p>
                <h2 className="text-2xl text-yellow-600 font-semibold">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
