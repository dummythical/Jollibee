import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { CategoryItem } from "./BodyContents";

interface CategoryProps {
  categoryList: CategoryItem[];
}

function Category({ categoryList }: CategoryProps) {
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
        {categoryList.length > 0 ? (
          categoryList.map((item) => (
            <SwiperSlide key={item.file_name}>
              <div>
                {item.image_url ? (
                  <img src={item.image_url} alt={item.default_name} />
                ) : null}
                <p>{item.default_name}</p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div>
              <p className="text-center m-0">No categories available</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

export default Category;
