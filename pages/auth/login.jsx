import React from "react";
import dynamic from "next/dynamic";
const DynamicLogin = dynamic(() => import("@/Components/Login/Login"), {});
export default function login() {
  return <DynamicLogin />;
}
