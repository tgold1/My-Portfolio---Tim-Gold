import React from "react";

export default function About () {
    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Tim.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          For the past eleven years I have been working in the non-profit sector. The highlight for me has been the
        ability to meet people from all across the globe. The decision was made to shift my career to a passion
        of mine coding. Specifically to learn web development and receive training in HTML, CSS, and JavaScript.
        This is why I chose to enroll in the full-stack bootcamp to gain valuable training and experience in the
        deployment of webpages.<br/>
        <br/>
        The experience I have gained over the years is demonstrated in my leadership
        ability, teaching others, being able to collaborate well wtih a team, a passion to fulfill the mission, and the trust to complete the
        task. I am a family man with a wife, and two sons living in the Philadelphia area. I have the drive to succeed
        and I look forward to being a part of the world of web development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Selfimage.jpg"
          />
        </div>
      </div>
    </section> 
    )
}