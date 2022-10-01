import React from "react";

const TextInput = ({ title, id, value, onChange, type }) => {
  return (
    <div>
      <div>
        <p className="text-purple font-medium">{title}</p>
      </div>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className="bg-gray w-[320px] h-[45px] rounded-[10px] p-2 text-purple font-medium"
      />
    </div>
  );
};

export default TextInput;
