import React, { createContext, useState } from "react";
import Axios from "../axios";
export const AppContext = createContext(null);
export const ContexWrapper = ({ children }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [countDays, setCountDays] = useState(1);
  const [pricePay, setPricePay] = useState(0);
  const [dataLandingPage, setDataLandingPage] = useState();
  const [newBookingData, setNewBookingData] = useState();
  const [dataUserNewBooking, setDataUserNewBooking] = useState({
    firstName: "",
    lastName: "",
    emailAdress: "",
    phoneNumber: "",
    proofPaying: "",
    bankPaying: "",
    namePaying: "",
  });
  const getDataLandingPage = async () => {
    try {
      const response = await Axios.get("/landing-page");

      setDataLandingPage(response);
    } catch (ex) {
      if (ex && ex !== undefined && ex.toString && ex.toString !== undefined) {
        // print the general exception
        console.log(ex.toString());
      }
      if (
        ex.response &&
        ex.response !== undefined &&
        ex.response.data &&
        ex.response.data !== undefined
      ) {
        // print the exception message from axios response
        console.log(ex.response.data);
      }
    }
  };
  return (
    <AppContext.Provider
      value={{
        getDataLandingPage,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        countDays,
        setCountDays,
        pricePay,
        setPricePay,
        newBookingData,
        setNewBookingData,
        dataUserNewBooking,
        setDataUserNewBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
