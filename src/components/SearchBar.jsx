import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center rounded-xl justify-between !pl-5 h-[3.3rem] bg-[#fefefe] w-full max-w-[366px] border border-[#fefefe] focus-within:ring-2 ring-[#946b2d] transition-all">
      <input 
        value={filter}
        onChange={(e)=> setFilter(e.target.value)}
        type="text"
        placeholder="Enter residency Title or City"
        className="bg-transparent border-none outline-none w-full text-black placeholder-gray-600"
      />
      <FaLocationDot className="relative right-4 text-gray-800 hover:text-[#946b2d] cursor-pointer transition-colors duration-300" />
    </div>
  );
};

export default SearchBar;
