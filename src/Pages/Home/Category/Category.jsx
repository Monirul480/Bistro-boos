import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import slid1 from '../../../assets/home/slide1.jpg'
import slid2 from '../../../assets/home/slide2.jpg'
import slid3 from '../../../assets/home/slide3.jpg'
import slid4 from '../../../assets/home/slide4.jpg'
import slid5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00an to 10.00pm"}
            heading={"Order Online"}
            ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={slid1} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-16">Salads</h3>
            </SwiperSlide>
          <SwiperSlide>
             <img src={slid2} alt="" />
             <h3 className="text-4xl uppercase text-center text-white -mt-16">Pizza</h3>
        </SwiperSlide>
          <SwiperSlide>
            <img src={slid3} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-16">Soups</h3>
            </SwiperSlide>
          <SwiperSlide>
            <img src={slid4} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-16">Desserts</h3>
            </SwiperSlide>
          <SwiperSlide>
            <img src={slid5} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-16">Salads</h3>
            </SwiperSlide>
          
        </Swiper>
      </section>
    );
};

export default Category;