"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import InputBox from "../custom/InputBox";
import { PlusCircle, Trash2 } from "lucide-react";
import GitHub from "../../../public/images/GitHub-Logo.wine.svg";
import X from "../../../public/images/X.jpg";
import Linkedin from "../../../public/images/linkedin.png";
import Instagram from "../../../public/images/Instagram.jpg";
import Globe from "../../../public/images/globe.png";
import Youtube from "../../../public/images/youtube.svg";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useEmployeeContext } from "../../app/context";
import { Label } from "../ui/label";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function Socials() {
  const socialPlatforms = [
    { id: "linkedin", name: "LinkedIn", icon: Linkedin },
    { id: "github", name: "GitHub", icon: GitHub },
    { id: "X", name: "X", icon: X },
    { id: "instagram", name: "Instagram", icon: Instagram },
    { id: "website", name: "Website", icon: Globe },
    { id: "youtube", name: "Youtube", icon: Youtube },
  ];

  const { profileData, setProfileData } = useEmployeeContext();
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");

  const handlSave = (id, platform, link) => {
    setProfileData((prev) => {
      const newSocials = prev.socials.map((item) =>
        item.id === id ? { ...item, platform, link } : item
      );
      const newProfileData = { ...prev, socials: newSocials };
      return newProfileData;
    });
  };

  const handleSocilaRemove = (id) => {
    setProfileData((prev) => {
      const newSocials = prev.socials.filter((item) => item.id !== id);
      const newProfileData = { ...prev, socials: newSocials };
      return newProfileData;
    });
  };

  const handleAddSocial = () => {
    setProfileData((prev) => {
      const newSocials = [
        ...prev.socials,
        {
          id: Date.now().toString(36) + Math.random().toString(36),
          platform: "",
          link: "",
        },
      ];
      const newProfileData = { ...prev, socials: newSocials };
      return newProfileData;
    });
  };

  return (
    <div className="mt-24 w-full max-w-2xl  mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-10 font-montserrat">
          Add social profile
        </h2>
        <p className="font-poppins">
          Share links to your online profile such as Linkedin
        </p>
      </div>
      <div className="space-y-4 font-poppins">
        {profileData?.socials.map((item) => (
          <form
            key={item.id}
            onSubmit={(e) => {
              e.preventDefault();
              handlSave(item.id, item.platform, item.link);
            }}
          >
            <Card className="border border-gray-200 p-4">
              <CardContent className="p-0">
                <div className=" flex-col sm:flex sm:flex-row space-y-3 sm:space-y-0 items-center gap-2">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor={`platform-${item.id}`} className="mblock">
                      Platform
                    </Label>
                    <div>
                      <Select
                        onValueChange={(value) => {
                          setProfileData((prev) => ({
                            ...prev,
                            socials: prev.socials.map((social) =>
                              social.id === item.id
                                ? { ...social, platform: value }
                                : social
                            ),
                          }));
                        }}
                        value={item.platform}
                      >
                        <SelectTrigger className=" py-6">
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          {socialPlatforms.map((item) => (
                            <SelectItem value={item.id} key={item.id}>
                              <div className="flex items-center gap-2">
                                <Image
                                  src={item.icon}
                                  alt={item.name}
                                  className="w-5 h-5"
                                />
                                <span>{item.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex-[3] space-y-2">
                    <Label htmlFor={`link-${item.id}`} className="">
                      Link
                    </Label>
                    <div className="flex items-center gap-2">
                      <InputBox
                        onChange={(e) => {
                          setProfileData((prev) => ({
                            ...prev,
                            socials: prev.socials.map((social) =>
                              social.id === item.id
                                ? { ...social, link: e.target.value }
                                : social
                            ),
                          }));
                        }}
                        className="w-full p-3 border border-zinc-300 rounded-lg"
                        id={`link-${item.id}`}
                        placeholder="https://"
                        type="url"
                        value={item.link}
                      />

                      {profileData.socials.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => handleSocilaRemove(item.id)}
                          className="h-10 w-10 rounded-full"
                          aria-label="Remove social profile"
                        >
                          <Trash2 className="h-5 w-5 text-destructive" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        ))}
        <Button
          onClick={handleAddSocial}
          type="button"
          variant="outline"
          className="w-full font-poppins"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add another
        </Button>
      </div>
    </div>
  );
}

export default Socials;
