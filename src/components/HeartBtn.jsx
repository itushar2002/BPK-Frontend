import React from "react";
import { FaHeart } from "react-icons/fa6";

const HeartBtn = () => {
  return (
    <div>
      <FaHeart
        color="white"
        size={23}
        className="cursor-pointer drop-shadow-sm"
      />
    </div>
  );
};

export default HeartBtn;
