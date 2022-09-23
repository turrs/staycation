import React from "react";
import { HeaderBooking, StepsForm } from "../components";

export default function booking() {
  return (
    <div>
      <HeaderBooking />
      <div className="md:p-10 -p-10">
        <StepsForm />
      </div>
    </div>
  );
}
