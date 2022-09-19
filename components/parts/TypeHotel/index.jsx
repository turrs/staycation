import React from "react";
import HotelItems from "../../HotelItems";
import SectionTitle from "../../SectionTitle";

const TypeHotel = () => {
  return (
    <div className="">
      <SectionTitle title="Houses with beauty backyard" />
      <div className="flex flex-row justify-between flex-wrap">
        <HotelItems />
        <HotelItems />
        <HotelItems />
        <HotelItems />
      </div>
    </div>
  );
};

export default TypeHotel;
