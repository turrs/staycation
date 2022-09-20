import React from "react";
import Image from "next/image";
import { IframeReview, Ireview } from "../../../public/images";
import Button from "../../Button";
import StarsReview from "../../StarsReview";
const Review = () => {
  return (
    <div className="flex flex-row  relative flex-wrap">
      <div className="w-5/12">
        <div className="absolute hidden md:block xl:block ">
          <Image src={IframeReview} />
        </div>
        <div className="md:pt-10 pt-[50px] md:pl-10">
          <Image src={Ireview} />
        </div>
      </div>
      <div className="w-7/12 flex flex-col justify-center p-2">
        <div>
          <p className="text-purple font-['Poppins'] font-bold md:text-lg">
            Happy Family
          </p>
        </div>
        <div className="pt-2">
          <StarsReview />
        </div>
        <div>
          <p className="text-purple font-medium md:text-2xl font-['Poppins']">
            What a great trip with my family and I should try again next time
            soon ...
          </p>
          <p className="text-[#B0B0B0] font-['Poppins'] -mt-5">
            Angga, Product Designer
          </p>
        </div>
        <div className="md:pt-6">
          <Button text="Read Their Story" />
        </div>
      </div>
    </div>
  );
};

export default Review;
