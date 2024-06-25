"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "As a full-stack web developer, I specialize in creating robust, scalable, and user-friendly websites and applications.",
      // I have the tools and experience to deliver top-notch results.
    href: "/contact",
  },
  {
    num: "02",
    title: "SEO",
    description:
      "I offer comprehensive SEO services designed to enhance your online visibility and drive organic traffic to your website.",
      // My SEO strategies helped these brands achieve prominent rankings in search engine results, leading to significant growth in organic traffic and conversions.
    href: "/contact",
  },
  {
    num: "03",
    title: "Content Optimization",
    description:
      "I specialize in optimizing various types of content to enhance visibility, engagement, and conversion rates.",
      // Achieved increased traffic and enhanced user engagement through optimized product descriptions and landing pages.
    href: "/contact",
  },
  {
    num: "04",
    title: "UI/UX",
    description:
      "Creating intuitive and visually appealing user interfaces is key to ensuring a positive user experience. My approach to UI/UX design is User-Centered, Simplicity and Clarity, Consistency.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group "
                key={index}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent 
                  group-hover:text-outline-hover transition-all duration-500"
                  >
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white 
                    group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[42px] font-bold leading-none text-white 
                group-hover:text-accent transition-all duration-500"
                >
                  {services.title}
                </h2>
                <p className="text-white/60">
                {services.description}
                </p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
