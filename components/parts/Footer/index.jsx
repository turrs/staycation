import React from "react";
import LinkFooter from "../../LinkFooter";
import SectionTitle from "../../SectionTitle";

const Footer = () => {
  return (
    <div className="border-gray border-solid border-t-2">
      <div className="flex flex-row flex-wrap md:flex-nowrap p-20 pb-10">
        <div className="w-6/12">
          <div className="flex flex-row">
            <p className="text-blue  font-['Poppins']  font-medium text-xl">
              Stay
            </p>
            <p className=" text-purple font-['Poppins']  font-medium text-xl">
              cation
            </p>
          </div>
          <div>
            <p className="text-gray1 max-w-[250px]">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row justify-between">
          <div className="p-2">
            <div>
              <SectionTitle title="Beginners" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
            <div>
              <LinkFooter text="Start Booking a Room" url="google.com" />
            </div>
            <div>
              <LinkFooter text="Use Payments" url="google.com" />
            </div>
          </div>
          <div className="p-2">
            <div>
              <SectionTitle title="Explore us" />
            </div>
            <div>
              <LinkFooter text="Our Careers" url="google.com" />
            </div>
            <div>
              <LinkFooter text="Privacy" url="google.com" />
            </div>
            <div>
              <LinkFooter text="Terms & Conditions" url="google.com" />
            </div>
          </div>
          <div className="p-2">
            <div>
              <SectionTitle title="Connect us" />
            </div>
            <div>
              <LinkFooter text="support@staycation.id" url="google.com" />
            </div>
            <div>
              <LinkFooter text="021 - 2208 - 1996" url="google.com" />
            </div>
            <div>
              <LinkFooter text="Staycation, Kemang, Jakarta" url="google.com" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <LinkFooter
          text="Copyright 2019 • All rights reserved • Staycation"
          url="google.com"
        />
      </div>
    </div>
  );
};

export default Footer;
