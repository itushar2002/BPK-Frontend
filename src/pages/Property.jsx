import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getProperty } from "../utils/api";
import { PuffLoader } from "react-spinners";
import HeartBtn from "../components/HeartBtn";
import {
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineGarage,
} from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import Map from "../components/Map";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useAuthCheck from "../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../components/BookingModal";
import { Button, rem } from "@mantine/core";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["resd"],
    queryFn: () => getProperty(id),
  });
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <PuffLoader height="80" width="80" radius={1} color="#555" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-64 flex items-center justify-center">
        Error fetching data
      </div>
    );
  }

  // ✅ Filter valid images
  const filteredImages = Array.isArray(data?.images)
    ? data.images.filter((img) => typeof img === "string" && img.trim() !== "")
    : [];

  // ✅ Check for valid video
  const hasValidVideo =
    typeof data?.video === "string" && data.video.trim() !== "";

  return (
    <section className="!mx-auto !max-w-[1440px] !pb-[100px] !pt-[100px] !px-4 sm:!px-6 lg:!px-12">
      {/* Image or Carousel */}
      <div className="relative">
        {filteredImages.length > 0 || hasValidVideo ? (
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            className="rounded-xl"
          >
            {filteredImages.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`${data?.title} - ${idx + 1}`}
                  className="rounded-xl max-h-[27rem] w-full object-cover"
                />
              </div>
            ))}

            {hasValidVideo && (
              <div key="video-slide">
                <video
                  src={data.video}
                  controls
                  className="rounded-xl max-h-[27rem] w-full object-cover"
                  style={{ background: "#000" }}
                />
              </div>
            )}
          </Carousel>
        ) : (
          <img
            src={filteredImages[0] || data?.image}
            alt={data?.title}
            className="rounded-xl max-h-[27rem] self-center w-full object-cover"
          />
        )}

        {/* Like Button */}
        <div className="absolute top-4 right-6 z-10">
          <HeartBtn />
        </div>
      </div>

      {/* container */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 !mt-8">
        {/* left side */}
        <div className="flex-1 w-full lg:w-1/2">
          <h5 className="text-[16px] font-[700] !my-1 text-[#946b2d]">
            {data?.city}
          </h5>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h4 className="text-[18px] font-[500] line-clamp-1 max-w-full sm:max-w-[60%] truncate">
              {data?.title}
            </h4>
            <div className="text-[20px] font-[700] whitespace-nowrap !mt-2 sm:!mt-0">
              ₹ {data?.price}
            </div>
          </div>

          {/* info */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 !py-4 bg-gray-50 rounded-lg !my-4 w-fit">
            <div className="flex flex-col items-center !px-3 min-w-[80px]">
              <MdOutlineBed title="Bedrooms" className="text-xl" />
              <span className="text-sm font-medium">
                {data?.facilities?.bedrooms ?? 0}
              </span>
              <span className="text-xs text-gray-500">Bedrooms</span>
            </div>
            <div className="flex flex-col items-center !px-3 min-w-[80px]">
              <MdOutlineBathtub title="Bathrooms" className="text-xl" />
              <span className="text-sm font-medium">
                {data?.facilities?.bathrooms ?? 0}
              </span>
              <span className="text-xs text-gray-500">Bathrooms</span>
            </div>
            <div className="flex flex-col items-center !px-3 min-w-[80px]">
              <MdOutlineGarage title="Parkings" className="text-xl" />
              <span className="text-sm font-medium">
                {data?.facilities?.parkings ?? 0}
              </span>
              <span className="text-xs text-gray-500">Parkings</span>
            </div>
            <div className="flex flex-col items-center !px-3 min-w-[80px]">
              <CgRuler title="Area" className="text-xl" />
              <span className="text-sm font-medium">
                {data?.facilities?.area ?? "-"}
              </span>
              <span className="text-xs text-gray-500">Area</span>
            </div>
          </div>

          <p className="pt-2 mb-4 text-start text-gray-700 max-w-2xl break-words">
            {data?.description}
          </p>

          {data?.propertyType && (
            <div className="inline-block !mb-3 !px-3 !mr-2 !py-2 bg-yellow-300 text-yellow-900 font-semibold">
              {data.propertyType.charAt(0).toUpperCase() +
                data.propertyType.slice(1)}
            </div>
          )}

          <div className="flex items-center justify-start gap-x-2 !my-5">
            <FaLocationDot />
            <div>
              {data?.address} {data?.city} {data?.state} {data?.country}
            </div>
          </div>

          {data?.brokerContact && (
            <a
              href={`tel:${data.brokerContact}`}
              className="inline-block !mt-4 !px-6 !py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
              aria-label="Call Broker"
            >
              Call Now
            </a>
          )}
        </div>

        {/* right side */}
        <div className="flex-1 min-w-[320px] max-w-[420px] w-full flex justify-end mt-8 lg:mt-0">
          <Map
            address={data?.address}
            city={data?.city}
            state={data?.state}
            country={data?.country}
          />
        </div>
      </div>
    </section>
  );
};

export default Property;
