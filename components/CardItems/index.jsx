import React from "react";
import Image from "next/image";
import { Iimage2 } from "../../public/images";
import TagFrame from "../TagFrame";
import { useRouter } from "next/router";
const CardItems = ({ image, textBold, text }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/detail/detailId")}
      className="relative hover:scale-105 hover:opacity-70 cursor-pointer"
    >
      <TagFrame textBold={textBold} text={text} />
      <Image
        className="rounded-[20px]"
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
