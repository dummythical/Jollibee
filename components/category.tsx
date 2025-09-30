import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


function Category() {
  return (
    <>
      <h2 className="text-center mt-3 mb-0">Menu</h2>
      <Swiper
        spaceBetween={10}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 7,
          },
        }}
      >
        {/* {categoryList.map((item) => (
          <p>{item.default_name}</p>
        ))} */}
        <SwiperSlide>
          <div>
            <img src="./c1.png"></img>
            <p>Breakfast</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Category;
