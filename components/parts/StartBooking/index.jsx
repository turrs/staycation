import { DatePicker } from "antd";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import Button from "../../Button";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { AppContext } from "../../../context";

const { RangePicker } = DatePicker;
const StartBooking = () => {
  const {
    setStartDate,
    startDate,
    endDate,
    setEndDate,
    countDays,
    setCountDays,
    pricePay,
    setPricePay,
  } = useContext(AppContext);
  const [price, setPrice] = useState(280);
  const sum = (start, end) => {
    var diff = end.diff(start, "days");
    setCountDays(diff + 1);
    setPricePay(price * (diff + 1));
  };

  const onChange = (dates, dateStrings) => {
    if (dates) {
      var start = moment(dateStrings[0]);
      var end = moment(dateStrings[1]);
      var diff = end.diff(start, "days");
      setStartDate(moment(start));
      setEndDate(moment(end));
      setCountDays(diff);
      sum(start, end);
    } else {
      console.log("Clear");
    }
  };
  const addDays = (startDay, endDay) => {
    const startEndDay = moment(startDay);
    const endDateDay = moment(endDay);
    const addDay = endDateDay.add(1, "days");
    setEndDate(moment(addDay));
    sum(startEndDay, endDateDay);
  };
  const subtractionDays = (startDay, endDay) => {
    if (countDays !== 1) {
      const startEndDay = moment(startDay);
      const endDateDay = moment(endDay);
      const substract = endDateDay.add(-1, "days");
      setEndDate(moment(substract));
      sum(startEndDay, endDateDay);
    }
  };
  return (
    <div className="border-gray border-soli border-2 rounded-[20px] justify-center flex flex-col ">
      <div className="flex md:p-20 p-5 flex-col justify-center">
        <div className="flex -my-2">
          <p className="font-bold text-purple font-['Popping'] text-lg ">
            Start Booking
          </p>
        </div>
        <div className="flex flex-row  ">
          <p className="font-bold text-[#1ABC9C] font-['Popping'] text-4xl ">
            ${price}
          </p>
          <span className="text-[#B0B0B0] font-['Popping'] text-xl p-2">
            per night
          </span>
        </div>
        <div className="flex -mt-6 ">
          <p className=" text-purple font-['Popping'] text-[16px] ">
            How long you wil stay ?
          </p>
        </div>
        <div className="flex flex-row justify-around">
          <div
            className=" hover:opacity-60 w-[45px] h-[45px] bg-[#E74C3C] rounded-[5px] flex justify-center items-center"
            onClick={() => subtractionDays(startDate, endDate)}
          >
            <MinusOutlined style={{ color: "#ffffff", fontSize: 24 }} />
          </div>
          <div className="h-[45px] grow bg-gray rounded-[5px] flex justify-center items-center">
            <span className="font-bold text-purple font-['Popping'] text-md">
              {countDays}
            </span>
          </div>
          <div
            className=" hover:opacity-60  w-[45px] h-[45px] bg-[#1ABC9C] rounded-[5px] flex justify-center items-center "
            onClick={() => addDays(startDate, endDate)}
          >
            <PlusOutlined style={{ color: "#ffffff", fontSize: 24 }} />
          </div>
        </div>
        <div className="pt-2">
          <span className=" text-purple font-['Popping'] text-[16px]  ">
            Pick a Date
          </span>
        </div>
        <div className="flex rounded-[10px] font-['Popping'] w-full flex-col py-2">
          <RangePicker
            disabledTime
            style={{
              width: "100%",
              backgroundColor: "#E5E5E5",
              color: "red",
            }}
            format="DD MMMM "
            defaultValue={moment("2015-01-01", "YYYY-MMMM-DD")}
            onChange={onChange}
            value={[startDate, endDate]}
            superNextIcon={null}
            superPrevvIcon={null}
            suffixIcon={false}
          />
        </div>
        <div>
          <span className=" text-[#B0B0B0] font-['Popping'] text-[16px]  ">
            You will pay
            <span className="text-purple font-semibold font-['Popping'] px-1">
              $ {pricePay <= 0 ? price : pricePay} USD
            </span>
            per
            <span className="text-purple font-semibold font-['Popping'] px-1">
              {countDays} nights
            </span>
          </span>
        </div>
        <div className="pt-5 w-full">
          <Button text="Continue to Book" />
        </div>
      </div>
    </div>
  );
};

export default StartBooking;
