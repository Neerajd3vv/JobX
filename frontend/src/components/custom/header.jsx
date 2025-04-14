"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { X } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
function Header() {
  const [scrolledEnough, setScrolledEnough] = useState(false);

  const [hamMenu, setHamMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolledEnough(window.scrollY > 8);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrolledEnough(window.scrollY > 8);
      });
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setHamMenu(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div>
      <header className=" sticky top-0 z-50 px-4 md:px-8 pt-6 ">
        <div
          className={`${
            scrolledEnough
              ? "bg-[#faf9f5]/80 backdrop-blur-sm border border-zinc-300 transform transition-all shadow-sm duration-300 ease-out"
              : "bg-transparent"
          } flex h-20 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-10 rounded-lg border border-transparent`}
        >
          {/* <div className="flex items-center gap-2 font-bold text-xl"> */}
          <span className="font-montserrat font-bold text-2xl md:text-3xl lg:text-3xl transition-all cursor-pointer">
            JobX
          </span>
          {/* </div> */}

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-poppins text-zinc-700">
            <Link
              href="#"
              className="text-xs lg:text-sm font-medium hover:text-primary group relative whitespace-nowrap transition-all"
            >
              <span>Find Jobs</span>
              <span className="absolute right-0 h-0.5 bg-blue-700 w-0 -bottom-1 group-hover:left-0 group-hover:w-full transform transition-all duration-300"></span>
            </Link>
            <Link
              href="#"
              className="text-xs lg:text-sm font-medium hover:text-primary group relative whitespace-nowrap transition-all"
            >
              <span>Browse Companies</span>
              <span className="absolute right-0 h-0.5 bg-blue-700 w-0 -bottom-1 group-hover:left-0 group-hover:w-full transform transition-all duration-300"></span>
            </Link>
            <Link
              href="#"
              className="text-xs lg:text-sm font-medium hover:text-primary group relative whitespace-nowrap transition-all"
            >
              <span>For Employers</span>
              <span className="absolute right-0 h-0.5 bg-blue-700 w-0 -bottom-1 group-hover:left-0 group-hover:w-full transform transition-all duration-300"></span>
            </Link>
            {/* <Link href="#" className="text-sm font-medium hover:text-primary">
            Resources
          </Link> */}
          </nav>

          <div className="md:hidden flex items-center  space-x-6 sm:space-x-12 transition-all">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="default"
                  size="sm"
                  className="px-5 font-montserrat bg-blue-700 lg:px-8 py-4  border border-zinc-300 hover:bg-blue-700/90 hover:text-white hover:border-zinc-300 transition-all text-xs lg:text-sm"
                >
                  Login
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40 font-poppins">
                <DropdownMenuLabel>Sign in as</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => router.push("/signin?type=employer")}
                  className="cursor-pointer"
                >
                  Employer
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push("/signin?type=candidate")}
                  className="cursor-pointer"
                >
                  Candidate
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
            variant="outline"
            onClick={() => {
              setHamMenu(true);
            }}
            >
              <Menu
                
              />
            </Button>

            {/* <Image
              onClick={() => {
                setHamMenu(true);
              }}
              src={HamMenu}
              alt="ham menu"
              className=" w-5 h-5 md:w-7 md:h-7 cursor-pointer"
            /> */}
          </div>

          <div className="hidden md:flex items-center gap-4 font-poppins">
            <Button
              onClick={() => {
                router.push("/signin?type=employer");
              }}
              variant="outline"
              size="lg"
              className={`px-5 lg:px-8 border-1 border-zinc-300 hover:bg-[#2e1c2b] hover:text-white hover:border-zinc-300 transform transition-all duration-300 ease-in text-xs lg:text-sm`}
            >
              For Employer
            </Button>
            <Button
              onClick={() => {
                router.push("/signin?type=candidate");
              }}
              size="lg"
              className={` px-3 lg:px-5 bg-blue-700 text-xs lg:text-sm hover:bg-blue-700/90 transform transition-all duration-300 ease-in`}
            >
              Candidate
            </Button>
          </div>
        </div>
      </header>
      {hamMenu && (
        <>
          <div
            onClick={handleClose}
            className="fixed  inset-0 bg-black/50 z-50"
          />
          <div
            className={`fixed ${
              isClosing ? "slide-Out" : "slide-In"
            }   top-0 right-0 h-screen w-3/5 z-50 bg-white `}
          >
            <div className="p-5 flex flex-col h-full">
              <div className="flex justify-end mb-8">
                <X className="w-6 h-6 cursor-pointer" onClick={handleClose} />
              </div>

              <nav className="flex text-xl flex-col gap-5 pt-10 font-semibold font-montserrat">
                <Link
                  href="#"
                  className=" hover:bg-gray-100 rounded-md transition-colors flex justify-between items-center group relative"
                >
                  <div>
                    <span>Home</span>
                    <span className="absolute right-0 h-0.5 bg-blue-700 w-0 -bottom-1 group-hover:left-0 group-hover:w-full transform transition-all duration-300"></span>
                  </div>
                  <ArrowRight className="w-5 h-5 inline-block text-zinc-600" />
                </Link>
                <Link
                  href="#"
                  className=" hover:bg-gray-100 rounded-md transition-colors flex justify-between items-center group relative "
                >
                  <div>
                    <span>Jobs</span>
                    <span className="absolute right-0 h-0.5 bg-blue-700 w-0 -bottom-1 group-hover:left-0 group-hover:w-full transform transition-all duration-300"></span>
                  </div>
                  <ArrowRight className="w-5 h-5 inline-block text-zinc-600" />
                </Link>
                <Link
                  href="#"
                  className=" hover:bg-gray-100 rounded-md transition-colors  flex justify-between items-center group relative"
                >
                  <div>
                    <span>Companies</span>
                    <span className="absolute right-0 h-0.5 bg-blue-700 w-0 -bottom-1 group-hover:left-0 group-hover:w-full transform transition-all duration-300"></span>
                  </div>
                  <ArrowRight className="w-5 h-5 inline-block text-zinc-600" />
                </Link>
              </nav>

              <div className="mt-auto flex flex-col gap-4 mb-8 font-poppins">
                <Button
                  onClick={() => {
                    router.push("/signin?type=employer");
                  }}
                  variant="outline"
                  className="w-full py-6 border-zinc-300 hover:bg-[#2e1c2b] hover:text-white px-8 border-1 hover:border-zinc-300 transform transition-all duration-300 "
                >
                  For Employers
                </Button>
                <Button
                  onClick={() => {
                    router.push("/signin?type=candidate");
                  }}
                  className="w-full py-6 bg-blue-700 hover:bg-blue-700/90 transform transition-all duration-300 ease-in"
                >
                  For Employees
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
