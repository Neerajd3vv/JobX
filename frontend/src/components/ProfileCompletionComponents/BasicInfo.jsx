import { Button } from "../../components/ui/button";
import InputBox, { Input } from "../../components/custom/InputBox";
import { Label } from "../../components/ui/label";

export default function BasicInfo() {
  return (
    <div className=" flex flex-col mt-24  ">
      <div className="w-full max-w-2xl mx-auto pb-10 space-y-6   ">
        <div className=" mb-10">
          <h2 className="text-4xl font-bold font-montserrat">Basic Info</h2>
        </div>

        <form className="space-y-6 font-poppins">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-md">
              Full Name
            </Label>
            <InputBox
              id="name"
              className="w-full p-4 border-1 border-zinc-300 rounded-lg"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-md">
              Email Address
            </Label>
            <InputBox
              id="email"
              className="w-full p-4 border-1 border-zinc-300 rounded-lg"
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
              id="phone"
              className="w-full p-4 border-1 border-zinc-300 rounded-lg"
              type="tel"
              placeholder="9773765674"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
