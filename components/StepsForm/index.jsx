import { Popover, Steps } from "antd";
import React, { useContext, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import Image from "next/image";
import {
  Ibooking,
  Icompleted,
  IlogoBca,
  IlogoMandiri,
} from "../../public/images";
import { AppContext } from "../../context";
import TextInput from "../TextInput";
import Button from "../Button";
import { useRouter } from "next/router";
import next from "next";
const { Step } = Steps;
import moment from "moment";
import Axios from "../../axios";
const customDot = (dot, { status, index }) => {
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
  const {
    pricePay,
    countDays,
    newBookingData,
    dataUserNewBooking,
    setDataUserNewBooking,
  } = useContext(AppContext);
  const onChangeFirstName = (value) => {
    setDataUserNewBooking({ ...dataUserNewBooking, firstName: value });
  };
  const onChangeLastName = (value) => {
    setDataUserNewBooking({ ...dataUserNewBooking, lastName: value });
  };
  const onChangeEmailAdress = (value) => {
    setDataUserNewBooking({ ...dataUserNewBooking, emailAdress: value });
  };
  const onChangePhoneNumber = (value) => {
    setDataUserNewBooking({ ...dataUserNewBooking, phoneNumber: value });
  };
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
                  <span className="text-purple font-semibold">
                    {newBookingData?.title}
                  </span>
                </div>
                <div>
                  <span className="text-[#B0B0B0] ">
                    {newBookingData?.city}, {newBookingData?.country}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-purple font-semibold font-['Popping'] px-1">
                  ${" "}
                  {newBookingData?.pricePay <= 0
                    ? "280"
                    : newBookingData?.pricePay}{" "}
                  USD
                </span>
                per
                <span className="text-purple font-semibold font-['Popping'] px-1">
                  {newBookingData?.countDays} nights
                </span>
              </div>
            </div>
          </div>
          <div className="px-20">
            <div className="pt-5">
              <div className="pt-4">
                <TextInput
                  title="First Name"
                  id="firstName"
                  value={dataUserNewBooking.firstName}
                  onChange={(e) => onChangeFirstName(e.target.value)}
                />
              </div>
              <div className="pt-4">
                <TextInput
                  title="Last Name"
                  id="lastName"
                  value={dataUserNewBooking.lastName}
                  onChange={(e) => onChangeLastName(e.target.value)}
                />
              </div>
              <div className="pt-4">
                <TextInput
                  title="Email Adress"
                  id="emailAdress"
                  value={dataUserNewBooking.emailAdress}
                  onChange={(e) => onChangeEmailAdress(e.target.value)}
                />
              </div>
              <div className="pt-4">
                <TextInput
                  title="Phone Number"
                  id="phoneNumber"
                  value={dataUserNewBooking.phoneNumber}
                  onChange={(e) => onChangePhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Payment = () => {
  const {
    pricePay,
    countDays,
    newBookingData,
    dataUserNewBooking,
    setDataUserNewBooking,
  } = useContext(AppContext);

  const onChangeProofPaying = (event) => {
    setDataUserNewBooking({
      ...dataUserNewBooking,
      proofPaying: event.target.files[0],
    });
  };
  const onChangeBankPaying = (value) => {
    setDataUserNewBooking({ ...dataUserNewBooking, bankPaying: value });
  };
  const onChangeNamePaying = (value) => {
    setDataUserNewBooking({ ...dataUserNewBooking, namePaying: value });
  };
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
                    Sub total: ${newBookingData.price} USD
                  </span>
                </div>
                <div>
                  <span className="text-purple font-semibold">
                    Total: ${newBookingData.pricePay} USD
                  </span>
                </div>
              </div>
              {newBookingData.bank.map((items) => (
                <div className="md:pl-28 md:pt-5 flex flex-row" key={items.id}>
                  <div className="flex  items-center">
                    <Image
                      width={80}
                      height={30}
                      src={`${process.env.API_BACKEND}${items.imageUrl}`}
                    />
                  </div>
                  <div className="flex flex-col p-2">
                    <span className="text-purple ">{items.nameBank}</span>
                    <span className="text-purple ">{items.nomorRekening}</span>
                    <span className="text-purple ">{items.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-20">
            <div className="pt-5 flex justify-center">
              <form>
                <div>
                  <TextInput
                    title="Upload Bukti Transfer"
                    onChange={onChangeProofPaying}
                    type="file"
                  />
                </div>
                <div className="pt-4">
                  <TextInput
                    title="Asal Bank"
                    id="bank"
                    value={dataUserNewBooking.bankPaying}
                    onChange={(e) => onChangeBankPaying(e.target.value)}
                  />
                </div>
                <div className="pt-4">
                  <TextInput
                    title="Nama Pengirim"
                    id="name"
                    value={dataUserNewBooking.namePaying}
                    onChange={(e) => onChangeNamePaying(e.target.value)}
                  />
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
  return (
    <div className="flex justify-center p-5">
      <div className="flex-col flex justify-center">
        <div className="flex justify-center">
          <p className="text-purple font-bold text-xl">Yay! Completed</p>
        </div>
        <div className="flex sm:justify-center sm:m-0 -mt-6 py-10">
          <Image src={Icompleted}></Image>
        </div>
        <div className="flex sm:justify-center -mt-5 max-w-[400px]">
          <p className="text-gray text-center text-md">
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
      </div>
    </div>
  );
};
const StepsForm = () => {
  const { dataUserNewBooking, newBookingData } = useContext(AppContext);
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const finish = () => {
    router.push("/");
  };
  const next = (event) => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const postBooking = async () => {
    var startDate = moment(newBookingData.startDate).format("MM-DD-YYYY");
    var endDate = moment(newBookingData.endDate).format("MM-DD-YYYY");

    if (
      newBookingData._id === undefined ||
      newBookingData.countDays === undefined ||
      startDate === undefined ||
      endDate === undefined ||
      dataUserNewBooking.firstName === undefined ||
      dataUserNewBooking.lastName === undefined ||
      dataUserNewBooking.emailAdress === undefined ||
      dataUserNewBooking.phoneNumber === undefined ||
      dataUserNewBooking.namePaying === undefined ||
      dataUserNewBooking.bankPaying === undefined
    ) {
      console.log("lengkapi semua field");
    } else {
      try {
        var dataBooking = {
          idItem: newBookingData._id,
          duration: newBookingData.countDays,
          bookingStartDate: startDate,
          bookingEndDate: endDate,
          firstName: dataUserNewBooking.firstName,
          lastName: dataUserNewBooking.lastName,
          email: dataUserNewBooking.emailAdress,
          phoneNumber: dataUserNewBooking.phoneNumber,
          accountHolder: dataUserNewBooking.namePaying,
          bankFrom: dataUserNewBooking.bankPaying,
          image: dataUserNewBooking.proofPaying,
        };
        const formData = new FormData();
        formData.append("idItem", dataBooking.idItem);
        formData.append("duration", dataBooking.duration);
        formData.append("bookingStartDate", dataBooking.bookingStartDate);
        formData.append("bookingEndDate", dataBooking.bookingEndDate);
        formData.append("firstName", dataBooking.firstName);
        formData.append("lastName", dataBooking.lastName);
        formData.append("email", dataBooking.email);
        formData.append("phoneNumber", dataBooking.phoneNumber);
        formData.append("accountHolder", dataBooking.accountHolder);
        formData.append("bankFrom", dataBooking.bankFrom);
        formData.append("image", dataBooking.image);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const response = await Axios.post(
          "/booking-page",
          formData,
          config
        ).then((res) => {
          console.log(res);
        });

        setCurrent(current + 1);
      } catch (err) {
        console.log(err);
      }
    }
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
        <div className="flex  flex-col ">
          <div className="flex justify-end sm:justify-center  pt-10 pb-2 px-10">
            {current < steps.length - 1 &&
              (current === steps.length - 2 ? (
                <div className="sm:w-[240px] w-[160px]  h-[40px]">
                  <Button text="Booking" onClick={() => postBooking()} />
                </div>
              ) : (
                <div className="sm:w-[240px] w-[160px]  h-[40px]">
                  <Button text="Continue to book" onClick={() => next()} />
                </div>
              ))}
            {current === steps.length - 1 && (
              <div className="sm:w-[240px] w-[160px] h-[40px]">
                <Button text="Done" onClick={() => finish()}>
                  Done
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-end sm:justify-center  pt-0 pb-2 px-10">
            {current > 0 && (
              <div className="sm:w-[240px] w-[160px] h-[40px]">
                <Button
                  type="gray"
                  text="Previous"
                  onClick={() => prev()}
                ></Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default StepsForm;
