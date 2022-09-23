import React from "react";

const Button = ({ text, onClick, type }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer hover:opacity-95 flex justify-center rounded items-center pt-4 w-full h-full ${
        type === "gray" ? "bg-gray hover:bg-blue" : "bg-blue"
      }`}
    >
      <p className="text-white font-medium text-[18px] text-['Poppins']">
        {text}
      </p>
    </div>
  );
};

export default Button;
