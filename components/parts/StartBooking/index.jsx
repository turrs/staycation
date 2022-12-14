import { DatePicker } from "antd";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import Button from "../../Button";
import {
  PlusOutlined,
  MinusOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { AppContext } from "../../../context";
import { useRouter } from "next/router";

const { RangePicker } = DatePicker;
const StartBooking = ({ data }) => {
  const {
    setStartDate,
    startDate,
    endDate,
    setEndDate,
    countDays,
    setCountDays,
    pricePay,
    setPricePay,
    setNewBookingData,
  } = useContext(AppContext);
  const [price, setPrice] = useState(data.price);
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
  const startBookingHotel = (data, startDate, endDate, countDays, pricePay) => {
    console.log("test", data);
    console.log("test start", startDate);
    var newBooking = data;
    newBooking.startDate = moment(startDate);
    newBooking.endDate = moment(endDate);
    newBooking.countDays = countDays;
    newBooking.pricePay = pricePay;
    setNewBookingData(newBooking);
    router.push("/booking");
  };
  const router = useRouter();
  return (
    <div className="border-gray border-soli border-2 rounded-[20px] justify-center flex flex-col ">
      <div className="flex md:p-[80px] p-5 flex-col justify-center">
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
        <div className="flex rounded-[10px] font-['Popping'] w-full py-2 flex-row">
          <div className="hover:opacity-60   w-[45px] h-[45px] bg-purple rounded-[5px] flex justify-center items-center">
            <CalendarOutlined style={{ color: "#ffffff", fontSize: 24 }} />
          </div>
          <div className="flex  grow rounded-[10px] ">
            <RangePicker
              style={{
                width: "100%",
                backgroundColor: "#E5E5E5",
                textAlignLast: "center",
              }}
              format="MMMM DD YYYY"
              placeholder={countDays}
              separator={
                <MinusOutlined style={{ color: "#152C5B", fontSize: 24 }} />
              }
              defaultValue={moment("2015-01-01", "MMMM DD")}
              onChange={onChange}
              value={[startDate, endDate]}
              superNextIcon={null}
              superPrevvIcon={null}
              suffixIcon={false}
              disabledDate={(current) => {
                return current < moment().endOf("day");
              }}
            />
          </div>
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
          <Button
            onClick={() =>
              startBookingHotel(data, startDate, endDate, countDays, pricePay)
            }
            text="Continue to Book"
          />
        </div>
      </div>
    </div>
  );
};

export default StartBooking;
