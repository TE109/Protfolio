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

                        <h4 className="text-xl mt-4">Counselor - Chef Upstairs, Toronto, ON (June 2022 to August 2022)</h4>
                        <ul className="list-disc pl-5">
                            <li>Assisted in food prep, teaching, and organization</li>
                            <li>Supported campers and maintained cleanliness</li>
                        </ul>

                        <h4 className="text-xl mt-4">Line Cook - Dr. Laffa, Ontario (September 2021 to January 2022)</h4>
                        <ul className="list-disc pl-5">
                            <li>Prepared ingredients and assisted in food preparation</li>
                            <li>Maintained kitchen appliances and cleaned dishes</li>
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
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-green-500">Cover Letter</h2>
                        <p className="leading-relaxed text-xl mt-4">Dear [Hiring Manager],</p>
                        <p className="leading-relaxed text-xl mt-2">
                            I am writing to express my interest in the Software Developer position. With a solid foundation in computer science from George Brown College and a diverse skill set, I am eager to contribute my abilities to your team. The skills I honed from my past experiences have given me the ability to manage time effectively, follow detailed instructions, and utilize my computer skills, which I believe prepare me well for the technical challenges in software development. In addition to my expertise in Java, MySQL, JavaScript, and HTML, I possess strong interpersonal skills, adaptability, and a keen attention to detail—qualities that are crucial for succeeding in dynamic tech environments. My time at George Brown College further solidified my technical foundation, equipping me with both theoretical and practical knowledge in software engineering. I am particularly drawn to this opportunity as it allows me to leverage my technical skills in a meaningful way. I am hard-working, dedicated, and enthusiastic about the possibility of contributing to your team and growing professionally.
                        </p>
                        <p className="leading-relaxed text-xl mt-2">Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to your team.</p>
                        <p className="leading-relaxed text-xl mt-2">Sincerely,</p>
                        <p className="leading-relaxed text-xl mt-2">Tomer Edelman</p>
                    </section>

                    {/* Career Goal Section */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-green-500">Statement of Career Goal</h2>
                        <p className="leading-relaxed text-xl mt-4">
                            I would like to contribute to innovative projects by adding unique experiences, such as ..., and understanding how to simplify complex ideas to allow them to reach wider audiences.
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
