import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* Skills Header */}
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-4xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
            Skills and technologies I have implemented in previous projects.
          </p>
        </div>

        {/* Skills List */}
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Section */}
        <div className="mt-10 text-white flex justify-center items-center flex-col">
          <h3 className="text-xl font-semibold mb-2">IRES Electronic Receptionist Capstone Project</h3>
          <h4 className="text-lg font-medium mb-4">Project Summary</h4>
          <a
            href="/pdfs/COMP3059-F24-Project_Summary.pdf"
            target="_blank"
            className="text-blue-400 underline"
          >
            IRES Project Summary (PDF)
          </a>

          <h4 className="text-lg font-medium mt-6 mb-4">Project Vision</h4>
          <a
            href="/pdfs/COMP3059-F24-Project Vision Team 2.pdf"
            target="_blank"
            className="text-blue-400 underline"
          >
            IRES Project Vision (PDF)
          </a>

          <h4 className="text-lg font-medium mt-6 mb-4">Project/Business Requirements</h4>
          <h4 className="text-lg font-medium mt-6 mb-4">Project Plan</h4>
          <a
            href="/pdfs/COMP3059-F24-Team2-IRES_Project Plan (2).pdf"
            target="_blank"
            className="text-blue-400 underline"
          >
            IRES Project Plan (PDF)
          </a>

          <h4 className="text-lg font-medium mt-6 mb-4">Requirements Analysis and Design</h4>
          <a
            href="/pdfs/COMP3059-Team2-F24-IRES-Requirements Analysis and Design.pdf"
            target="_blank"
            className="text-blue-400 underline"
          >
            IRES Requirements Analysis and Design (PDF)
          </a>

          <h4 className="text-lg font-medium mt-6 mb-4">Wireframes/Mockups</h4>
          <a
            href="https://www.figma.com/design/wfgChMTvw90RngjHYlP2ga/IRES?node-id=0-1&p=f&t=lAhh9AiRy7lqVhYP-0"
            target="_blank"
            className="text-blue-400 underline"
          >
            IRES Mockup (External Link)
          </a>

          <h4 className="text-lg font-medium mt-6 mb-4">Status Reports</h4>
          <a
            href="/pdfs/T2_IRES_ProjectStatusReport1 (2).pdf"
            target="_blank"
            className="text-blue-400 underline"
          >
            IRES Project Status Report I (PDF)
          </a>

          <h4 className="text-lg font-medium mt-6 mb-4">System Implementation</h4>
          <a
            href="https://github.com/TE109/Capstone-Backend.git"
            target="_blank"
            className="text-blue-400 underline"
          >
            GitHub Back End Project
          </a>
          <a
            href="https://github.com/TE109/mobileAppGroupAssinment.git"
            target="_blank"
            className="text-blue-400 underline mt-4 block"
          >
            GitHub Front End Project
          </a>
        </div>
      </div>
    </section>
  );
}
