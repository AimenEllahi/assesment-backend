import React,{useEffect} from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import TableComponent from "../Table/TableComponent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAppointments } from "@/Api/Appointments";
import { refreshToken } from "@/Api/Login";
import { toast } from "react-toastify";

function AppointmentCalender() {
  const token = useSelector((state) => state.token)
  console.log("token here", token)
  useEffect(() => {
    getAppointments(token).then((res)=>{
      console.log(res.data);
    }).catch((err) =>{
      console.log(err);
    })
  }, [token]);

  //to handle refresh
  const handleRefresh = () => {
    refreshToken(token).then((res)=>{
      console.log(res.data);
      toast("Refreshing data", {type: "success"})
    }).catch((err) =>{
      console.log(err);
      toast("Refreshing Failed", { type: "error" });
    })
  }


  return (
    <div
      className='flex justify-center bg-white'
      style={{
        height: "85vh",
      }}
    >
      <table className='rounded border-collapse w-full mx-20 my-20'>
        <thead>
          <tr>
            <th className='p-2 border border-gray-300 font-bold'>
              <HiOutlineRefresh
                onClick={handleRefresh}
                className='w-5 h-5 mr-1 inline-block object-contain'
                color='green'
              />
            </th>
            <th className='p-2 border border-gray-300 font-bold text-center'>
              Monday
            </th>
            <th className='p-2 border border-gray-300 font-bold text-center'>
              Tuesday
            </th>
            <th className='p-2 border border-gray-300 font-bold text-center'>
              Wednesday
            </th>
            <th className='p-2 border border-gray-300 font-bold text-center'>
              Thursday
            </th>
            <th className='p-2 border border-gray-300 font-bold text-center'>
              Friday
            </th>
            <th className='p-2 border border-gray-300 font-bold text-center'>
              Saturday
            </th>
            <th className='p-2 border border-gray-300 font-bold text-center'>
              Sunday
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2 border border-gray-300 font-bold text-center'>
              8 AM
            </td>
            <td className='p-2 border border-gray-300'></td>
            <td className="p-2 border border-gray-300 relative">
            <TableComponent />
            </td>


            <td className='p-2 border border-gray-300'></td>

            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            {/* <td className='p-2 border border-gray-300'></td> */}
          </tr>
          <tr>
            <td className='p-2 border border-gray-300 font-bold text-center'>
              9 AM
            </td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
          </tr>
          <tr>
            <td className='p-2 border border-gray-300 font-bold text-center'>
              10 AM
            </td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
          </tr>
          <tr>
            <td className='p-2 border border-gray-300 font-bold text-center'>
              11 AM
            </td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
          </tr>
          <tr>
            <td className='p-2 border border-gray-300 font-bold text-center'>
              12 PM
            </td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300 relative'>
            <TableComponent />
            </td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
          </tr>
          <tr>
            <td className='p-2 border border-gray-300 font-bold text-center'>
              1 PM
            </td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
          </tr>
          <tr>
            <td className='p-2 border border-gray-300 font-bold text-center'>
              2 PM
            </td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
            <td className='p-2 border border-gray-300'></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentCalender;
