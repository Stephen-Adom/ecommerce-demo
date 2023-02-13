/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BiRadioCircle } from 'react-icons/bi';
import CarouselUnit from '../../components/carousel-unit';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';

const Carousel = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();

  const popularList = [
    {
      label: 'Air Jordan 1 Low',
      description: "Men's Shoes",
      image: 'Rectangle-2.jpg',
      price: '$110.00',
    },
    {
      label: 'Nike Air Max 90 Futura',
      description: "Women's Shoes",
      image: 'Rectangle-2-1.jpg',
      price: '$110.00',
    },
    {
      label: 'Nike Air Max 90',
      description: "Men's Shoes",
      image: 'Rectangle-2-2.jpg',
      price: '$110.00',
    },
    {
      label: 'Nike Air Max 90',
      description: "Men's Shoes",
      image: 'Rectangle-3.jpg',
      price: '$110.00',
    },
  ];

  const slidePerView = () => {
    if (window.innerWidth < 575) {
      return 1;
    } else if (window.innerWidth > 575 && window.innerWidth < 992) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <section id="carousel" className="px-3 carousel w-full md:w-[80%] mx-auto">
      <div className="flex items-center justify-between py-4 carousel-header">
        <h2 className="text-xl font-bold">Popular Right Now</h2>

        <div className="flex items-center gap-1">
          <button
            type="button"
            title="left"
            onClick={() => swiper?.slidePrev()}
          >
            <FiChevronLeft />
          </button>
          <BiRadioCircle className="text-xs text-gray-400" />
          <button
            type="button"
            title="left"
            onClick={() => swiper?.slideNext()}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="">
        <Swiper
          spaceBetween={50}
          slidesPerView={slidePerView()}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {popularList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselUnit item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
