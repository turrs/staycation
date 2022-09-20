import React from "react";
import Image from "next/image";
import { Iimage1 } from "../../../public/images";
const Description = () => {
  return (
    <div className="pt-5">
      <div className="flex flex-row bg-pink">
        <div className="w-1/2">
          <div className="bg-black rounded-[20px] h-[400px]">
            <Image objectFit="fill" src={Iimage1} />
          </div>
        </div>
        <div className="w-1/2">
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
};

export default Description;
