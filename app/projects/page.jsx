"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

//components
import ProjectSliderButtons from "@/components/ProjectSliderButtons";
const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Paul",
    description:
      "Paul is an AI-powered document management platform that helps users organize, search, and understand their documents more intelligently. Built with a modern serverless architecture using AWS Amplify, MongoDB Atlas, and Vertex AI, Paul leverages advanced LLMs and vector embeddings to classify, deduplicate, and retrieve documents by relevance. Users can upload Google Docs into collaborative “rooms,” where smart tagging, foldering, and chat-based question answering provide a seamless knowledge discovery experience.",
    stack: [
      { name: "Next.js" },
      { name: "MongoDB Atlas" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
      { name: "Python" },
      { name: "Gemini 2.0" },
      { name: "FastAPI" },
      { name: "GCP" },
    ],
    image: "/assets/projects/Paul/Paul.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Wavehub",
    description:
      "WaveHub is a live-streaming platform I helped build, featuring real-time beach camera feeds, VOD playback, and downloadable clips. I was involved in both the front-end and back-end development, ensuring smooth video delivery, responsive UI, and efficient handling of multiple camera streams. The platform provides surfers and beachgoers with up-to-date conditions and easy access to past footage.",
    stack: [
      { name: "Next.js" },
      { name: "MongoDB Atlas" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
      { name: "WowzaStreamingEngine" },
      { name: "AWS" },
    ],
    image: "/assets/projects/Wavehub/Wavehub.png",
    live: "https://wavehub.co.il/",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "The Voices",
    description: `This website was custom made for Stephane, the founder of the Voices, an entertainment company present in the events scene for more than 12 years. I coded the entire website in 36 hours, during a flight to Argentina. This webiste helps Stephane and his company get new leads every day`,
    stack: [
      { name: "React" },
      { name: "Vite" },
      { name: "Tailwind" },
      { name: "EmailJS" },
      { name: "Javascript" },
    ],
    image: "/assets/projects/TheVoices/The-voices.png",
    live: "https://the-voices.vercel.app",
    github: "https://github.com/Sacha-Marciano/the_voices",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "W.I.S.E. Foundation",
    description:
      "I designed and developed the official website for the W.I.S.E. Foundation as part of a team of five full-stack developers, using Next.js, Tailwind CSS, and TypeScript to deliver a responsive and accessible experience. The site amplifies the foundation’s mission to empower women economically and build purpose-driven communities. In addition to the website, I led the development of a custom Learning Management System (LMS) to support their educational initiatives, which is also featured in my portfolio. This project highlights my ability to collaborate effectively and deliver impactful, scalable digital solutions.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Typescript" },
    ],
    image: "/assets/projects/WISE/WISE.png",
    live: "https://www.wisefdn.org/",
    github: "",
  },
  {
    num: "05",
    category: "Full Stack",
    title: "LMS",
    description: `This Learning Management System (LMS) offers a flexible structure that can be easily customized to meet a wide range of requirements. It provides features for instructors to add and edit courses, while students can purchase and access courses seamlessly.`,
    stack: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "ShadcnUI" },
      { name: "Javascript" },
    ],
    image: "/assets/projects/LMS/LMS.png",
    live: "",
    github: "https://github.com/Sacha-Marciano/LMS",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Google Flights Search",
    description: `This project was built for a job application assignment (passed successfully) and will find the chepeast, fastest or best flights over all airlines, which makes it better than the most popular flights search engines that works with only specific airlines.`,
    stack: [
      { name: "React" },
      { name: "Vite" },
      { name: "RapidAPI" },
      { name: "MaterialUI" },
      { name: "Javascript" },
    ],
    image: "/assets/projects/GoogleFS/GoogleFS.png",
    live: "",
    github: "https://github.com/Sacha-Marciano/google-flights-sim",
  },
  {
    num: "07",
    category: "Frontend",
    title: "UI/UX Designer Portfolio",
    description: `Built with the power of Next.js, this sleek portfolio website is your window into my professional journey.
    Explore my projects, skills, and achievements, all presented in a dynamic and modern design.
    Seamlessly navigate through a showcase of my expertise and career milestones.
    This site isn’t just a portfolio—it’s a statement of passion, creativity, and dedication!`,
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/projects/UIUXPortofolio/UIUXPortofolio.png",
    live: "https://edenjf.vercel.app/",
    github: "https://github.com/Sacha-Marciano/uiux_portfolio",
  },
  {
    num: "08",
    category: "Frontend",
    title: "Portfolio",
    description: `Built with the power of Next.js, this sleek portfolio website is your window into my professional journey.
    Explore my projects, skills, and achievements, all presented in a dynamic and modern design.
    Seamlessly navigate through a showcase of my expertise and career milestones.
    This site isn’t just a portfolio—it’s a statement of passion, creativity, and dedication!`,
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/projects/Portfolio/Portfolio.png",
    live: "/",
    github: "https://github.com/Sacha-Marciano/Portfolio",
  },
  {
    num: "09",
    category: "Full Stack",
    title: "Helpeat",
    description: `Discover, create, and share delicious recipes while connecting with a community of food lovers.
    Effortlessly plan your weekly meals by adding favorites to your personalized schedule.
    Simplify shopping with a smart grocery list generated from your meal plan.
    Helpeat makes cooking, planning, and sharing recipes easy and enjoyable!`,
    stack: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "Javascript" },
    ],
    image: "/assets/projects/Helpeat/Helpeat.png",
    live: "https://helpeat.jumpingcrab.com",
    github: "https://github.com/Sacha-Marciano/HelpEat_frontend",
  },

  {
    num: "10",
    category: "Full Stack",
    title: "WTWR",
    description: `WTWR is a smart weather app where functionality meets security and style!
I built the frontend and my first-ever REST API, complete with user authentication, to fetch real-time weather from WeatherAPI.
The app suggests clothing based on the weather and the user’s clothes collection.
This forecast app is your next personalized wardrobe assistant!`,
    stack: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "Javascript" },
    ],
    image: "/assets/projects/WeatherApp/WTWR.png",
    live: "",
    github: "https://github.com/Sacha-Marciano/se_project_react",
  },
  {
    num: "11",
    category: "Frontend",
    title: "Around the U.S",
    description: `Around the US is an Instagram-like app inspired by Jacques Cousteau’s incredible adventures!
Explore and admire stunning images of the most beautiful places he’s visited.
Users can add their own pictures, edit captions, and like their favorite posts.
It’s a celebration of exploration, creativity, and breathtaking destinations!`,
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "Javascript" },
      { name: "REST API" },
    ],
    image: "/assets/projects/InstagramLike/Around.png",
    live: "",
    github: "https://github.com/Sacha-Marciano/se_project_aroundtheus",
  },
  {
    num: "12",
    category: "Frontend",
    title: " Coffee Shop Menu",
    description: `This vibrant landing page brings your favorite coffee shop experience online!
Explore the menu, watch embedded YouTube videos showcasing the best recipes, and place orders seamlessly with our custom form.
Designed to be visually appealing and user-friendly, it’s perfect for coffee lovers everywhere.`,
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/projects/Coffeeshop/Coffeeshop.png",
    live: "",
    github: "https://github.com/Sacha-Marciano/se_project_coffeeshop",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* project info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="flex  text-4xl xl:text-8xl leading-none font-extrabold">
                {project.num} {project.title}
              </div>
              {/* project category */}
              <h2 className="xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description} </p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project */}
                {project.live !== "" ? (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  ""
                )}
                {/* github project */}
                {project.github !== "" ? (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <ProjectSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
