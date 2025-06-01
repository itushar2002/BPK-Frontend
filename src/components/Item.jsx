import React from "react";
import { FaHeart } from "react-icons/fa6";
import HeartBtn from "./HeartBtn";
import {
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineGarage,
} from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const Item = ({ property }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/listing/${property.id}`)}
      className="rounded-2xl bg-white !p-[14px] !sm:p-[20px] !pb-[24px] w-full"
    >
      {/* image */}
      <div className="relative mb-2">
        <img
          src={
            property.images && property.images.length > 0
              ? property.images[0]
              : "/default-placeholder.png"
          }
          alt={property.title}
          className="rounded-xl w-full object-cover aspect-video"
        />
        <div className="absolute top-4 right-6">
          <HeartBtn />
        </div>
      </div>

      <h5 className="text-[16px] font-[700] text-[#946b2d] !mb-1">
        {property.city}
      </h5>
      <h4 className="text-[18px] font-[500] line-clamp-1">{property.title}</h4>

      {/* info */}
      <div className="flex flex-wrap gap-2 !py-2">
        <div className="flex items-center gap-x-1 text-sm font-medium">
          <MdOutlineBed /> {property.facilities.bedrooms}
        </div>
        <div className="flex items-center gap-x-1 text-sm font-medium">
          <MdOutlineBathtub /> {property.facilities.bathrooms}
        </div>
        <div className="flex items-center gap-x-1 text-sm font-medium">
          <MdOutlineGarage /> {property.facilities.parkings}
        </div>
        <div className="flex items-center gap-x-1 text-sm font-medium">
          <CgRuler /> {property.area}
        </div>
      </div>

      <p className="line-clamp-2 text-sm !mb-3">{property.description}</p>

      {/* Price & Button */}
      <div className="flex justify-between items-center mt-auto">
        <div className="text-[18px] font-[700]">₹ 1 cr </div>
        <Link to={"/"}>
          <button className="text-[14px] font-[500] bg-[#946b2d] text-white !px-[14px] !py-[6px] rounded-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
