import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CourseCard } from "./CourseCard";

export const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1} // show 1 slides
          spaceBetween={30}
          // centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 3, // for large screens show 3 slides
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-xl text-richblack-5 flex items-center mt-2">
          <p>No Course Found</p>
        </div>
      )}
    </>
  );
};
