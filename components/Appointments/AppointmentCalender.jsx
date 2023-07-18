import React, { useEffect, useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { days, timeSlots } from "@/constants/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAppointments } from "@/Api/Appointments";
import { refreshToken } from "@/Api/Login";
import { toast } from "react-toastify";
import AppointmentCard from "./AppointmentCard";

function AppointmentCalender() {
  const token = useSelector((state) => state.token);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (token)
      getAppointments(token)
        .then((res) => {
          setAppointments(
            Object.values(res.data).reduce((acc, item) => [...acc, item], [])
          );
        })
        .catch((err) => {
          console.log(err);
          toast("There was some error while retrieveing appointments", {
            type: "error",
            //show only once
            toastId: "error",
          });
        });
  }, [token]);

  //to handle refresh
  const handleRefresh = () => {
    refreshToken(token)
      .then((res) => {
        console.log(res.data);
        toast("Data Refreshed", { type: "success" });
      })
      .catch((err) => {
        console.log(err);
        toast("Refreshing Failed", { type: "error" });
      });
  };

  return (
    <div className='flex justify-center  bg-white flex-col'>
      <table className='rounded border-collapse  mx-20 my-20'>
        <thead>
          <tr>
            <th className='p-2 border cursor-pointer border-gray-300 font-bold'>
              <HiOutlineRefresh
                onClick={handleRefresh}
                className='w-5 h-5 mr-1 inline-block object-contain'
                color='#0AA36E'
              />
            </th>
            {days.map((day) => (
              <th className='p-2 border border-gray-300 font-bold text-center'>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr>
              <td className='p-2 border border-gray-300 font-bold text-center'>
                {time}
              </td>
              {days.map((day) => {
                const matchingAppointments = appointments.filter(
                  (appointment) =>
                    appointment.weekDay === day &&
                    appointment.startTimeFormatted === time
                );

                return (
                  <td className='h-[100px] border relative  border-gray-300 font-bold  '>
                    {matchingAppointments.length > 0 &&
                      matchingAppointments.map((appointment, index) => (
                        <AppointmentCard
                          appointment={appointment}
                          index={index}
                        />
                      ))}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentCalender;
