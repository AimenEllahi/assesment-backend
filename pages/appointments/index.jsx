import AppointmentCalender from "@/components/Appointments/AppointmentCalender";
import Navbar from "@/components/Navigation/Navbar";
import React from "react";

export default function index() {
  return (
    <>
      <Navbar />
      <AppointmentCalender />
    </>
  );
}
