import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
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
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <ProductCard productImg="/product.png" productName="Canudo Tradicional" productDesc="Sache c/ 100 unid PT" productCod="COD 1347" />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard productImg="/product.png" productName="Canudo Tradicional" productDesc="Sache c/ 100 unid PT" productCod="COD 1347" />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard productImg="/product.png" productName="Canudo Tradicional" productDesc="Sache c/ 100 unid PT" productCod="COD 1347" />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard productImg="/product.png" productName="Canudo Tradicional" productDesc="Sache c/ 100 unid PT" productCod="COD 1347" />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard productImg="/product.png" productName="Canudo Tradicional" productDesc="Sache c/ 100 unid PT" productCod="COD 1347" />
      </SwiperSlide>
    </Swiper >
  );
};

export default Products;