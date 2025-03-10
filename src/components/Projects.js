import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Web projects I have built using various skills and technologies. <br></br>
            Visit my <a className="inline font-bold text-green-500 hover:text-malibu-700" href="https://github.com/TE109">GitHub</a> to view additional projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Capstone Details Section */}

        <h3 className="mt-10 text-white text-xl font-semibold mb-2">IRES Electronic Receptionist Capstone Project</h3>
        <div className="mt-10 text-white grid grid-cols-4 gap-6 justify-items-center">
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">Project Summary</h4>
            <a
              href="/pdfs/COMP3059-F24-Project_Summary.pdf"
              target="_blank"
              className="text-blue-400 underline"
            >
              IRES Project Summary (PDF)
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">Project Vision</h4>
            <a
              href="/pdfs/COMP3059-F24-Project Vision Team 2.pdf"
              target="_blank"
              className="text-blue-400 underline"
            >
              IRES Project Vision (PDF)
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">Project Plan</h4>
            <a
              href="/pdfs/COMP3059-F24-Team2-IRES_Project Plan.pdf"
              target="_blank"
              className="text-blue-400 underline"
            >
              IRES Project Plan (PDF)
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">Requirements Analysis and Design</h4>
            <a
              href="/pdfs/COMP3059-Team2-F24-IRES-Requirements Analysis and Design.pdf"
              target="_blank"
              className="text-blue-400 underline"
            >
              IRES Requirements Analysis and Design (PDF)
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">Wireframes/Mockups</h4>
            <a
              href="https://www.figma.com/design/wfgChMTvw90RngjHYlP2ga/IRES?node-id=0-1&p=f&t=lAhh9AiRy7lqVhYP-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              IRES Mockup (External Link)
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">Status Reports</h4>
            <a
              href="/pdfs/T2_IRES_ProjectStatusReport1 (2).pdf"
              target="_blank"
              className="text-blue-400 underline"
            >
              IRES Project Status Report I (PDF)
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">System Implementation Backend</h4>
            <a
              href="https://github.com/TE109/Capstone-Backend.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              GitHub Back End Project
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">System Implementation Frontend</h4>
            <a
              href="https://github.com/TE109/mobileAppGroupAssinment.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline mt-4 block"
            >
              GitHub Front End Project
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}