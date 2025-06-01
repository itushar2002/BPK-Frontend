import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="!mx-auto !max-w-[1440px] !px-6 !lg:px-12 !pt-[99px]">
      <div
        id="hero"
        className="!mx-auto !max-w-[1440px] !px-6 !lg:px-12 rounded-3xl"
      >
        <div className="relative !top-32 xs:!top-52 text-white">
          <span className="font-[400] text-[18px]">
            Welcome to BhopalPropertyKing
          </span>
          <h1 className="!text-[32px] sm:!text-[40px] md:!text-[49px] lg:!text-[65px] !leading-tight md:!leading-[1.3] mb-4 font-bold capitalize max-w-full sm:max-w-[40rem] text-shadow-sm">
            Find Your Dream Home with Ease
          </h1>
          <p className="!my-6 sm:!my-10 text-with-shadow !p-3 max-w-full sm:max-w-[35rem]">
            Discover stunning properties tailored to your lifestyle. Whether
            you're buying, renting, or investing, we bring you closer to your
            perfect space with trusted listings, smart filters, and expert
            guidance — all in one place.
          </p>

          {/* Buttons */}
          <div
            id="btns"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 !p-2 rounded-xl bg-white text-black"
          >
            <div className="text-[14px] font-[400] text-center leading-tight">
              <h5 className="uppercase font-bold">See What's Available</h5>
              <p className="text-[14px] font-[400]">In all Segments</p>
            </div>
            <Link
              to={"/listing"}
              className="bg-[#946b2d] flex items-center justify-center rounded-xl text-white !px-6 !py-5 w-full sm:w-auto"
            >
              Explore listing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
