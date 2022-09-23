import { Popover, Steps } from "antd";
import React, { useContext, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Ibooking, IlogoBca, IlogoMandiri } from "../../public/images";
import { AppContext } from "../../context";
import TextInput from "../TextInput";
import Button from "../Button";
const { Step } = Steps;

const customDot = (dot, { status, index }) => {
  console.log(11, status + "index" + index);
  return (
    <div
      className={`border-dashed border-[#1ABC9C] ${
        status === "process" ? "border-2 " : ""
      }  w-[30px] h-[30px] -m-3 flex justify-center items-center rounded-[50%] ${
        status === "finish" ? "bg-[#1ABC9C]" : "bg-gray"
      } `}
    >
      {status === "finish" ? (
        <CheckOutlined style={{ fontSize: "16px", color: "#fff" }} />
      ) : (
        <span
          className={`${
            status === "process" ? "text-purple font-semibold" : ""
          }`}
        >
          {index}
        </span>
      )}
    </div>
  );
};
const BookingInformation = () => {
  const { pricePay, countDays } = useContext(AppContext);
  return (
    <div className="flex justify-center p-5">
      <div className="flex-col flex justify-center">
        <div className="flex sm:justify-center">
          <p className="text-purple font-bold text-xl">Booking Information</p>
        </div>
        <div className="flex sm:justify-center -mt-5">
          <p className="text-gray  text-md">
            Please fill up the blank fields below
          </p>
        </div>
        <div className="flex flex-row -ml-20 flex-wrap justify-center md:flex-nowrap ">
          <div className="px-20 justify-center border-solid md:border-r-4">
            <div className="md:w-[420px] md:h-[270px] py-10 rounded-[20px]">
              <Image width={420} height={270} src={Ibooking} />
            </div>
            <div className="md:pt-14 flex flex-row justify-between">
              <div>
                <div>
                  <span className="text-purple font-semibold">Podo Wae</span>
                </div>
                <div>
                  <span className="text-[#B0B0B0] ">Madiun, Indonesia</span>
                </div>
              </div>
              <div>
                <span className="text-purple font-semibold font-['Popping'] px-1">
                  $ {pricePay <= 0 ? "280" : pricePay} USD
                </span>
                per
                <span className="text-purple font-semibold font-['Popping'] px-1">
                  {countDays} nights
                </span>
              </div>
            </div>
          </div>
          <div className="px-20">
            <div className="pt-5">
              <form>
                <div className="pt-4">
                  <TextInput />
                </div>
                <div className="pt-4">
                  <TextInput />
                </div>
                <div className="pt-4">
                  <TextInput />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Payment = () => {
  const { pricePay, countDays } = useContext(AppContext);
  return (
    <div className="flex justify-center p-5">
      <div className="flex-col flex justify-center">
        <div className="flex sm:justify-center">
          <p className="text-purple font-bold text-xl">Payment</p>
        </div>
        <div className="flex sm:justify-center -mt-5">
          <p className="text-gray  text-md">
            Kindly follow the instructions below
          </p>
        </div>
        <div className="flex flex-row -ml-20 flex-wrap justify-center md:flex-nowrap ">
          <div className="px-20 justify-center border-solid md:border-r-4">
            <div className="md:w-[420px] md:h-[270px] py-10 rounded-[20px]">
              <div className="md:pl-28">
                <div>
                  <span className="text-purple font-semibold">
                    Transfer Pembayaran
                  </span>
                </div>
                <div>
                  <span className="text-purple font-semibold">Tax : 10 %</span>
                </div>
                <div>
                  <span className="text-purple font-semibold">
                    Sub total: $480 USD
                  </span>
                </div>
                <div>
                  <span className="text-purple font-semibold">
                    Total: $580 USD
                  </span>
                </div>
              </div>
              <div className="md:pl-28 md:pt-10 flex flex-row">
                <div className="flex  items-center">
                  <Image src={IlogoBca} />
                </div>
                <div className="flex flex-col p-2">
                  <span className="text-purple ">Bank Central Asia</span>
                  <span className="text-purple ">22342342</span>
                  <span className="text-purple ">Fatur Rahman</span>
                </div>
              </div>
              <div className="md:pl-28 md:pt-10 flex flex-row">
                <div className="flex  items-center">
                  <Image src={IlogoMandiri} />
                </div>
                <div className="flex flex-col p-2">
                  <span className="text-purple ">Mandiri</span>
                  <span className="text-purple ">84333444</span>
                  <span className="text-purple ">Fatur Rahman</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-20">
            <div className="pt-5">
              <form>
                <div>
                  <TextInput />
                </div>
                <div className="pt-4">
                  <TextInput />
                </div>
                <div className="pt-4">
                  <TextInput />
                </div>
                <div className="pt-4">
                  <TextInput />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Completed = () => {
  return <div>3</div>;
};
const StepsForm = () => {
  const [current, setCurrent] = useState(0);
  const finish = () => {};
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      content: <BookingInformation />,
    },
    {
      content: <Payment />,
    },
    {
      content: <Completed />,
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center w-full ">
        <div className="md:flex justify-center hidden md:block  ">
          <Steps
            style={{ width: 400 }}
            current={current}
            progressDot={customDot}
          >
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
        <div className=" flex flex-row md:flex-col">
          <div className="flex w-10 p-10 items-center justify-center sm:hidden  ">
            <Steps
              style={{ width: 400 }}
              current={current}
              progressDot={customDot}
            >
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </div>
          <div>{steps[current].content}</div>
        </div>
        <div className="flex justify-center flex-col ">
          <div className="flex justify-center p-2">
            {current < steps.length - 1 && (
              <div className="w-[240px] h-[40px]">
                <Button text="Next" onClick={() => next()} />
              </div>
            )}
            {current === steps.length - 1 && (
              <div className="w-[240px] h-[40px]">
                <Button
                  type="gray"
                  text="Done"
                  className="bg-gray"
                  onClick={() => finish()}
                >
                  Done
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            {current > 0 && (
              <div className="w-[240px] h-[40px]">
                <Button text=" Previous" onClick={() => prev()}></Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default StepsForm;
