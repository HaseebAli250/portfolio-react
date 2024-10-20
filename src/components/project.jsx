import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

function Project() {
  return (
    <div id="projects" className="p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl text-purple-500 font-bold">Projects</h1>
        <p className="text-xl text-gray-300">
          I have worked on a wide range of projects. Here are some of my
          products.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-700 p-6 rounded-lg shadow-lg">
          <img
            src={project1}
            alt="Infomatic Media"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-lg text-purple-300 mt-2">Infomatic Media</h2>
          <p className="text-gray-400">
            A brief description of Infomatic Media.
          </p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 bg-purple-700 p-6 rounded-lg shadow-lg">
          <img
            src={project2}
            alt="Constructor"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-lg text-purple-300 mt-2">Constructor</h2>
          <p className="text-gray-400">A brief description of Constructor.</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-700 p-6 rounded-lg shadow-lg">
          <img
            src={project4}
            alt="Cavalier Login Setup"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-lg text-purple-300 mt-2">Cavalier Login Setup</h2>
          <p className="text-gray-400">
            A brief description of Cavalier Login Setup.
          </p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 bg-purple-700 p-6 rounded-lg shadow-lg">
          <img
            src={project3}
            alt="Konstic"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-lg text-purple-300 mt-2">Konstic</h2>
          <p className="text-gray-400">A brief description of Konstic.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
