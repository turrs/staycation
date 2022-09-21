import React from "react";
import Image from "next/image";
import {
  Iframe,
  Ijumbotron,
  Itcities,
  Itraveler,
  Itreasure,
} from "../../public/images";
import Button from "../Button";
const Jumbotron = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex md:w-1/2 flex-col">
        <div className="md:max-w-[410px]">
          <p className="text-purple text-left text-[24px] md:text-[42px] font-bold font-['Poppins']">
            Forget Busy Work, Start Next Vacation
          </p>
        </div>
        <div className="md:max-w-[320px]">
          <p className="text-gray1 text-left text-[16px] font-['Poppins']">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
        </div>
        <div className="w-[250px]">
          <Button text="Shop Me Now" />
        </div>
        <div className="flex justify-around max-w-[410px] pt-20">
          <div>
            <Image
              alt="image-traveler"
              width={32}
              height={32}
              src={Itraveler}
            />
            <p>
              <span className="font-medium text-purple text-[16px]">18272</span>
              <span className="text-gray1"> travelers</span>
            </p>
          </div>
          <div>
            <Image
              alt="image-traveler"
              width={32}
              height={32}
              src={Itreasure}
            />
            <p>
              <span className="font-medium text-purple text-[16px]">1678</span>
              <span className="text-gray1"> treasure</span>
            </p>
          </div>
          <div>
            <Image alt="image-traveler" width={32} height={32} src={Itcities} />
            <p>
              <span className="font-medium text-purple text-[16px]">1958</span>
              <span className="text-gray1"> cities</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row hidden md:block w-1/2 md:static md:pr-[70px] xl:pr-[120px]">
        <div className="">
          <Image
            alt="image-hero"
            width={520}
            height={410}
            className="rounded-tl-[80px]"
            src={Ijumbotron}
          />
        </div>
        <div className="md:absolute md:-z-10  md:top-[210px] md:right-20 xl:right-[180px]">
          <Image
            alt="frame-hero"
            width={520}
            height={410}
            className="rounded-tl-[80px]"
            src={Iframe}
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
