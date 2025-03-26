"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import InputBox from "../../components/custom/inputBox";
import googleLogo from "../../../public/images/Google__G__logo.svg.webp";
import Image from "next/image";
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
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      toast("Please fill all the fields");
      return;
    } else if (password.length < 6) {
      toast("Password should be atleast 6 characters long");
      return;
    } else if (name.length < 2) {
      toast("Name should be atleast 2 characters long");
      return;
    }
    setIsLoading(true);

    try {
      console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);

      const response = await fetch(
        `http://localhost:8383/v1/auth/signup/credentials`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        toast("Sign In to continue");
        router.push("/signin");
      } else if (data.message === "Validation Failed!") {
        toast("Pls give all info. pass min - 6 & name min - 2");
      } else if (data.message === "User already exists") {
        toast("User already exists");
      }
    } catch (error) {
      console.log("error", error);
      toast("Something went wrong");
    } finally {
      setIsLoading(false);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      await signIn("google", {
        callbackUrl: "/test",
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" h-screen flex flex-col gap-10 items-center justify-center">
      <h1 className="font-montserrat text-5xl text-center lg:text-4xl transition-all font-bold">
        Jobx
      </h1>

      <Card className="w-full max-w-lg mx-auto border-1 border-zinc-300 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-montserrat font-bold ">
            Create an Account
          </CardTitle>
          <CardDescription className="font-poppins text-md text-zinc-700 ">
            Enter your details below to sign up
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 font-poppins">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-md">
                Name
              </Label>
              <InputBox
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                className="w-full p-4 border-1 border-zinc-300 rounded-lg"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-md">
                Email
              </Label>
              <InputBox
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                className="w-full p-4 border-1 border-zinc-300 rounded-lg"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-md">
                Password
              </Label>
              <InputBox
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                className="w-full p-4 border-1 border-zinc-300 rounded-lg"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full font-poppins bg-blue-700 hover:bg-blue-700/90 transform transition-all duration-300 ease-in text-lg rounded-lg py-8"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="relative font-poppins">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="bg-background px-2 text-zinc-600">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            onClick={handleGoogleSignUp}
            variant="outline"
            disabled={isLoading}
            className="w-full py-8 font-poppins text-lg border border-zinc-300 rounded-lg"
          >
            <Image
              src={googleLogo}
              alt="Google Logo"
              className="w-8 h-8 mr-2"
            />
            Sign up with Google
          </Button>
        </CardContent>

        <CardFooter className="flex font-poppins flex-col items-center justify-center space-y-2">
          <div className="text-md text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-primary underline-offset-4 hover:underline"
            >
              Sign In
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
