import React from "react";
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useProperties from "../hooks/useProperties";
import Item from "../components/Item";
import { PuffLoader } from "react-spinners";

const Properties = () => {
  const { isLoading, isError, data } = useProperties();

  if (isError) return <div>Error fetching properties</div>;

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <PuffLoader
          height={80}
          width={80}
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <section className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 !py-8">
      <div className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 !py-12 bg-[#dcdcdc] rounded-3xl !xl:py-20">
        <span className="text-[18px] font-[500]">
          Your Future Home Awaits!
        </span>
        <h2 className="text-[41px] leading-tight md:text-[49px] md:leading-[1.3] !mb-4 font-bold">
          Find Your Dream Home Here
        </h2>
        <div className="flex items-center justify-between !mt-8 !mb-6">
          <h5 className="text-sm md:text-base">
            <span>Showing 1 - 9</span> out of 1k Properties
          </h5>
          <Link
            to={"/"}
            className="text-2xl !md:text-3xl hover:text-[#946b2d] transition-colors duration-300"
          >
            <VscSettings />
          </Link>
        </div>

        {/* Swiper container */}
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
              height: 400,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="!mt-5 !mb-5 h-[400px] sm:h-[460px] md:h-[533px] xl:h-[422px]"
        >
          {data.slice(0, 9).map((property) => (
            <SwiperSlide
              key={property.title}
              className="!w-[300px] flex-shrink-0"
            >
              <Item property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Properties;