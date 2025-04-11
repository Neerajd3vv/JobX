"use client";
import { useState } from "react";
import { useEmployeeContext } from "../../app/context";

function JobType({ id }) {
  const { profileData, setProfileData } = useEmployeeContext();
  const types = [
    "Full-Time",
    "Part-Time",
    "Internship",
    "Contractual",
    "Freelance",
  ];
  const [selected, setSelected] = useState("");

  const handleClick = (type) => {
    setSelected(type);
    setProfileData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        exp.id === id ? { ...exp, job_type: type } : exp
      ),
    }));
  };

  return (
    <div className="flex flex-wrap justify-start gap-4">
      {types.map((type) => (
        <div
          key={type}
          onClick={() => {
            handleClick(type);
          }}
          className={`cursor-pointer px-3 py-1 rounded-lg  text-sm  font-medium transition-all 
            ${
              selected === type
                ? "bg-blue-600 text-white  border-2"
                : "border-2 border-zinc-300"
            }`}
        >
          {type}
        </div>
      ))}
    </div>
  );
}

export default JobType;
