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

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "mesofne flknvelnr aebciwbf sfjvneornewo sdkc skbqne sf vks caienfow cewjf jdsjacnonc ",
  },
];

import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return <div>projects page</div>;
};

export default Projects;
