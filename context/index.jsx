import React, { createContext, useState } from "react";
export const AppContext = createContext(null);
export const ContexWrapper = ({ children }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [countDays, setCountDays] = useState(1);
  const [pricePay, setPricePay] = useState(0);
  return (
    <AppContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        countDays,
        setCountDays,
        pricePay,
        setPricePay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
