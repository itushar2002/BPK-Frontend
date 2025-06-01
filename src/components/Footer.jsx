import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constant/data";

const Footer = () => {
  return (
    <footer className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 !mb-4">
      <div className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 bg-[#222] text-white rounded-tr-3xl !pt-12 !xl:pt-20 !pb-8 ">
        <h3 className="text-[24px] leading-tight md:text-[28px] md:leading-[1.3] !mb-4 font-bold">
          Connecting You to the Best Properties
        </h3>
        <p>
          We help you find homes that match your lifestyle, budget, and dreams.
        </p>
        <hr className="!my-8 h-[2px]" />
        {/* container */}
        <div className="flex justify-between flex-wrap gap-x-2 gap-y-8">
          <div className="max-w-sm">
            <Link to={"/"}>
              <span className="font-[900] text-[24px]">
                Bhopal
                <span className="font-[600] text-[20px]">PropertyKing</span>
              </span>
            </Link>
            <p className="!py-4 ">
              From browsing to buying, we’re with you at every step of your real
              estate journey.Your trusted platform for buying, selling, and
              renting properties with ease.
            </p>
            <div className="flex items-center justify-between !pl-5 h-[3.3rem] bg-white text-black w-full max-w-[366px] rounded-full ring-1 ring-slate-900/5">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none"
              />
              <button className="text-[14px] font-[500] bg-[#946b2d] ring-1 ring-secondary text-white !px-6 !py-2 rounded-full relative right-[0.33rem]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-8">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className="flex flex-col gap-4 text-[14px] font-[300]">
                  {col.links.map((link) => (
                    <Link to={"/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link className="flex gap-4 md:flex-col lg:flex-row">
                    <p>{link.label}</p>:<p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
          </div>
          <div>
            <FooterColumn title={SOCIALS.title}>
              <ul className="flex gap-4">
                {SOCIALS.links.map((link) => (
                  <Link
                    to={
                      "https://www.instagram.com/bhopalpropertyking?igsh=dTB4dTJvMzFja3B3"
                    }
                    key={link.id}
                    className="text-xl"
                  >
                    {link.icon}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>
      {/* copyright */}

      <p className="text-white bg-[#333] !py-2 !px-8 text-[15px] font-[500]">
        <span>2025 BhopalPropertyKing</span> All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 ">
      <h4 className="font-[700] text-[18px] whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
