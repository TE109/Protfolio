import React from "react";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    e.target.reset(); // Clears the form
    alert("sending Message")
    try {
      await fetch("https://formsubmit.co/edelmantomer323@gmail.com", {
        method: "POST",
        body: formData,
      });
      
    } catch (error) {
      alert("Error submitting form: " + error);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.7942245860545!2d-79.44700052408919!3d43.79788277109566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c4b24d8697d%3A0xe9c4fbc5acee31c!2s35%20Esther%20Crescent%2C%20Thornhill%2C%20ON%20L4J%203J8!5e0!3m2!1sen!2sca!4v1739630820894!5m2!1sen!2sca"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">35 Esther Crescent <br /> Thornhill, ON L4J 3J8</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 leading-relaxed">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-400 leading-relaxed">edelmantomer323@gmail.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">416-702-5141</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} 
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        netify>
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">Hire Me</h2>
          <p className="leading-relaxed mb-5">
            As a recent graduate with a degree in Computer Science, 
            I am eager to apply my knowledge and skills in software development and problem-solving. <br></br>
            I have spent the last few years not only mastering fundamental concepts 
            but also gaining hands-on experience in areas such as Backend functinality, Database development.
            </p>
          <input type="hidden" name="_captcha" value="false" />
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
          </div>
          <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </form>
      </div>
    </section>
  );
}
