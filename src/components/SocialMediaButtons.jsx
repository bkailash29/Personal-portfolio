import React from "react";
import { FaLinkedin, FaTwitter, FaGitHub } from "react-icons/fa"; // Icons from react-icons

const SocialMediaButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col space-y-3">
      <a href="https://www.linkedin.com/in/bkailash29/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600 transition">
        <FaLinkedin size={24} />
      </a>
      <a href="https://twitter.com/bkailash29" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600 transition">
        <FaTwitter size={24} />
      </a>
      <a href="https://github.com/bkailash29" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600 transition">
        <FaGitHub size={24} />
      </a>
    </div>
  );
};

export default SocialMediaButtons;