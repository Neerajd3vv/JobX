"use client"
import HeaderTwo from "../../components/custom/HeaderTwo";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
 function Layout({ children }) {
  const {step} = useParams()
  return (
    <div className="px-4 md:px-8">
      {children}
      <NavigationButton currentStep={step} />
    </div>
  );
}

export default Layout;

function NavigationButton({ currentStep }) {
  const router = useRouter();
  const forms = [
    "basicinfo",
    "experience",
    "location",
    "skills",
    "socials",
    "resume",
  ];

  const index = forms.indexOf(currentStep);

  return (
    <div className="w-full max-w-2xl  mx-auto my-10">
      <div className="flex justify-between font-montserrat">
      {index > 0 && (
        <Button
          onClick={() => {
            router.push(`/profileCompletion/${forms[index - 1]}`);
          }}
          size="lg"
          variant="outline"
          className="py-5 text-lg "
        >
          Previous
        </Button>
      )}
      {index < forms.length - 1 ? (
        <Button
          onClick={() => {
            router.push(`/profileCompletion/${forms[index + 1]}`);
          }}
          size="lg"
          variant="default"
          className="py-5 text-lg bg-blue-700 hover:bg-blue-700/90 "
        >
          Next
        </Button>
      ) : (
        <Button size="lg" variant="default" className="py-5 text-lg ">
          Submit
        </Button>
      )}
    </div>
    </div>
  );
}
