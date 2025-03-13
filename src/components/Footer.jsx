import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Example icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-gradient-to-r from-blue-700 to-purple-950 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="mailto:enochgraham003@gmail.com" className="text-white hover:text-gray-300">
            <FaEnvelope className="h-6 w-6" />
          </a>
          <a href="https://github.com/graham005" className="text-white hover:text-gray-300">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/enoch-graham" className="text-white hover:text-gray-300">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <p>&copy; Enoch Graham {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;