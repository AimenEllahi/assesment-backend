import React from "react";

export default function AppointmentCard({ appointment, index }) {
  const colors = [
    "bg-Sky-800",
    "bg-Green-800",
    "bg-Indigo-800",
    "bg-Orange-800",
    "bg-Amber-800",
    "bg-Lime-800",
  ];

  return (
    <div
      style={{
        zIndex: index,
        height: `${
          (appointment.endTimeFormatted.split(" ")[0] -
            appointment.startTimeFormatted.split(" ")[0] +
            1) *
          98
        }px`,
      }}
      key={index}
      className={`absolute top-[1.5px] left-1.5 w-[95%] p-5 border  overflow-hidden flex flex-col items-center justify-start text-white rounded-lg bg-blue-500`}
    >
      <span className='text-sm'> {appointment.name}</span>
      <span className='text-sm font-light'>Reason</span>
      <span className='text-sm font-medium text-center'>
        {" "}
        {appointment.reason}
      </span>
    </div>
  );
}
