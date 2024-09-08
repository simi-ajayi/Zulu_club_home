import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Card6 from "../../components/cards/Card6";

const NearMeSlider = ({ data = [] }) => {
    if (!Array.isArray(data)) {
        return <p>Error</p>
    }
    
  return (
    <div className="mt-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.seller_id}>
            <Card6 data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NearMeSlider;
