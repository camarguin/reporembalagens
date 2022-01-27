import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import SeeMoreCard from './SeeMoreCard';

const Products = ({ myProducts, categoryHref }) => {

  const swiperItems = myProducts.map(product => {
    return (
      <SwiperSlide key={product._id}>
        <ProductCard product={product} />
      </SwiperSlide>
    )
  })

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={3}
      spaceBetween={10}
      navigation
      pagination={{
        "clickable": true
      }}
      breakpoints={{
        "320": {
          "slidesPerView": 1,
          "spaceBetween": 20
        },
        "620": {
          "slidesPerView": 2,
          "spaceBetween": 40
        },
        "1024": {
          "slidesPerView": 3,
          "spaceBetween": 50
        }
      }}
    >
      {swiperItems}
      <SwiperSlide>
        <SeeMoreCard categoryHref={categoryHref} />
      </SwiperSlide>
    </Swiper >
  );
};

export default Products;