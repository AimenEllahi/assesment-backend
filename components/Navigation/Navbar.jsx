import React from 'react';
import {FiLogOut} from 'react-icons/fi';
import { logout } from '@/Store/Slice/TokenSlice';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
function Navbar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast("Logout Successfully", { type: "success" });
   
  };
  
  return (
    <div className="flex bg-white justify-between items-center bg-white-800 py-4 px-6 mb-1 shadow-md" >
      <div className="flex items-center">
        <img
          src="/assets/ccript_logo.png"
          alt="ccript Logo"
          className="w-16 h-12 mr-2 object-contain"
        />
      </div>
      <div className="flex items-center">
        <div className="rounded bg-red-500 w-10 h-10 flex items-center justify-center mr-2 hover:pointer">
          <FiLogOut onClick={handleLogout} className="h-6 w-6" color='white' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
