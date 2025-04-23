"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

import emailjs from "emailjs-com";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useEffect } from "react";

const Home = () => {
  const sendEmail = async () => {
    try {
      const result = await emailjs.send(
        "service_pfayipm",
        "template_yelg8a6",
        {},
        "YiQoeruumw6dSzKRI"
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    sendEmail();
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* texts */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> Full Stack Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Sacha Marciano</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at creating full stack applications using various
              technologies for front and back ends. I am dedicated to creating
              helpful scalable projects that'll have an impact on society.
            </p>

            {/* social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase">
                <Link
                  href={"./assets/resume/resume.pdf"}
                  download
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photos */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
