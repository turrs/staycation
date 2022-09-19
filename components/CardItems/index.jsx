import React from "react";
import Image from "next/image";
import { Iimage2 } from "../../public/images";
import TagFrame from "../TagFrame";
const CardItems = ({ image, textBold, text }) => {
  return (
    <div className="relative hover:scale-105 hover:opacity-70">
      <TagFrame textBold={textBold} text={text} />
      <Image
        width="100%"
        height="50%"
        layout="responsive"
        src={image}
        alt="image"
      />
    </div>
  );
};

export default CardItems;
