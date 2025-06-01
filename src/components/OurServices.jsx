import React from "react";
import { IoCallSharp } from "react-icons/io5";

const services = [
  {
    title: "Legal Advisory",
    desc: "Get expert legal advice on your property deals.",
    phone: "7610107878",
  },
  {
    title: "Home Loan Assistance",
    desc: "Easily avail best loan deals from top banks.",
    phone: "7610107878",
  },
  {
    title: "Other Property Services",
    desc: "All other assistance during property buying/selling.",
    phone: "7610107878",
  },
  {
    title: "All Property Types",
    desc: "We deal in rental, commercial, selling & agricultural properties.",
    phone: "7610107878",
  },
  {
    title: "Disputed Property ",
    desc: "We assist with disputed, encroached properties.",
    phone: "7610107878",
  },
];

const maskPhone = (phone) => {
  return phone.slice(0, 3) + "****" + phone.slice(-3);
};

const OurServices = () => {
  return (
    <section className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 !pt-[50px]">
      <div className="!mx-auto max-w-[1440px] !px-6 !lg:px-12 !py-16 bg-[#dcdcdc] xl:py-28 rounded-3xl overflow-hidden">
        <h2 className="text-[41px] leading-tight md:text-[49px] md:leading-[1.3] !mb-4 font-bold text-black">
          <span className="text-[#946b2d]">Our</span> Services
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 !p-5 !mt-8 !mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-[300px] md:w-[350px] flex flex-col justify-between"
            >
              <div className="flex flex-col items-center !p-10 justify-center text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#946b2d]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
              </div>
              <a
                href={`tel:${service.phone}`}
                className="flex items-center justify-center gap-2 bg-[#946b2d] hover:bg-[#7d5824] text-white !py-3 rounded-b-2xl transition-all group font-semibold"
              >
                <IoCallSharp className="text-xl" />
                <span>Call Now</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
