import React from "react";
import Image from "next/image";
import { IframeReview, Ireview } from "../../../public/images";
import Button from "../../Button";
import StarsReview from "../../StarsReview";
const Review = ({ data }) => {
  return (
    <div className="flex flex-row  relative flex-wrap">
      <div className="w-5/12">
        <div className="absolute hidden xl:block ">
          <Image src={IframeReview} />
        </div>
        <div className="md:pt-10 pt-[50px] md:pl-10">
          <Image
            src={`${process.env.NEXT_PUBLIC_API}${data.imageUrl}`}
            width={360}
            height={480}
          />
        </div>
      </div>
      <div className="w-7/12 flex flex-col justify-center p-2">
        <div>
          <p className="text-purple font-['Poppins'] font-bold md:text-lg">
            {data.name}
          </p>
        </div>
        <div className="pt-2">
          <StarsReview data={data.rate} />
        </div>
        <div>
          <p className="text-purple font-medium md:text-2xl font-['Poppins']">
            {data.content}
          </p>
          <p className="text-[#B0B0B0] font-['Poppins'] -mt-5">
            {data.familyName}, {data.familyOccupation}
          </p>
        </div>
        <div className="md:pt-6 w-[150px]  sm:w-[180px] md:w-[250px]">
          <Button text="Read Their Story" />
        </div>
      </div>
    </div>
  );
};

export default Review;
