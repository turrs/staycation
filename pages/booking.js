import { useRouter } from "next/router";
import React, { useContext } from "react";
import { HeaderBooking, StepsForm } from "../components";
import { AppContext } from "../context";

export default function Booking() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <HeaderBooking />
      <div className="md:p-10 -p-10">
        <StepsForm />
      </div>
    </div>
  );
}
