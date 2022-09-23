import React from "react";

const Button = ({ text, onClick, type }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-blue cursor-pointer hover:opacity-95 flex justify-center rounded items-center pt-4 w-full h-full`}
    >
      <p className="text-white font-medium text-[18px] text-['Poppins']">
        {text}
      </p>
    </div>
  );
};

export default Button;
