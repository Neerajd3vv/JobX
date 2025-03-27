import BasicInfo from "../../../components/ProfileCompletionComponents/BasicInfo";
import Experience from "../../../components/ProfileCompletionComponents/Experience";
import Location from "../../../components/ProfileCompletionComponents/Location";
import Resume from "../../../components/ProfileCompletionComponents/ResumeUpload";
import Skills from "../../../components/ProfileCompletionComponents/Skills";
import Socials from "../../../components/ProfileCompletionComponents/Socials";
async function ProfileCompletion({ params }) {
  const step = (await params).step;
  // switch case for the different form to render
  const renderFrom = () => {
    switch (step) {
      case "basicinfo":
        return <BasicInfo />;
      case "experience":
        return <Experience />;
      case "location":
        return <Location />;
      case "resume":
        return <Resume />;
      case "skills":
        return <Skills />;
      case "socials":
        return <Socials />;
    }
  };

  return <div>{renderFrom()}</div>;
}

export default ProfileCompletion;
