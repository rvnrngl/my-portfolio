import React from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { UseIsMobile } from "./UseIsMobile";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaStar } from "react-icons/fa";

export const WorkExperience = () => {
  const { isMobile } = UseIsMobile();
  return (
    <>
      <div className="w-screen relative">
        <div className="lg:opacity-90 opacity-50"></div>
        <section
          id="experience"
          className="w-full max-w-[1240px] lg:h-fit py-8 mx-auto px-6 font-khand flex justify-center items-center"
        >
          <div className="container mx-auto grid grid-cols-1 gap-y-2">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold lg:font-bold uppercase leading-[1] mb-4 flex justify-center items-center gap-1 lg:gap-2 cursor-default">
                <span className="inline-flex">
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    W
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    O
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    R
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    K
                  </h1>
                </span>
                <span className="inline-flex">
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    E
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    X
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    P
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    E
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    R
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    I
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    E
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    N
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    C
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    E
                  </h1>
                </span>
              </h2>
            </motion.div>
            <VerticalTimeline lineColor="#f9bc60">
              <VerticalTimelineElement
                className="vertical-timeline-element--work bg-transparent"
                contentStyle={{ background: "#abd1c6" }}
                iconStyle={{
                  background: "#003140",
                  color: "#e16162",
                }}
                icon={<FaBriefcase />}
                date="2024 - present"
                dateClassName="text-xl text-paragraph"
              >
                <h3 className="text-btn-text-color text-3xl font-bold">
                  Junior Full-Stack Developer
                </h3>
                <h4 className="text-btn-text-color text-xl font-bold">
                  VCT Network and Data Solutions
                </h4>
                <ul className="list-disc text-btn-text-color text-lg pl-7">
                  <li>
                    Trusted by the company and development supervisor to
                    independently manage and develop a project.
                  </li>
                  <li>
                    Collaborated with QA and development supervisor to identify
                    bugs, integrate features, and deploy updates.
                  </li>
                  <li>
                    Coordinated with external developers to integrate third
                    party API in our project.
                  </li>
                  <li>Documented the project’s API technical documentation.</li>
                  <li>
                    Participated in strategy sessions and contributing
                    suggestions.
                  </li>
                  <li>
                    Created queries and stored procedures to optimize database
                    performance and data retrieval.
                  </li>
                  <li>
                    Exposed to multiple projects in a fast-paced environment
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work bg-transparent"
                contentStyle={{ background: "#abd1c6" }}
                iconStyle={{
                  background: "#003140",
                  color: "#e16162",
                }}
                icon={<FaBriefcase />}
                date="2023"
                dateClassName="text-xl text-paragraph"
              >
                <h3 className="text-btn-text-color text-3xl font-bold">
                  Intern
                </h3>
                <h4 className="text-btn-text-color text-xl font-bold">
                  Cavite State University - CCAT Campus
                </h4>
                <ul className="list-disc text-btn-text-color text-lg pl-7">
                  <li>
                    Maintaining and organizing student data in campus website
                    database.
                  </li>
                  <li>Retrieving and updating student records in database.</li>
                  <li>Data Encoding using Microsoft Excel</li>
                  <li>
                    Addressing student queries and concerns via phone or in
                    person.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work bg-transparent"
                iconStyle={{
                  background: "#003140",
                  color: "#e16162",
                }}
                icon={<FaStar />}
              />
            </VerticalTimeline>
          </div>
        </section>
      </div>
    </>
  );
};
