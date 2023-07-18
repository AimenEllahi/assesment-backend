import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const DynamicLogin = dynamic(() => import("@/components/Login/Login"), {});
export default function login() {
  const token = useSelector((state) => state.token);
  const router = useRouter();
  if (token) {
    router.push("/appointments");
    return null;
  }
  return <DynamicLogin />;
}
