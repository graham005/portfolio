import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/graham005", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/enoch-graham", label: "LinkedIn" },
    { icon: FaTwitter, url: "#", label: "Twitter" }
  ];

  const footerLinks = [
    { text: "Home", url: "#hero" },
    { text: "About", url: "#expertise" },
    { text: "Skills", url: "#skills" },
    { text: "Projects", url: "#projects" },
    { text: "Contact", url: "#contact" }
  ];

  return (
    <footer className="relative pt-20 pb-10 text-white" style={{ backgroundColor: '#152840' }}>
      {/* Wavy Divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none w-full">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-16 text-[#152840]"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#2E9AA6] to-[#4C428C] bg-clip-text text-transparent">Enoch Graham</h3>
            <p className="text-gray-400 mb-6">Software engineer specializing in building exceptional digital experiences and applications.</p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1a3a52] flex items-center justify-center text-white hover:bg-[#2E9AA6] transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-[#2E9AA6] transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Nairobi, Kenya</li>
              <li>enochgraham003@outlook.com</li>
              <li>+254 790 482 014</li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to my newsletter for updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-[#1a3a52] border border-[#2E9AA6]/30 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2E9AA6] focus:border-transparent text-white w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#2E9AA6] text-white rounded-r-lg hover:bg-[#4C428C] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <motion.button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2E9AA6] to-[#4C428C] flex items-center justify-center text-white absolute right-8 top-0 transform -translate-y-1/2 hover:shadow-lg hover:shadow-[#2E9AA6]/30 transition-all duration-300"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
        
        <div className="pt-6 mt-3 border-t border-[#2E9AA6]/20 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {new Date().getFullYear()} Enoch Graham.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;