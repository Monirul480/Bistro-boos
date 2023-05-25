import { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {review.map((rev) => (
          <SwiperSlide key={rev._id}>
            <div className="m-20 text-center">
              <Rating
                className="flex mx-auto"
                style={{ maxWidth: 180 }}
                value={rev.rating}
                readOnly
              />
                <img className="h-[84px] w-1/12 mt-6 mx-auto" src="quote.png" alt="" />
              <p className="py-8">{rev.details}</p>
              <h3 className="text-2xl text-orange-400">{rev.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
