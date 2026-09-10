"use client";

import CountUp from "react-countup";
import { getYearsExperience } from "@/lib/experience";

const Stats = ({ commits, projectsCount, technologiesCount }) => {
  const stats = [
    {
      num: getYearsExperience(),
      text: "Years of experience",
    },
    {
      num: projectsCount,
      text: "Projects Completed",
    },
    {
      num: technologiesCount,
      text: "Technologies mastered",
    },
    {
      num: commits,
      text: "Code commits",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:mx-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-start justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={2}
                  delay={0.3}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
