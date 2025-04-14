import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useEmployeeContext } from "../../app/context";
function SkillPicker() {
  const { profileData, setProfileData } = useEmployeeContext();
  const skills = [
    // 💻 Programming & Web
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Git",
    "REST APIs",
    "GraphQL",
    "Redux",
    "Docker",

    // 🧪 Testing & DevOps
    "Jest",
    "Cypress",
    "Playwright",
    "CI/CD",
    "GitHub Actions",
    "AWS",
    "Firebase",
    "Vercel",
    "Netlify",

    // 🎨 Design
    "Figma",
    "Adobe XD",
    "UI/UX Design",
    "Responsive Design",

    // 🧠 Soft Skills
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Critical Thinking",

    // 📱 Mobile
    "React Native",
    "Flutter",

    // 💼 Job-Related
    "Agile Methodology",
    "Scrum",
    "Project Management",
    "SEO",
    "Content Writing",
  ];

  const [addedSkills, setAddedSkills] = useState([]);

  useEffect(() => {
    if (profileData?.skills) {
      const skills = profileData.skills.map((skill) => skill.name);
      setAddedSkills(skills);
    }
  }, [profileData?.skills]);

  const handleSkillSelected = (skill) => {
    setProfileData((prev) => {
      const newSkill = {
        id: Date.now().toString(36) + Math.random().toString(36),
        name: skill,
      };
      const newSkillsArray = [...prev.skills, newSkill];
      const updatedProfileData = { ...prev, skills: newSkillsArray };
      return updatedProfileData;
    });
  };

  return (
    <div className="border font-poppins p-4 max-h-[300px] overflow-y-auto rounded-lg border-zinc-200  space-y-4 mt-5">
      <p className="text-gray-700">Want to add any of skills from below ? </p>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index}>
            <Button
              onClick={() => {
                handleSkillSelected(skill);
                setAddedSkills((prev) => [...prev, skill]);
              }}
              disabled={addedSkills && addedSkills.includes(skill)}
              variant="outline"
              className={`w-full justify-start gap-2 ${
                addedSkills && addedSkills.includes(skill)
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
            >
              <Plus size={16} />
              <span className="text-sm font-medium">{skill}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillPicker;
