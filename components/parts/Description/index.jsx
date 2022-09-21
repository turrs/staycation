import React from "react";
import Image from "next/image";
import { Iimage1 } from "../../../public/images";
import StartBooking from "../StartBooking";
const Description = () => {
  return (
    <div className="pt-5">
      <div className="flex flex-row">
        <div className="md:w-7/12  hover:scale-105 flex justify-center items-center ">
          <Image
            className="rounded-[20px]"
            width={700}
            height={530}
            src={Iimage1}
          />
        </div>
        <div className="w-5/12 py-2 md:block hidden">
          <div className="py-2 hover:scale-105">
            <Image
              className="rounded-[20px]"
              src={Iimage1}
              height={280}
              width={600}
            />
          </div>
          <div className="py-2 hover:scale-105">
            <Image
              className="rounded-[20px]"
              src={Iimage1}
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
              Minimal techno is a minimalist subgenre of techno music. It is
              characterized by a stripped-down aesthetic that exploits the use
              of repetition and understated development. Minimal techno is
              thought to have been originally developed in the early 1990s by
              Detroit-based producers Robert Hood and Daniel Bell. Such trends
              saw the demise of the soul-infused techno that typified the
              original Detroit sound. Robert Hood has noted that he and Daniel
              Bell both realized something was missing from techno in the
              post-rave era. Design is a plan or specification for the
              construction of an object or system or for the implementation of
              an activity or process, or the result of that plan or
              specification in the form of a prototype, product or process. The
              national agency for design: enabling Singapore to use design for
              economic growth and to make lives better.
            </span>
          </div>
        </div>
        <div className="md:w-5/12 p-2 md:p-0 ">
          <StartBooking />
        </div>
      </div>
    </div>
  );
};

export default Description;
