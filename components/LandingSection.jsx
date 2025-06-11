import { Avatar } from "@chakra-ui/react";
const LandingSection = () => {
  const bio = {
    name: "Serge Toure",
    title: "Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=9",
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
      <section className="landing" id="landing">
        <div>
          <Avatar.Root size="2xl">
            <Avatar.Fallback name={bio.name} />
            <Avatar.Image src={bio.avatar} />
          </Avatar.Root>
        </div>
        <h1 style={{color:"white"}}>I am a {bio.title}</h1>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            lineHeight: "1.6",
            fontWeight: "300",
            color: "#555",
            marginTop: "10px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
          }}
        >
          {bio.description}
        </h2>
      </section>
    </>
  );
};

export default LandingSection;
