import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import AddProperty from "./AddProperty";
import AboutBanner from "../components/AboutBanner";
import Property from "./Property";
import bannerImg from "../assets/banner.png";
import OurServices from "../components/OurServices";
import Properties from "../components/Properties";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <About />
      <AboutBanner />
      <Properties />
      <OurServices />
      <div className="!mx-auto max-w-[1440px] !px-6 !g:px-12 !py-5 overflow-x-hidden">
        <img src={bannerImg} alt="" />
      </div>
    </main>
  );
};

export default Home;
