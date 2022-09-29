import React from "react";

const TagFrame = ({ textBold, isPopular, type }) => {
  if (type === "price") {
    return (
      <div className="absolute flex justify-center items-center top-0 right-0 z-30 md:rounded-tr-[15px] md:rounded-bl-[15px] rounded-tr-[5px] rounded-bl-[5px] bg-pink md:w-[140px] md:h-[40px]">
        <span className="text-white font-medium font-['Poppins']">
          {textBold} $
        </span>
        <span className="text-white">per night</span>
      </div>
    );
  }
  return (
    <div className={`${isPopular ? "block" : "hidden"}`}>
      <div className="absolute flex justify-center items-center top-0 right-0 z-30 md:rounded-tr-[15px] md:rounded-bl-[15px] rounded-tr-[5px] rounded-bl-[5px] bg-pink md:w-[140px] md:h-[40px]">
        <span className="text-white font-medium font-['Poppins']">
          {isPopular ? "Popular Choice" : textBold}
        </span>
      </div>
    </div>
  );
};

export default TagFrame;
