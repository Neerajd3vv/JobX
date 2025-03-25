"use client";
import React from "react";
import { useSession } from "next-auth/react";
function Page() {
  const session = useSession();
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Page;
