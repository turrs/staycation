import React, { useEffect } from "react";
import Image from "next/image";
import { Iimage2 } from "../../public/images";
import TagFrame from "../TagFrame";
import { useRouter } from "next/router";
const CardItems = ({ imageData, textBold, isPopular, type, id }) => {
  const router = useRouter();

  const myLoader = ({ src, width, height, quality }) => {
    return `${src}?w=${width}&h=${height}&q=${quality || 75}`;
  };
  if (imageData === undefined) {
    imageData =
      "https://admin-stay.herokuapp.com/images/image-mostpicked-13-min.jpg";
  }
  return (
    <div
      onClick={() => router.push(`/detail/${id}`)}
      className="relative hover:scale-105 hover:opacity-70 cursor-pointer"
    >
      <TagFrame textBold={textBold} isPopular={isPopular} type={type} />

      <Image
        priority
        loader={myLoader}
        className="rounded-[20px]"
        width="100%"
        height="50%"
        layout="responsive"
        src={`${process.env.API_BACKEND}${imageData}`}
        alt="image"
      />
    </div>
  );
};

export default CardItems;
