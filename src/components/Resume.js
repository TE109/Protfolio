import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    {/* Resume Section Title */}
                    <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-white">
                        <span className="text-green-500 font-bold">Resume</span>
                    </h1>


                    {/* Previous Experiences */}
                    <h3 className="text-2xl font-semibold text-green-500">Previous Experiences</h3>
                    <div className="mt-4">
                        <h4 className="text-xl">Assistant Counselor - Steam Camp, Vaughan, ON (July 2018)</h4>
                        <ul className="list-disc pl-5">
                            <li>Assisted in setting up activities</li>
                            <li>Supported participants and explained concepts to Campers</li>
                        </ul>
                    </div>

                    {/* Education Section */}
                    <h3 className="text-2xl font-semibold text-green-500 mt-8">Education</h3>
                    <div className="mt-4">
                        <h4 className="text-xl">Computer Science - George Brown College (January 2023 to April 2025)</h4>
                        <h4 className="text-xl mt-4">Secondary School - Thornhill Secondary School (September 2018 to June 2022)</h4>
                    </div>

                    {/* Skills Section */}
                    <div className="mt-4">
                        <h4 className="text-2xl font-semibold text-green-500 mt-8">Technical Skills</h4>
                        <ul className="list-disc pl-5">
                            <li>HTML, CSS, JavaScript</li>
                            <li>React, Node.js, MongoDB</li>
                            <li>Git, Docker</li>
                        </ul>

                        <h4 className="text-2xl font-semibold text-green-500 mt-8">Additional Skills</h4>
                        <ul className="list-disc pl-5">
                            <li>Time management</li>
                            <li>Eagerness to learn</li>
                            <li>Adaptability</li>
                        </ul>
                    </div>

                    {/* Cover Letter Section */}
                    {/* <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-green-500">Cover Letter</h2>

                        <p className="leading-relaxed text-xl mt-4">To Whom It May Concern,</p>
                        <p className="leading-relaxed text-xl mt-2">
                            I am writing to express my interest in the Software Developer position. With a strong foundation in computer science from George Brown College and a diverse set of technical skills, I am eager to contribute my expertise to your team. Throughout my academic and professional experiences, I have developed the ability to manage time effectively, follow detailed instructions, and leverage my technical knowledge to tackle complex challenges.
                        </p>
                        <p className="leading-relaxed text-xl mt-2">
                            My proficiency in Java, MySQL, JavaScript, and HTML, coupled with my adaptability and strong interpersonal skills, positions me well to thrive in dynamic and fast-paced tech environments. In addition, my attention to detail and problem-solving abilities enable me to consistently deliver high-quality work. My education at George Brown College has provided me with both theoretical and practical knowledge in software engineering, further enhancing my technical acumen.
                        </p>
                        <p className="leading-relaxed text-xl mt-2">
                            I am particularly drawn to this opportunity because it will allow me to apply my skills in a meaningful way, while also offering the chance for professional growth. I am dedicated, hardworking, and enthusiastic about the prospect of joining your team and making a valuable contribution.
                        </p>
                        <p className="leading-relaxed text-xl mt-2">
                            Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experiences align with your team's needs.
                        </p>
                        <p className="leading-relaxed text-xl mt-2">Sincerely,</p>
                        <p className="leading-relaxed text-xl mt-2">Tomer Edelman</p>

                    </section> */}

                    {/* Career Goal Section */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-green-500">Statement of Career Goal</h2>
                        <p className="leading-relaxed text-xl mt-4">
                            I would like to contribute to innovative projects by adding my unique experiences,<br>
                            </br> teaching STEM (Science, Technology, Engineering, and Math),my strong communication skills,<br></br> and my ability to simplify complex concepts to engage so as to connect with broader audiences.
                        </p>
                    </section>

                    {/* Academic Awards Section  */}
                    {/* Academic Awards Section */}
                    <div id="AcademicCredential" className="mt-8">
                        <h2 className="text-2xl font-semibold text-green-500 ">Academic Awards</h2>
                        <ul className="list-disc pl-5 mt-4">
                            <li>Fall 2024 Dean's List - George Brown College</li>
                            <li>Fall 2023 Dean's List - George Brown College</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;
