"use client";

import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { X } from "lucide-react";
import InputBox from "../../components/custom/InputBox";
import googleLogo from "../../../public/images/Google__G__logo.svg.webp";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRoleContext } from "../../app/context";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

export default function SignIn({ setIsSignInClicked, setIsSignUpClicked }) {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { role } = useRoleContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast("Please fill all the fields");
      return;
    }

    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        role,
      });

      if (result.ok) {
        // router.push("/profile")
      } else if (result?.error) {
        if (result.error === "Password is incorrect") {
          toast("Password is incorrect");
        } else if (result.error === "User not found with such email") {
          toast("No user with such email");
        } else if (
          (result.error = `Registered as ${
            role === "candidate" ? "recruiter" : "candidate"
          }`)
        ) {
          setIsSignInClicked(false);
          toast.error(
            `Please SignIn as ${
              role === "candidate" ? "recruiter" : "candidate"
            }`
          );
        }
      }
    } catch (error) {
      toast("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const providerId =
        role === "recruiter" ? "google-recruiter" : "google-candidate";
      await signIn(providerId, {
        callbackUrl: "/profileCompletion/basicinfo",
      });
    } catch (error) {
      toast("Server Error");
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status === "loading") return;
    if (session?.user) {
      if (session.user.role === "employee") {
        router.push("/profileCompletion/basicinfo");
      } else {
        router.push("/profileEmployer");
      }
    }
  }, [session]);

  return (
    <div className=" h-screen flex flex-col gap-10 items-center justify-center ">
      {/* <h1 className="font-montserrat text-5xl text-center lg:text-4xl transition-all font-bold">
        Jobx
      </h1> */}

      <Card className="w-full max-w-lg mx-auto border-1 border-zinc-300 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl flex items-center justify-between font-montserrat font-bold  ">
            <h2>Welcome Back</h2>
            <Button
              onClick={() => {
                setIsSignInClicked(false);
              }}
              variant="ghost"
            >
              <X />
            </Button>
          </CardTitle>
          <CardDescription className="font-poppins text-md text-zinc-700">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 font-poppins">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-md">
                Email
              </Label>
              <InputBox
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                className="w-full p-3 border-1 border-zinc-300 rounded-lg"
                placeholder="neerajwdev@google.com"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm sm:text-md">
                  Password
                </Label>
                <Link
                  href="#"
                  className=" text-xs sm:text-sm text-primary underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <InputBox
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                className="w-full p-3 border-1 border-zinc-300 rounded-lg"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full font-montserrat bg-blue-700 hover:bg-blue-700/90 transform transition-all duration-300 ease-in text-lg rounded-lg py-7"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="relative font-poppins">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm uppercase">
              <span className="bg-background  px-2 text-zinc-600">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            disabled={isLoading}
            variant="outline"
            className="w-full py-7 font-montserrat text-lg border border-zinc-300 rounded-lg "
            onClick={handleGoogleSignIn}
          >
            <Image
              src={googleLogo}
              alt="Google Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
            />
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter className="flex font-poppins  flex-col items-center justify-center space-y-2">
          <div className="text-sm sm:text-md text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="#"
              onClick={() => {
                setIsSignInClicked(false);
                setIsSignUpClicked(true);
              }}
              className="text-primary underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
