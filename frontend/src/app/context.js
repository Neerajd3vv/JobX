"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Context
const EmployeeProfileContext = createContext();
const UserRoleContext = createContext();

// context provider wraps every component with global context
export function EmployeeProfileProvider({ children }) {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    const data = localStorage.getItem("ProfileData");
    if (data) {
      setProfileData(JSON.parse(data));
    } else {
      setProfileData({
        basicinfo: {
          name: "",
          email: "",
          phone_number: "",
        },
        experience: [
          {
            id: Date.now().toString(36) + Math.random().toString(36),
            job_title: "",
            company_name: "",
            job_type: "",
            country: "",
            state: "",
            city: "",
            start_Date: "",
            end_Date: "",
            currently_working: false,
          },
        ],
        address: {
          country: "",
          street_address: "",
          city: "",
          state: "",
          pincode: "",
        },
        skills: [],
        socials: [
          {
            id: Date.now().toString(36) + Math.random().toString(36),
            platform: "",
            link: "",
          },
        ],
        resume: "",
      });
    }
  }, []);

  // updateing localstorage whenever profileData changes
  useEffect(() => {
    if (typeof window != "undefined") {
      localStorage.setItem("ProfileData", JSON.stringify(profileData));
    }
  }, [profileData]);

  return (
    <EmployeeProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </EmployeeProfileContext.Provider>
  );
}

export function UserRoleProvider({ children }) {
  // Changed from UserRoleProfider
  const [role, setRole] = useState("candidate");
  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}

// helper function / hook
export const useEmployeeContext = () => useContext(EmployeeProfileContext);
export const useRoleContext = () => useContext(UserRoleContext);
