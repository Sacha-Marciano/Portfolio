"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiGooglecloud,
  SiMui,
  SiShadcnui,
  SiGithub,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

// about data

const about = {
  title: "About me",
  description:
    "I’m a 26-year-old passionate developer, happily married with a newborn and a dog named Puma. Since graduating, I've dedicated myself to creating projects that not only help me grow but also make a positive impact on others. Coding has become my outlet for focus and creativity—there’s something deeply satisfying about building something from scratch and seeing the results unfold right before my eyes.Outside of coding, I enjoy playing soccer, paddle, and spending time with friends and family over board games and cards. I believe in maintaining a balanced lifestyle, where my hobbies fuel my creativity and keep me energized for the challenges of development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sacha Mordekhai Marciano",
    },
    {
      fieldName: "Phone",
      fieldValue: "+972 53-708-0183",
    },
    {
      fieldName: "Email",
      fieldValue: "momarciano26@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Israeli, French",
    },
    {
      fieldName: "Languages",
      fieldValue: "Hebrew, French, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/Experience.png",
  title: "My experience",
  description: `Tri-lingual Electronics Engineer turned full-stack developer. I bring a strong foundation in engineering 
standards and am skilled in front-end and back-end development. I am driven by the classic expression : "If you love your work, then you'll never work a day in your life"`,
  items: [
    {
      company: "TripleTen",
      position: "Senior Student Mentor",
      duration: "11/2024 - present",
    },
    {
      company: "The W.I.S.E foundation",
      position: "Full Stack Developer",
      duration: "11/2024 - present",
    },
    {
      company: "HP",
      position: "Machine Leader",
      duration: "05/2022 - 11/2024",
    },
    {
      company: "HP",
      position: "RnD Integration Engineer",
      duration: "11/2021 - 11/2024",
    },
    {
      company: "HP - Experis",
      position: "Fly/Field Integration Engineer",
      duration: "03/2021 - 11/2021",
    },
    {
      company: "IDF",
      position: "Fire Control Technician",
      duration: "06/2018 - 03/2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/Education.png",
  title: "My education",
  description:
    "I began my journey in electronics engineering as part of the prestigious Technological 'Atuda' program, which grants access to elite units within the IDF. Over six years, I gained extensive hands-on experience across a broad range of engineering disciplines. Driven by a passion for deepening my expertise, I chose to specialize in full-stack development, with the goal of mastering this dynamic field and leveraging my engineering background to create innovative, impactful solutions.",
  items: [
    {
      institution: "TripleTen Academy",
      degree: "Full Stack Developer",
      duration: "08/2021 - 11/2024",
    },
    {
      institution: "Ort Hermelin, Netanya",
      degree: "Electronics engineering",
      duration: "08/2016 - 06/2018",
    },
    {
      institution: "B. Ostrovsky, Ra'anana",
      degree: "High School Diploma",
      duration: "09/2013 - 06/2016",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Through the TripleTen bootcamp and my own natural curiosity, I have gained a solid foundation in a variety of technologies. I am passionate about expanding my expertise in the areas I have already explored, while continually learning and staying up-to-date with new advancements every day.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud Platform",
    },
    {
      icon: <FaAws />,
      name: "Amazon Web Services",
    },
    {
      icon: <SiMui />,
      name: "Material UI",
    },
    {
      icon: <SiShadcnui />,
      name: "Shadcn UI",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className=" flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600]px text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}{" "}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName} </span>
                        <span className="text-xl">{item.fieldValue} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
