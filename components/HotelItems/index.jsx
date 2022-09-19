import React from "react";
import { Iimage1 } from "../../public/images";
import CardItems from "../CardItems";
import SectionTitle from "../SectionTitle";

const HotelItems = () => {
  return (
    <div className="w-[300px] h-[250px]">
      <div className="w-[310px] h-[180px]">
        <CardItems image={Iimage1} textBold="90$" text=" per night" />
      </div>
      <div className="-mt-5">
        <p className="text-purple">Anggana</p>
        <p className="text-gray1 -mt-4">Gunung Batu, Indonesia</p>
      </div>
    </div>
  );
};

export default HotelItems;
