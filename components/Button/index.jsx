import React from "react";

const Button = ({ text }) => {
  return (
    <div className="bg-blue hover:opacity-95 flex justify-center rounded items-center pt-4 w-[210px] h-[50px]">
      <p className="text-white font-medium text-[18px] text-['Poppins']">
        {text}
      </p>
    </div>
  );
};

export default Button;
