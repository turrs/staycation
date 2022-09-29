import React from "react";
import { Rate } from "antd";
const StarsReview = ({ data }) => {
  return (
    <div>
      <Rate allowHalf defaultValue={data} />
    </div>
  );
};

export default StarsReview;
