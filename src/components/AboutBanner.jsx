import React from "react";
import aboutBannerimg from "../assets/aboutBanner.jpeg";

const AboutBanner = () => {
  return (
    <section className="!mx-auto !max-w-[1440px] !px-6 !lg:!px-12 !py-16 !xl:!py-28">
      {/* Desktop & Large Screen Container */}
      <div
        id="container"
        className="hidden md:!flex xl:!flex-row !gap-10 !rounded-xl !bg-[#333]"
      >
        {/* Left content */}
        <div
          id="left"
          className="flex-1 flex flex-col justify-center items-center !p-6"
        >
          <h2 className="text-[36px] sm:text-[42px] md:text-[49px] leading-tight md:leading-[1.3] !mb-6 font-bold text-white text-center md:text-left">
            About <span className="text-[#946b2d]">us</span>
          </h2>

          <p className="text-[#f2f2f2] text-sm sm:text-base !md:text-[17px] leading-relaxed md:leading-[1.75] text-center md:text-left max-w-2xl">
            Welcome to{" "}
            <strong className="text-[#fff]">Bhopal Property King</strong> – your
            trusted real estate partner in the City of Lakes. We specialize in
            connecting people with their dream properties across Bhopal. Whether
            you're looking to buy, sell, or rent a home, apartment, plot, or
            commercial space, we offer a seamless and transparent experience
            tailored to your needs.
            <br />
            <br />
            Our platform features verified listings, smart search filters, and
            interactive property tours, ensuring that you find the perfect match
            effortlessly. Backed by a dedicated team of real estate experts and
            a passion for customer satisfaction, we strive to make property
            dealings simple, secure, and stress-free.
            <br />
            <br />
            With a deep understanding of Bhopal’s real estate market, we are
            committed to providing honest advice, competitive pricing, and
            personalized services for homebuyers, sellers, and investors alike.
            <br />
            <br />
            Join the{" "}
            <strong className="text-[#946b2d]">
              Bhopal Property King
            </strong>{" "}
            community today – because your dream home deserves the royal
            treatment.
          </p>
        </div>

        {/* Right image */}
        <div id="right" className="!flex-1">
          <img
            src={aboutBannerimg}
            alt="About Banner"
            className="!rounded-tr-xl !rounded-br-xl !w-full !h-full !object-cover"
          />
        </div>
      </div>

      {/* Mobile Container (optional, or you can keep your existing mobile layout) */}
      <div className="md:!hidden !flex !flex-col !gap-8">
        <h2 className="!text-3xl !font-bold !text-center">
          About <span className="!text-[#946b2d]">us</span>
        </h2>
        <img
          src={aboutBannerimg}
          alt="About Banner"
          className="!rounded-xl !w-full !object-cover"
        />
        <p className="!text-center !px-2 !text-sm !leading-relaxed !text-gray-700">
          Welcome to Bhopal Property King – your trusted real estate partner in
          the City of Lakes. At Bhopal Property King, we specialize in
          connecting people with their dream properties across Bhopal. Whether
          you're looking to buy, sell, or rent a home, apartment, plot, or
          commercial space, we offer a seamless and transparent experience
          tailored to your needs. Our platform features verified listings, smart
          search filters, and interactive property tours, ensuring that you find
          the perfect match effortlessly. Backed by a dedicated team of real
          estate experts and a passion for customer satisfaction, we strive to
          make property dealings simple, secure, and stress-free. With a deep
          understanding of Bhopal’s real estate market, we are committed to
          providing honest advice, competitive pricing, and personalized
          services for homebuyers, sellers, and investors alike. Join the Bhopal
          Property King community today – because your dream home deserves the
          royal treatment.
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
