"use client";
import { useState } from "react";
import InputBox from "../custom/InputBox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
function Location() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="mt-24 w-full max-w-2xl  mx-auto">
      <h2 className="text-4xl font-bold mb-10 font-montserrat">
        Add your address
      </h2>

      <div className="gap-4 font-poppins space-y-6">
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
          <Label className="text-md" htmlFor={`state`}>
            Street address
          </Label>
          <InputBox
            onChange={(e) => {
              handleChange(currentExp.id, "state", e.target.value);
            }}
            type="text"
            id={`state`}
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
              onChange={(e) => {
                handleChange(currentExp.id, "state", e.target.value);
              }}
              type="text"
              id={`state`}
              placeholder="state"
              className="w-full p-3 border border-zinc-300 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-md" htmlFor={`state`}>
              City
            </Label>
            <InputBox
              onChange={(e) => {
                handleChange(currentExp.id, "state", e.target.value);
              }}
              type="text"
              id={`state`}
              placeholder="city"
              className="w-full p-3 border border-zinc-300 rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-md" htmlFor={`state`}>
            Pincode
          </Label>
          <InputBox
            onChange={(e) => {
              handleChange(currentExp.id, "state", e.target.value);
            }}
            type="text"
            id={`state`}
            placeholder="pincode"
            className="w-full p-3 border border-zinc-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Location;
