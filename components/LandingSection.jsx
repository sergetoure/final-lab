import { Avatar } from "@chakra-ui/react";
const LandingSection = () => {
  const bio = {
    name: "Serge Toure",
    title: "Software Engineer",
    avatar: "https://bit.ly/dan-abrahmov",
    description:
      "I am a software engineer with a passion for building scalable web applications and working with modern technologies. I love to learn new things and share my knowledge with others.",
    skills: ["JavaScript", "React", "Node.js", "Python", "Django"],
    contact: {
      email: "serge.toure@eviatech.com",
      phone: "+1234567890",
      linkedin: "https://www.linkedin.com/in/serge-toure",
      github: "https://github.com/serge-toure",
    },
  };
  return (
    <>
      <section className="landing" id="landing"></section>
    </>
  );
};

export default LandingSection;
