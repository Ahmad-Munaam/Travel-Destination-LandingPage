import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "../../../styles/Book-btn.css";

const DealCard = ({ image, cName, cRating, cLocation, cCutPrice, cPrice }) => {
  return (
    <div className="deal-card group hover:shadow-xl hover:shadow-orange-200 m-2 shadow-md h-[340px] w-[45%] xsm:w-[60%] sm:w-[45%] md:w-[32%] lg:w-[25%] xl:w-[25%] 4xl:w-[18%] flex-shrink-0 rounded-2xl bg-white flex flex-col relative overflow-hidden">

      <button className="book-btn absolute bg-[#FA7436] hover:bg-orange-600 p-2 rounded-md text-[#FFFFFF] font-[primary-poppins] font-medium px-[16px]">
        Book now
      </button>
      <img src={image} alt="Deal" className="deal-img h-[65%] sm:h-[70%] w-full object-cover rounded-lg"
      />
      <div className="p-4 flex flex-col ">
        <div className="flex items-center justify-between">
          <h2 className="text-[14px] sm:text-[16px] font-[primary-poppins] font-medium text-[#222222]">{cName}</h2>
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar className="text-[16px]" />
            <span className="font-bold text-[12px] sm:text-sm text-[#666666] font-[primary-poppins]">{cRating}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-3 w-full">
          <div className="flex items-center text-gray-600 justify-center sm:justify-start sm:w-auto mb-2 sm:mb-0">
            <FaLocationDot className="text-[16px] text-[#666666]" />
            <span className=" text-[12px] sm:text-sm font-[primary-poppins] text-[#666666] ml-1">{cLocation}</span>
          </div>
          <div className="flex justify-center items-center gap-x-2 sm:w-auto">
            <span className="font-[primary-poppins] text-[#666666] line-through text-[14px]">{cCutPrice}</span>
            <span className="text-[12px] sm:text-[14px] font-semibold rounded-lg px-2 bg-[#FFE7DB] p-1 text-[#FA7436]">{cPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
