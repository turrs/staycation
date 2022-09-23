import React from "react";
import {
  HomeOutlined,
  FileSearchOutlined,
  StarOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
const HeaderBooking = () => {
  const router = useRouter();
  return (
    <div className="p-0 m-0">
      <div className="border-solid border-b-2 md:pr-[80px] md:pl-[80px] border-gray flex justify-center flex-row ">
        <div
          onClick={() => router.push("/")}
          className="flex justify-center   pl-5 md:pl-0 pt-5"
        >
          <p className="text-blue  font-['Poppins']  font-medium text-xl">
            Stay
          </p>
          <p className=" text-purple font-['Poppins']  font-medium text-xl">
            cation
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBooking;
