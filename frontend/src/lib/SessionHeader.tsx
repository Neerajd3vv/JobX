"use client";

import { useSession } from "next-auth/react";
import Header from "../components/custom/header";
import HeaderTwo from "../components/custom/HeaderTwo";

export default function SessionHeader() {
  const { data: session, status } = useSession();

  if (status === "loading") return null; 

  return session?.user ? <HeaderTwo /> : <Header />;
}
