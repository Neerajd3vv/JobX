"use client";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "../components/ui/sonner";
import { EmployeeProfileProvider, UserRoleProvider } from "./context";
export default function Providers({ children }) {
  return (
    <SessionProvider>
      <Toaster />
      <EmployeeProfileProvider>
        <UserRoleProvider>{children}</UserRoleProvider>
      </EmployeeProfileProvider>
    </SessionProvider>
  );
}
