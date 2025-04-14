"use client";
import { useState } from "react";
import InputBox from "../custom/InputBox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useEmployeeContext } from "../../app/context";

function Location() {
  const [isEditing, setIsEditing] = useState(false);
  const { profileData, setProfileData } = useEmployeeContext();

  const handleChange = (label, value) => {
    setProfileData((prev) => {
      return { ...prev, address: { ...prev.address, [label]: value } };
    });
  };

  return (
    <div className="mt-24 w-full max-w-2xl  mx-auto">
      <h2 className="text-4xl font-bold mb-6 font-montserrat">
        Add your address
      </h2>

      <form className="gap-4 font-poppins space-y-6">
        <div className="space-y-2 relative">
          <div className="flex justify-between items-center">
            <Label htmlFor={`country`} className="text-md">
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
              onChange={(e) => {
                handleChange(currentExp.id, "country", e.target.value);
              }}
              type="text"
              id={`country`}
              placeholder="Enter country"
              className="w-full p-3 border border-zinc-300 rounded-lg"
              onBlur={() => setIsEditing(false)} // Hide input when focus is lost
            />
          ) : (
            <div className="w-full p-3 border border-zinc-300 rounded-lg bg-gray-100">
              India
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label className="text-md" htmlFor={`street_address`}>
            Street address
          </Label>
          <InputBox
            value={profileData?.address?.street_address || ""}
            onChange={(e) => {
              handleChange("street_address", e.target.value);
            }}
            type="text"
            id={`street_address`}
            placeholder="street address"
            className="w-full p-3 border border-zinc-300 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-md" htmlFor={`state`}>
              State
            </Label>
            <InputBox
              value={profileData?.address?.state || ""}
              onChange={(e) => {
                handleChange("state", e.target.value);
              }}
              type="text"
              id={`state`}
              placeholder="state"
              className="w-full p-3 border border-zinc-300 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-md" htmlFor={`city`}>
              City
            </Label>
            <InputBox
              value={profileData?.address?.city || ""}
              onChange={(e) => {
                handleChange("city", e.target.value);
              }}
              type="text"
              id={`city`}
              placeholder="city"
              className="w-full p-3 border border-zinc-300 rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-md" htmlFor={`pincode`}>
            Pincode
          </Label>
          <InputBox
            value={profileData?.address?.pincode || ""}
            onChange={(e) => {
              handleChange("pincode", e.target.value);
            }}
            type="text"
            id={`pincode`}
            placeholder="pincode"
            className="w-full p-3 border border-zinc-300 rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}

export default Location;
