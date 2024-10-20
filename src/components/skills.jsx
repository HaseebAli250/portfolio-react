import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiLaravel } from 'react-icons/si';

function Skills() {
  return (
    <>
      <div className="w-full py-8 px-4">
        <div className=" text-center mb-6">
          <h1 className="text-3xl text-purple-600 font-bold mb-4">Skills</h1>
          <p className="text-xl text-white">
            Here are some of my skills on which I have been working for the past
            3 years.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Front-end Skills */}
          <div className="w-full sm:w-1/2 p-4 ">
            <div className="bg-purple-800 rounded-lg p-6 border border-gray-800 shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-2 text-white">Front-end</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <FaHtml5 className="text-4xl text-orange-500 mb-2" />
                  <p className="text-gray-300">HTML</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <FaCss3Alt className="text-4xl text-blue-500 mb-2" />
                  <p className="text-gray-300">CSS</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <FaJsSquare className="text-4xl text-yellow-400 mb-2" />
                  <p className="text-gray-300">JavaScript</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <FaReact className="text-4xl text-cyan-400 mb-2" />
                  <p className="text-gray-300">React</p>
                </div>
              </div>
            </div>
          </div>
          {/* Back-end Skills */}
          <div className="w-full sm:w-1/2 p-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-purple-600 shadow-lg text-center">
              <h2 className="text-xl text-white font-semibold mb-2">Back-end</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <FaNodeJs className="text-4xl text-green-500 mb-2" />
                  <p className="text-gray-300">Node.js</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <SiLaravel className="text-4xl text-red-500 mb-2" />
                  <p className="text-gray-300">Laravel</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                  <FaReact className="text-4xl text-cyan-400 mb-2" />
                  <p className="text-gray-300">Express.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
