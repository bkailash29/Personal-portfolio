import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center p-4 absolute bottom-0 text-white">
      <p>© {new Date().getFullYear()} Kailash Balachandiran. All rights reserved.</p>
    </footer>
  );
};

export default Footer;