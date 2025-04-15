"use client";
import InputBox from "../../components/custom/InputBox";
import { Label } from "../../components/ui/label";
import { useEmployeeContext } from "../../app/context";
import { useSession } from "next-auth/react";
export default function BasicInfo() {
  const { profileData, setProfileData } = useEmployeeContext();
  const { data: session } = useSession();
  const inputChange = (value, label) => {
    setProfileData((prev) => {
      const newBasicInfo = { ...prev.basicinfo, [label]: value };
      const updatedProfileData = { ...prev, basicinfo: newBasicInfo };
      return updatedProfileData;
    });
  };

  return (
    <div className=" flex flex-col mt-24 ">
      <div className="w-full max-w-2xl mx-auto  pb-10 space-y-6   ">
        <div className=" mb-6">
          <h2 className="text-4xl font-bold font-montserrat">Basic Info</h2>
        </div>
        {JSON.stringify(session?.user)}
        <form className="space-y-6 font-poppins">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-md">
              Full Name
            </Label>
            <InputBox
              value={profileData?.basicinfo?.name || ""}
              onChange={(e) => {
                inputChange(e.target.value, "name");
              }}
              id="name"
              className="w-full p-3 border-1 border-zinc-300 rounded-lg"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-md">
              Email Address
            </Label>
            <InputBox
              onChange={(e) => {
                inputChange(e.target.value, "email");
              }}
              value={profileData?.basicinfo?.email || ""}
              id="email"
              className="w-full p-3 border-1 border-zinc-300 rounded-lg"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-md">
              Phone Number
            </Label>
            <InputBox
              value={profileData?.basicinfo?.phone_number || ""}
              onChange={(e) => {
                inputChange(e.target.value, "phone_number");
              }}
              id="phone"
              className="w-full p-3 border-1 border-zinc-300 rounded-lg"
              type="tel"
              placeholder="9773765674"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
