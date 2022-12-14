import React from "react";
import HotelItems from "../../HotelItems";
import SectionTitle from "../../SectionTitle";

const TypeHotel = ({ data }) => {

  return (
    <div className="">
      <SectionTitle title={data.name} />
      <div className="flex flex-row justify-between flex-wrap">
        {data.itemId.map((items) => (
          <div key={items.id}>
            <HotelItems data={items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeHotel;
