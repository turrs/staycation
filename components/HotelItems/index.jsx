import { useRouter } from "next/router";
import React from "react";
import { Iimage1 } from "../../public/images";
import CardItems from "../CardItems";
import SectionTitle from "../SectionTitle";

const HotelItems = ({ data }) => {
  console.log(1111, data.imageId.imageUrl);
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/detail/${data._id}`)}
      className="w-[300px] h-[250px] cursor-pointer"
    >
      <div className="w-[310px] h-[180px]">
        <CardItems
          imageData={data.imageId[0].imageUrl}
          isPopular={data.isPopular}
          textBold=""
          type=""
          id={data._id}
        />
      </div>
      <div className="-mt-5">
        <p className="text-purple">{data.title}</p>
        <p className="text-gray1 -mt-4">{data.city}, Indonesia</p>
      </div>
    </div>
  );
};

export default HotelItems;
