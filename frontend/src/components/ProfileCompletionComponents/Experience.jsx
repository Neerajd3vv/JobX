"use client";
import { Button } from "../../components/ui/button";
import InputBox from "../../components/custom/InputBox";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import JobType from "../custom/JobType";
import { DatePickerDemo } from "../custom/DatePicker";
import { useEmployeeContext } from "../../app/context";
export default function Experience() {
  const [experience, setExperience] = useState();
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [country, setCountry] = useState("India");
  const { profileData, setProfileData } = useEmployeeContext();

  const generateId = () => Date.now().toString(36) + Math.random().toString(36);
  console.log("profileDataContext", profileData);

  // const [experiencelist, setExperienceList] = useState([
  //   {
  //     id: generateId(),
  //     job_title: "",
  //     company_name: "",
  //     job_type: "",
  //     country: "",
  //     state: "",
  //     city: "",
  //     start_date: "",
  //     end_date: "",
  //     currently_working: false,
  //   },
  // ]);

  const handleAddExp = () => {
    setProfileData((prev) => {
      const newExperience = [
        ...prev.experience,
        {
          id: generateId(),
          job_title: "",
          company_name: "",
          job_type: "",
          country: "",
          state: "",
          city: "",
          start_date: "",
          end_date: "",
          currently_working: false,
        },
      ];
      const newProfileData = { ...prev, experience: newExperience };

      return newProfileData;
    });
  };

  const handleRemoveExp = (uniqueId) => {
    console.log("uniqueId", uniqueId);

    setProfileData((prev) => {
      const newExperience = prev.experience.filter(
        (exp) => exp.id !== uniqueId
      );
      const newProfileData = { ...prev, experience: newExperience };
      return newProfileData;
    });
  };

  const handleChange = (id, key, value) => {
    setProfileData((prev) => {
      const updatedExp = prev.experience.map((experience) => {
        return experience.id === id
          ? { ...experience, [key]: value }
          : experience;
      });
      const newExperience = { ...prev, experience: updatedExp };
      return newExperience;
    });
  };

  return (
    <div className="  mt-24  ">
      <div className="w-full max-w-2xl mx-auto pb-10 space-y-6   ">
        <div className=" mb-10">
          <h2 className="text-4xl font-bold font-montserrat">
            Add work experience
          </h2>
        </div>
        <div className="font-poppins flex flex-col space-y-2">
          <h3>Do you have previous work experience?*</h3>
          <div className="flex space-x-3">
            <InputBox
              onChange={(e) => {
                setExperience(e.target.value);
              }}
              type="radio"
              id="have"
              value="Yes"
              name="work_exp"
              checked={experience === "Yes"}
            />
            <Label htmlFor="have" className="text-md">
              Yes
            </Label>
          </div>
          <div className="flex space-x-3">
            <InputBox
              onChange={(e) => {
                setExperience(e.target.value);
              }}
              type="radio"
              id="does not have"
              value="No"
              name="work_exp"
              checked={experience === "No"}
            />
            <Label htmlFor="does not have" className="text-md">
              No
            </Label>
          </div>
        </div>
        {experience === "Yes" && (
          <div className="mt-10  max-h-[800px] overflow-y-scroll ">
            {profileData?.experience?.map((currentExp, index) => (
              <div
                key={currentExp.id}
                className="space-y-6 mb-14  border p-4 rounded-lg border-zinc-200 pb-10"
              >
                <div className=" gap-4 font-poppins space-y-6">
                  {/* Job Title */}
                  <div className="space-y-2">
                    <Label htmlFor={`job-title-${index}`} className="text-md">
                      Job Title
                    </Label>
                    <InputBox
                      value={currentExp.job_title}
                      onChange={(e) => {
                        handleChange(
                          currentExp.id,
                          "job_title",
                          e.target.value
                        );
                      }}
                      type="text"
                      id={`job-title-${index}`}
                      placeholder="Enter job title"
                      className="w-full p-3 border-1 border-zinc-300 rounded-lg"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor={`company-name-${index}`}
                      className="text-md"
                    >
                      Company Name
                    </Label>
                    <InputBox
                      value={currentExp.company_name}
                      onChange={(e) => {
                        handleChange(
                          currentExp.id,
                          "company_name",
                          e.target.value
                        );
                      }}
                      type="text"
                      id={`company-name-${index}`}
                      placeholder="Enter company name"
                      className="w-full p-3 border-1 border-zinc-300 rounded-lg"
                    />
                  </div>

                  {/* Job type */}
                  <div className="space-y-2">
                    <Label className="text-md">Job Type</Label>
                    <JobType id={currentExp.id} />
                  </div>

                  {/* Country */}
                  <div className="space-y-2 relative">
                    <div className="flex justify-between items-center">
                      <Label htmlFor={`country-${index}`} className="text-md">
                        Country
                      </Label>
                      {!isEditing && (
                        <Button
                          variant="link"
                          className="text-blue-500 text-sm hover:underline"
                          onClick={() => setIsEditing(true)}
                        >
                          Change
                        </Button>
                      )}
                    </div>

                    {isEditing ? (
                      <InputBox
                        value={currentExp.country}
                        onChange={(e) => {
                          handleChange(
                            currentExp.id,
                            "country",
                            e.target.value
                          );
                        }}
                        type="text"
                        id={`country-${index}`}
                        placeholder="Enter country"
                        className="w-full p-3 border border-zinc-300 rounded-lg"
                        onBlur={() => setIsEditing(false)} // Hide input when focus is lost
                      />
                    ) : (
                      <div className="w-full p-3 border border-zinc-300 rounded-lg bg-gray-100">
                        {country}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-md" htmlFor={`state-${index}`}>
                        State
                      </Label>
                      <InputBox
                        value={currentExp.state}
                        onChange={(e) => {
                          handleChange(currentExp.id, "state", e.target.value);
                        }}
                        type="text"
                        id={`state-${index}`}
                        placeholder="State"
                        className="w-full p-3 border border-zinc-300 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-md" htmlFor={`city-${index}`}>
                        City
                      </Label>
                      <InputBox
                        value={currentExp.city}
                        onChange={(e) => {
                          handleChange(currentExp.id, "city", e.target.value);
                        }}
                        type="text"
                        id={`city-${index}`}
                        placeholder="City"
                        className="w-full p-3 border border-zinc-300 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Start Date */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-md">Start Date</Label>
                      <DatePickerDemo className="py-5 text-lg" />
                    </div>

                    {/* End Date */}
                    {!currentlyWorking && (
                      <div className="space-y-2">
                        <Label className="text-md">End Date</Label>
                        <DatePickerDemo className="py-5 text-lg" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Currently Working Checkbox */}
                <div className="flex items-center gap-2 font-poppins">
                  <Checkbox
                    id="currently-working"
                    checked={currentExp.currently_working}
                    onCheckedChange={(checked) => {
                      setCurrentlyWorking(!currentlyWorking);
                      handleChange(currentExp.id, "currently_working", checked);
                    }}
                  />
                  <Label
                    htmlFor="currently-working"
                    className="text-sm text-zinc-600"
                  >
                    Currently working here
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-between font-poppins">
                  <Button
                    onClick={handleAddExp}
                    size="lg"
                    variant="outline"
                    className="py-4  "
                  >
                    Add More.
                  </Button>
                  {profileData.experience.length > 1 && (
                    <Button
                      onClick={() => handleRemoveExp(currentExp.id)}
                      variant="destructive"
                      size="lg"
                      className="py-4"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
