import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Book, CircleUser } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { BriefcaseBusiness, Bookmark, UserRound, MoveLeft } from "lucide-react";

function HeaderTwo() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <header className=" pt-6">
      <div className="px-3 sm:px-4 md:px-6 h-20  lg:px-10 flex justify-between items-center">
        <span
          onClick={() => {
            router.push("/");
          }}
          className="font-montserrat cursor-pointer font-bold text-2xl md:text-3xl lg:text-3xl transition-all"
        >
          JobX
        </span>

        <nav className="hidden sm:flex items-center text-zinc-700 text-xs lg:text-sm font-medium  space-x-24  font-poppins">
          <div className="flex items-center space-x-5 ">
            <Link href="/jobs" className="hover:text-primary relative group">
              <span>Browse Jobs</span>
              <div className="absolute w-0 h-0.5 bg-blue-700 right-0 group-hover:w-full group-hover:left-0 -bottom-1 transform transition-all duration-300" />
            </Link>
            <Link href="/saved " className="hover:text-primary relative group">
              <span>Saved Jobs</span>
              <div className="absolute w-0 h-0.5 bg-blue-700 right-0 group-hover:w-full group-hover:left-0 -bottom-1 transform transition-all duration-300" />
            </Link>
            <Link href="/profile" className="hover:text-primary relative group">
              <span>Profile</span>
              <div className="absolute w-0 h-0.5 bg-blue-700 right-0 group-hover:w-full group-hover:left-0 -bottom-1 transform transition-all duration-300" />
            </Link>
          </div>
          <Button variant="outline" className="text-black text-sm lg:text-md">
            Logout
          </Button>
        </nav>
        <div className="flex items-center space-x-6 sm:hidden">
          <Button
            variant="outline"
            size={"sm"}
            className="text-black flex items-center    text-sm lg:text-md hover:text-red-600 hover:bg-red-100 transition-colors duration-200"
          >
            <MoveLeft className="mr-2 h-4 w-4" />
            <span className="leading-none">Logout</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src={`${session?.user?.image}`} />
                <AvatarFallback className="bg-slate-100 border-2 text-sm font-medium border-zinc-300 font-poppins">
                  {(session?.user?.name || "GUEST").slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="font-poppins w-50">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                <Link href="">Browse Jobs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bookmark className="mr-2 h-4 w-4" />
                <Link href="">Saved Jobs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserRound className="mr-2 h-4 w-4" />
                <Link href="">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className=" font-semibold font-montserrat">
                <MoveLeft className="mr-2 " />
                <Link href="/" className="text-red-500 hover:text-red-600">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default HeaderTwo;
