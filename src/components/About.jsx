/*
import React, { useEffect, useState } from "react";
import aboutImage from "../assets/about.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import CountUp from "react-countup"; 

const About = () => {
  const statistics = [
    { label: "Premium Properties", value: 80 },
    { label: "Happy Clients", value: 1000 },
    { label: "Years of Experience", value: 10 },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const visible = top < window.innerHeight - 100;
        setIsVisible(visible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on mount in case already visible
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 !py-16 xl:!py-28"
    >
      
      <div
        id="container"
        className="flex flex-col xl:flex-row  xl:bg-[#dcdcdc] rounded-3xl gap-10"
      >
        <div id="left" className="flex-1 relative">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-3xl rounded-tr-[155px] w-full max-w-[488px] mx-auto"
          />
          <div className="bg-white absolute bottom-16 left-4 sm:left-16 max-w-xs !p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="relative bottom-8 !p-3 shadow-md bg-white h-12 w-12 rounded-full flex items-center justify-center">
              <RiDoubleQuotesL className="text-2xl" />
            </span>
            <p className="text-[#727272] text-center relative bottom-3 !px-2 !sm:px-0">
              Discover your dream home with stunning views and modern amenities.
              Experience comfort, luxury, and convenience all in one place
            </p>
          </div>
        </div>
       
        <div id="right" className="flex-1 flex flex-col justify-center">
          <span className="text-[18px] font-[600]">Unveiling Our Journey</span>
          <h2 className="text-[32px] sm:text-[41px] md:text-[49px] leading-tight md:leading-[1.3] mb-4 font-bold">
            Our commitment crafting extraordinary real estate experiences
          </h2>
          <p className="!py-5 max-w-lg">
            With a steadfast commitment to excellence, we have established
            ourselves as a leader in the real estate industry, delivering
            innovative solutions that consistently surpass client expectations.
          </p>
          
          <div className="flex flex-wrap gap-4 !mt-6">
            {statistics.map((statistic, index) => (
              <div
                key={index}
                className="bg-[#fefefe] !p-4 rounded-lg flex flex-col items-center w-40"
              >
                <h3 className="text-2xl font-semibold">
                  <CountUp
                    start={isVisible ? 0 : undefined}
                    end={statistic.value}
                    duration={3}
                    delay={0}
                  />
                </h3>
                <p className="text-gray-500 !mt-1 text-center">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
 */
import React, { useEffect, useState } from "react";
import aboutImage from "../assets/about.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import CountUp from "react-countup";

const About = () => {
  const statistics = [
    { label: "Premium Properties", value: 80 },
    { label: "Happy Clients", value: 1000 },
    { label: "Years of Experience", value: 10 },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const visible = top < window.innerHeight - 100;
        setIsVisible(visible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 !py-16 xl:!py-28"
    >
      {/* container */}
      <div
        id="container"
        className="flex flex-col xl:flex-row  xl:bg-[#dcdcdc] rounded-3xl gap-10"
      >
        {/* Left side - image + quote */}
        <div id="left" className="flex-1 relative">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-3xl rounded-tr-[155px] w-full max-w-[488px] mx-auto"
          />
          <div className="bg-white absolute bottom-16 left-4 sm:left-16 max-w-xs !p-4 rounded-lg flex flex-col items-center justify-center">
            <span className="relative bottom-10 !p-3 shadow-md bg-white h-12 w-12 rounded-full flex items-center justify-center">
              <RiDoubleQuotesL className="text-2xl" />
            </span>
            <p className="text-[#727272] text-center relative bottom-3 !px-2 sm:!px-0 text-xs sm:text-sm md:text-base">
              Discover your dream home with stunning views and modern amenities.
              amenities. comfort, luxury, and convenience all in one place.
            </p>
          </div>
        </div>

        {/* Right side - text + stats */}
        <div
          id="right"
          className="flex-1 flex flex-col justify-center text-center xl:text-left px-2 sm:px-0"
        >
          <span className="text-[16px] sm:text-[18px] font-[600] mb-1">
            Unveiling Our Journey
          </span>
          <h2 className="text-[26px] sm:text-[32px] md:text-[41px] leading-tight md:leading-[1.3] mb-4 font-bold">
            Our commitment crafting extraordinary real estate experiences
          </h2>
          <p className="!py-4 sm:!py-5 max-w-lg mx-auto xl:mx-0 text-xs sm:text-sm md:text-base">
            With a steadfast commitment to excellence, we have established
            ourselves as a leader in the real estate industry, delivering
            innovative solutions that consistently surpass client expectations.
          </p>

          {/* Stats container */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-6">
            {statistics.map((statistic, index) => (
              <div
                key={index}
                className="bg-[#fefefe] !p-4 rounded-lg flex flex-col items-center w-28 sm:w-36 md:w-40"
              >
                <h3 className="text-xl sm:text-2xl font-semibold">
                  <CountUp
                    start={isVisible ? 0 : undefined}
                    end={statistic.value}
                    duration={3}
                    delay={0}
                  />
                </h3>
                <p className="text-gray-500 mt-1 text-center text-[10px] sm:text-xs md:text-sm">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
