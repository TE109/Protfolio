import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

export default function App() {
  return (
    <main className="text-gray-300 bg-gray-900 body-font bg-stardust">
      <Navbar />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}