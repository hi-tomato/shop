import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css';

const Banner = () => {
  const swiperParams: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 300,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      clickable: true,
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        {...swiperParams}
        className="w-full h-full"
      >
        <SwiperSlide className="bg-red-50 flex items-center justify-center text-2xl">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-blue-50 flex items-center justify-center text-2xl">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-green-50 flex items-center justify-center text-2xl">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-50 flex items-center justify-center text-2xl">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="bg-purple-50 flex items-center justify-center text-2xl">
          Slide 5
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
