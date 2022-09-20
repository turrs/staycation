import React from "react";
import {
  HomeOutlined,
  FileSearchOutlined,
  StarOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const Header = () => {
  return (
    <div className="p-0 m-0">
      <div className="border-solid border-b-2 md:pr-[80px] md:pl-[80px] border-gray flex flex-row ">
        <div className="w-1/2 flex flex-row pl-5 md:pl-0 pt-5">
          <p className="text-blue  font-['Poppins']  font-medium text-xl">
            Stay
          </p>
          <p className=" text-purple font-['Poppins']  font-medium text-xl">
            cation
          </p>
        </div>
        <div className="w-1/2 md:pl-[180px] md:block hidden pt-5">
          <div>
            <ul className="flex flex-row justify-between">
              <li className="font-['Poppins'] cursor-pointer text-purple">
                Home
              </li>
              <li className="font-['Poppins'] cursor-pointer text-purple">
                Browse
              </li>
              <li className="font-['Poppins'] cursor-pointer text-purple">
                Stories
              </li>
              <li className="font-['Poppins'] cursor-pointer text-purple">
                Agents
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray flex p-2 justify-around z-[100] flex-row md:hidden block fixed bottom-5 left-20 right-20 rounded-[20px] ">
        <div className="flex hover:scale-105 bg-white  rounded-[15px] justify-center p-3 ">
          <HomeOutlined style={{ fontSize: "26px", color: "#3252DF" }} />
        </div>
        <div className="flex hover:scale-105 bg-white  rounded-[15px] justify-center p-3 ">
          <FileSearchOutlined style={{ fontSize: "26px", color: "#3252DF" }} />
        </div>
        <div className="flex hover:scale-105 bg-white  rounded-[15px] justify-center p-3 ">
          <StarOutlined style={{ fontSize: "26px", color: "#3252DF" }} />
        </div>
        <div className="flex hover:scale-105 bg-white  rounded-[15px] justify-center p-3 ">
          <UserAddOutlined style={{ fontSize: "26px", color: "#3252DF" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
