import React from "react";
import { FaRocket } from "react-icons/fa"; // Importing the rocket icon

function Contact() {
  return (
    <>
      <div className="w-full py-8 px-4">
        <div className=" text-center mb-6">
          <h1 className="text-3xl text-purple-600 font-bold mb-4">Email Me</h1>
          <p className="text-2xl text-white">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>
        <div className="w-3/4 m-auto border border-purple-600 bg-gray-800 p-6 rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
