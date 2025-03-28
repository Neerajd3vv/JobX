"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Context
const EmployeeProfileContext = createContext();

// context provider wraps every component with global context
export function EmployeeProfileProvider({ children }) {
  const [profileData, setProfileData] = useState(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("ProfileData");
      return data
        ? JSON.parse(data)
        : {
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
            location: {
              country: "",
              street_address: "",
              city: "",
              state: "",
              pincode: "",
            },
            skills: [],
            socials: [],
            resume: "",
          };
    }
  });

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

// helper function / hook
export const useEmployeeContext = () => useContext(EmployeeProfileContext);
