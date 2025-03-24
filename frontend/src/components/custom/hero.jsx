import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import InputBox from "./inputBox";

export default function Hero() {
  return (
    <section className=" py-20 md:py-28  w-full flex justify-center overflow-hidden ">
      <div className="">
        <div className="flex flex-col gap-4">
          <div className="text-center flex flex-col gap-4">
          <h1 className="text-4xl font-montserrat md:text-5xl lg:text-6xl font-bold tracking-tight">
            Find Your Dream Job Today
          </h1>
          <p className="text-lg font-poppins text-center text-zinc-500">
            Connect with top employers and discover opportunities across all
            industries.
          </p>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-4  p-4 rounded-lg shadow-md border-1 border-zinc-200 ">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2   h-5 w-5 " />

              <InputBox
                type="text"
                placeholder="Job title, keyword, or company"
                className="pl-10 pr-4 bg-white py-4  border border-zinc-400 rounded-lg w-full"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 " />

              <InputBox
                type="text"
                placeholder="Location or remote"
                className="pl-10 pr-4 py-4 text-base bg-white border border-zinc-400 rounded-lg w-full"
              />
            </div>
            <Button className="px-8 font-montserrat text-md h-auto bg-blue-700 hover:bg-blue-700/90">
              Search Jobs
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-600 font-poppins ">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2  rounded-full bg-green-500"></span>
              <span className="font-semibold font-montserrat">Popular :</span>
            </span>
            {["Remote", "Full-time", "Developer", "Marketing", "Design"].map(
              (tag) => (
                <button
                  key={tag}
                  className="bg-white cursor-pointer px-3 py-1 rounded-full border border-blue-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
