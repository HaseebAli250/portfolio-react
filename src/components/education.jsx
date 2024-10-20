import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="flex flex-col items-center min-h-screen relative"
    >
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl text-white font-bold mb-4 md:text-5xl">
          Education
        </h1>
        <p className="text-lg text-gray-400 md:text-xl">
          Here is the data about my education
        </p>
      </div>
      <div
        className="absolute h-full border-l-2 border-white"
        style={{
          left: "50%",
          top: "20%",
          height: "75%",
        }}
      ></div>
      <div className="flex flex-col items-center space-y-16 mt-12 relative z-10">
        <div className="relative w-80 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400"></div>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl text-purple-400 font-semibold mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-400">Iqra University Chak Shahzad Campus</p>
            <p className="text-gray-500">Expected Graduation: 2028</p>
          </div>
        </div>

        <div
          className="absolute w-2 h-24 bg-transparent"
          style={{ left: "50%", transform: "translateX(-50%)", top: "40%" }}
        ></div>

        <div className="relative w-80 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400"></div>
          <div className="bg-purple-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl text-purple-400 font-semibold mb-2">
              Higher Secondary School Certificate (FSc)
            </h3>
            <p className="text-gray-400">Govt. Degree College (Fatehpur)</p>
            <p className="text-gray-500">Graduated: 2024</p>
          </div>
        </div>

        <div
          className="absolute w-2 h-24 bg-transparent"
          style={{ left: "50%", transform: "translateX(-50%)", top: "40%" }}
        ></div>

        <div className="relative w-80 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400"></div>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl text-purple-400 font-semibold mb-2">
              Secondary School Certificate (Matric)
            </h3>
            <p className="text-gray-400">Allama Iqbal Public High School</p>
            <p className="text-gray-500">Graduated: 2022</p>
          </div>
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
}

export default Education;
