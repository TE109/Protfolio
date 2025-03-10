import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {/* Hero Description */}
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-white">
            Hi there! I'm <span className="text-green-500 font-bold">Tomer </span>.  
            <br className="hidden lg:inline-block" /> Im passionate about learning and growing my skills 
          </h1>
          <p className="my-8 leading-relaxed text-2xl">
            A motivated and enthusiastic recent entrant to the professional world
            eager to use knowledge and skills gained in the achedmic environment at George Browns Computer Programming and Analysis.
            Hard-working and dedicated person with excellent interpersonal skills. 
            Hoping to pursue employment with a successful company that believes in hands-on learning
          </p>

          {/* Buttons */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              View Projects
            </a>
          </div>
        </div>
        {/* Hero image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}