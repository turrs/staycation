import React from "react";
import { HeaderBooking, StepsForm } from "../components";

export default function booking() {
  return (
    <div>
      <HeaderBooking />
      <div className="pt-20">
        <StepsForm />
      </div>
    </div>
  );
}
