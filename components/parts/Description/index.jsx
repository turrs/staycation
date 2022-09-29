import React from "react";
import Image from "next/image";
import { Iimage1 } from "../../../public/images";
import StartBooking from "../StartBooking";
const Description = ({ data }) => {
  return (
    <div className="pt-5">
      <div className="flex flex-row">
        <div className="md:w-7/12  hover:scale-105 flex justify-center items-center ">
          <Image
            className="rounded-[20px]"
            width={700}
            height={530}
            src={`${process.env.API_BACKEND}${data.imageId[0].imageUrl}`}
          />
        </div>
        <div className="w-5/12 py-2 md:block hidden">
          <div className="py-2 hover:scale-105">
            <Image
              className="rounded-[20px]"
              src={`${process.env.API_BACKEND}${data.imageId[1].imageUrl}`}
              height={280}
              width={600}
            />
          </div>
          <div className="py-2 hover:scale-105">
            <Image
              className="rounded-[20px]"
              src={`${process.env.API_BACKEND}${data.imageId[2].imageUrl}`}
              height={280}
              width={600}
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col pt-5 pb-5 flex-wrap">
        <div className="md:w-7/12 ">
          <div>
            <p className="text-purple font-bold text-md font-['Poppins']">
              About the place
            </p>
          </div>
          <div className="max-w-2xl">
            <span className="text-[#B0B0B0] font-['Poppins'] text-left">
              {data.description}
            </span>
          </div>
        </div>
        <div className="md:w-5/12 p-2 md:p-0 ">
          <StartBooking data={data} />
        </div>
      </div>
    </div>
  );
};

export default Description;
