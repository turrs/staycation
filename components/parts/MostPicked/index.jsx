import React from "react";
import SectionTitle from "../../SectionTitle";
import Image from "next/image";
import { Iimage1, Iimage2 } from "../../../public/images";
import TagFrame from "../../TagFrame";
import CardItems from "../../CardItems";
import { useRouter } from "next/router";
const MostPicked = ({ data }) => {
  const router = useRouter();
  return (
    <div className="pb-10">
      <SectionTitle title="Most Picked" />
      <div className="flex flex-row justify-between">
        {data.map((data) => (
          <CardItems
            type="price"
            key={data.id}
            imageData={data.imageId[0].imageUrl}
            textBold={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MostPicked;
