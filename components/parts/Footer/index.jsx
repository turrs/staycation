import React from "react";
import LinkFooter from "../../LinkFooter";
import SectionTitle from "../../SectionTitle";

const Footer = () => {
  return (
    <div className="border-gray border-solid border-t-2">
      <div className="flex flex-row flex-wrap md:flex-nowrap p-20">
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
          <div>
            <div>
              <SectionTitle title="Beginners" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
          </div>
          <div>
            <div>
              <SectionTitle title="Explore us" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
          </div>
          <div>
            <div>
              <SectionTitle title="Connect us" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
            <div>
              <LinkFooter text="New Account" url="google.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
