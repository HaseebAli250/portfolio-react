import React from "react";
import img from "../assets/haseeb.jpg";

function Portfolio() {
  return (
    <div
      id="about"
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-8"
    >
      <div className="md:w-1/2 w-full text-white text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I am </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-500">
          Haseeb Ali
        </h1>
        <h2 className="text-2xl md:text-4xl mt-2 font-semibold">
          Full Stack Developer
        </h2>
        <p className="mt-4 text-gray-400">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning, I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
          Check Resume
        </button>
      </div>

      <div className="md:w-1/2 w-full flex justify-center md:justify-end">
        <img
          src={img}
          alt="Haseeb Ali"
          className="rounded-full border-4 border-purple-600 w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
        />
      </div>
    </div>
  );
}

export default Portfolio;
