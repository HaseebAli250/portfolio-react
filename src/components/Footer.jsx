import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto text-center">
        {/* Footer Heading */}
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Haseeb Ali</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-purple-400 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-purple-400 transition duration-300">
            Skills
          </a>
          <a href="#" className="hover:text-purple-400 transition duration-300">
            Projects
          </a>
          <a href="#" className="hover:text-purple-400 transition duration-300">
            Experience
          </a>
          <a href="#" className="hover:text-purple-400 transition duration-300">
            Contact Us
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-white hover:text-purple-400 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-gray-400">
          <p>&copy; 2024 Haseeb Ali. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
