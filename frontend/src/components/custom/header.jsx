"use client";
import React, { useEffect, useState } from "react";
import HamMenu from "../../../public/images/ham_menu.png";
import Avatar from "../../../public/images/avartar_placeholder.png";
import Link from "next/link";
import { X } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  });

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setHamMenu(false);
      setIsClosing(false);
    }, 300); // Match transition duration
  };

  return (
    <div>
      <header className="sticky top-0 z-50 px-3 sm:px-4 md:px-8 lg:px-12 pt-6 ">
        <div
          className={`${
            scrolledEnough
              ? "bg-[#faf9f5]/80 backdrop-blur-sm border border-zinc-300 transform transition-all shadow-sm duration-300 ease-out"
              : "bg-transparent"
          } flex h-20 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-10 rounded-lg border border-transparent`}
        >
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="font-montserrat text-2xl md:text-3xl lg:text-4xl transition-all">
              JobX
            </span>
          </div>

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
          <div className="md:hidden flex items-center  space-x-7 transition-all">
            <Image
              src={Avatar}
              alt="avatar"
              className="w-7 h-7 rounded-full cursor-pointer"
            />

            <Image
              onClick={() => {
                setHamMenu(true);
              }}
              src={HamMenu}
              alt="ham menu"
              className="w-7 h-7 cursor-pointer"
            />
          </div>

          <div className="hidden md:flex items-center gap-4 font-poppins">
            <Button
            onClick={(e) => {
              router.push("/signin");
            }}
              variant="outline"
              size="lg"
              className="px-8 border-1 border-zinc-300 hover:bg-[#2e1c2b] hover:text-white hover:border-zinc-300 transform transition-all duration-300 ease-in text-xs lg:text-sm"
            >
              Sign In
            </Button>
            <Button
            onClick={(e) => {
              router.push("/signup");
            }}
              size="lg"
              className="bg-blue-700 text-xs lg:text-sm hover:bg-blue-700/90 transform transition-all duration-300 ease-in"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>
      {hamMenu && (
        <>
          <div
            onClick={() => {
              setHamMenu(false);
            }}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <div className="fixed top-0 right-0 h-screen w-3/5 z-50 bg-white">
            <div className="p-5 flex flex-col h-full">
              <div className="flex justify-end mb-8">
                <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setHamMenu(false)}
                />
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
                    router.push("/signin");
                  }}
                  variant="outline"
                  className="w-full border-zinc-300 hover:bg-[#2e1c2b] hover:text-white px-8 border-1 hover:border-zinc-300 transform transition-all duration-300 "
                >
                  Sign In
                </Button>
                <Button
                  onClick={(e) => {
                    router.push("/signup");
                  }}
                  className="w-full bg-blue-700 hover:bg-blue-700/90 transform transition-all duration-300 ease-in"
                >
                  Sign Up
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
