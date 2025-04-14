"use client";
import { useState } from "react";
import InputBox from "../custom/InputBox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useEmployeeContext } from "../../app/context";
import { X } from "lucide-react";
import SkillPicker from "../custom/SkillPicker";


function Skills() {
  const { profileData, setProfileData } = useEmployeeContext();
  const [skill, setSkill] = useState("");

  const handleChange = (value) => {
    if (!value) return;

    setProfileData((prev) => {
      const newSkill = {
        id: Date.now().toString(36) + Math.random().toString(36),
        name: value,
      };
      const newSkillsArray = [...prev.skills, newSkill];
      const updatedProfileData = { ...prev, skills: newSkillsArray };

      return updatedProfileData;
    });
    setSkill("");
  };

  const handleRemoveSkill = (id) => {
    console.log("id", id);
    setProfileData((prev) => {
      const newSkillsArray = prev.skills.filter((skill) => skill.id !== id);
      console.log("newSkillsArray", newSkillsArray);
      const updatedProfileData = { ...prev, skills: newSkillsArray };
      return updatedProfileData;
    });
  };

  return (
    <div className="mt-24 w-full max-w-2xl  mx-auto">
      <div>
        <h2 className="text-4xl font-bold mb-6 font-montserrat">Add skills</h2>

        <div className="flex flex-wrap gap-3 py-5 font-poppins">
          {profileData?.skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-3 bg-indigo-100 border border-gray-300 px-4 py-1 rounded-full shadow-sm text-gray-600"
            >
              <span className="text-sm  font-">{skill.name}</span>
              <button
                onClick={() => handleRemoveSkill(skill.id)}
                className=" cursor-pointer text-black hover:text-red-500 transition duration-150"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-2 font-poppins">
          <Label className="text-md" htmlFor={`state`}>
            Skills
          </Label>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleChange(skill);
            }}
            className="w-full flex items-center space-x-4"
          >
            <InputBox
              onChange={(e) => {
                setSkill(e.target.value);
              }}
              value={skill}
              type="text"
              id={`state`}
              placeholder="ex. React, JavaScript, etc."
              className="w-full p-3 border border-zinc-300 rounded-lg"
            />
            <Button type="submit" className="px-8 py-6 text-md">
              Add
            </Button>
          </form>
          
        </div>
        <SkillPicker />
      </div>
    </div>
  );
}

export default Skills;
