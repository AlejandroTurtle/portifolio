import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import escritorio from "../../assets/escritorio.png";

const skills = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  {
    name: "Pacote Office",
    icon: escritorio,
  },
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },

  {
    name: "Lua",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
  },
];

function Skills() {
  return (
    <Box textAlign="center" py={10} overflow="hidden">
      <Heading size="lg" mb={6}>
        Minhas Skills
      </Heading>
      <Box width="full">
        <Marquee speed={150} pauseOnHover={true} gradient={false}>
          {skills.map((skill, index) => (
            <Box
              key={index}
              textAlign="center"
              mx={6}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image src={skill.icon} alt={skill.name} boxSize="50px" />
              <Text mt={2}>{skill.name}</Text>
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
}

export default Skills;
