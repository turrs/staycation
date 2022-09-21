import React from "react";

const PageHeaders = () => {
  return (
    <div className="flex flex-row static pb-5">
      <div>
        <span className="text-[#B0B0B0]">Home / </span>
        <span className="text-purple font-semibold">House Details </span>
      </div>
      <div className="flex justify-center pt-5 pb-5  md:left-[50%] absolute ">
        <div className="">
          <div className="flex justify-center">
            <p className="text-purple font-['Poppins'] font-bold text-2xl">
              Village Angga
            </p>
          </div>
          <div className="-mt-6 flex justify-center">
            <p className="text-[#B0B0B0]">Bogor, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeaders;
