"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
function Page() {
  const {data: session} = useSession();
  return (
    <div>
      <h1>fdsf</h1>
      <h1>{JSON.stringify(session?.user)}</h1>
      <button onClick={() => {
        signOut();
      }}>logout</button>
    </div>
  );
}

export default Page;
