import React from "react";
import SectionTitle from "../../SectionTitle";
import Image from "next/image";
import { Iimage1, Iimage2 } from "../../../public/images";
import TagFrame from "../../TagFrame";
import CardItems from "../../CardItems";
const MostPicked = () => {
  return (
    <div>
      <SectionTitle title="Most Picked" />
      <div className="flex flex-row justify-between">
        <div className="w-4/12 md:flex justify-between hidden md:block">
          <div className="md:w-[360px] hover:scale-105 hover:opacity-70 rounded-[20px] md:h-[460px] relative">
            <TagFrame textBold="$80" text="per night" />{" "}
            <Image src={Iimage1} alt="most-picked1" />
          </div>
        </div>
        <div className="w-10/12 flex flex-row flex-wrap justify-between md:pl-5 content-between">
          <div className="w-[436px] md:p-0 p-2">
            <CardItems image={Iimage2} textBold="90$" text=" per night" />
          </div>
          <div className="w-[436px] md:p-0 p-2">
            <CardItems image={Iimage2} textBold="90$" text=" per night" />
          </div>
          <div className="w-[436px] md:p-0 p-2">
            <CardItems image={Iimage2} textBold="90$" text=" per night" />
          </div>
          <div className="w-[436px] md:p-0 p-2">
            <CardItems image={Iimage2} textBold="90$" text=" per night" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPicked;
