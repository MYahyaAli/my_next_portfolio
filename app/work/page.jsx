"use client";

import { motion } from "framer-motion";
import React, { UseState, useState } from "react";
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
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "iCars-app",
    title: "AWS Project",
    description:
      "A car sale company wanted a mobile responsive platform for their clients to view the vehicles they want to purchase and also the web page has CRUD function for the admin to ADD new car, UPDATE and DELETE existing car details",
    stack: [
      { name: "Vite + React framework" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "AWS" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://icars-app.vercel.app/",
    // github: "https://github.com/MYahyaAli/icars-app",
  },
  {
    num: "02",
    category: "Angular Calculator",
    title: "Angular Project",
    description:
      "A fully functional mobile responsive calculator built using Angular and Tailwind.css",
    stack: [
      { name: "Angular" },
      { name: "Tailwind.css" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://angular-calculator-two.vercel.app/",
    // github: "https://github.com/MYahyaAli/asmr-ang-calc",
  },
  {
    num: "03",
    category: "User Data",
    title: "React Project",
    description:
      "This project is about how to display a list of user/users available on the database and also view their individual details seperately",
    stack: [{ name: "React.js" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    live: "https://spa-test-3cs.vercel.app/",
    // github: "https://github.com/MYahyaAli/spa-test-3cs",
  },
  {
    num: "04",
    category: "Myhive",
    title: "Website",
    description:
      "A fully functional informative react website, where the user can understand the company, also go throuhg thier services and reach out to them or book an appointment. The website is also connected to there own platform",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/myHive.png",
    live: "https://www.myhive.biz/",
    // github: "https://github.com/MYahyaAli/HiVE",
  },
  {
    num: "05",
    category: "Mk Ayurveda",
    title: "Website",
    description:
      "A fully functional informative next.js website. Where there new clients or customers can learn about them reach out to them or gather information about the treatments and cure available.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/mkAyur.png",
    live: "https://www.mkayur.lk/",
    // github: "https://github.com/MYahyaAli/mkAyur",
  },
];

const Work = () => {
  const [project, SetProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slider
    const currentIndex = swiper.activeIndex;
    // update project state based on current slider index
    SetProject(projects[currentIndex]);
  };

  return (
    <motion.section
      intial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project categories */}
              <h2
                className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60 ">{project.description}</p>
              {/* stack */}
              <ul className="grid grid-cols-2 xl:flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-wl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className=" flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
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

                {/* Github repo button 
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>*/}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center 
                    items-center bg-pink-50/20"
                    >
                      {/*overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
