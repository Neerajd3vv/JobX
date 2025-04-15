"use client";
import { redirect, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
export default function AuthErrorPage() {
  const params = useSearchParams();
  const error = params.get("error");
  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(decodeURIComponent(error));
      router.push("/");
    }
  }, [error]);
  return (
    <div className="flex justify-center h-screen items-center ">
      <Loader2 width={60} height={60} className="animate-spin text-blue-400" />
    </div>
  );
}
