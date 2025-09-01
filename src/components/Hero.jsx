import React, { useEffect, useRef } from 'react';
import backgroundImage from '../assets/images.jpg';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import ParticleBackground from './ParticleBackground';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Hero() {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['SOFTWARE ENGINEER.', 'BACK-END DEVELOPER.', 'APP DEVELOPER.'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });
    
    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/graham005", color: "hover:text-gray-400" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/enoch-graham", color: "hover:text-blue-400" },
    { icon: FaTwitter, url: "#", color: "hover:text-blue-500" },
  ];

  return (
    <section id='hero' className='relative flex text-white justify-center items-center h-screen overflow-hidden' style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), #030014), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <ParticleBackground />
      
      <div className='container mx-auto text-center px-4 z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <motion.div 
            className="w-50 h-50 mx-auto rounded-full overflow-hidden mb-6"
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 1, borderRadius: "100%" }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.5 
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
              <img className='h-full w-full' src="/static/images/profile.png" alt="EG" />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='font-bold mb-5 text-4xl md:text-6xl lg:text-8xl xl:text-[100px] leading-tight md:leading-snug lg:leading-normal xl:leading-[120px] bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          ENOCH GRAHAM
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'
          style={{ fontFamily: 'Roboto Mono, monospace' }}
        >
          I'M A <span ref={typedRef}></span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <a 
            href="#projects" 
            className="relative overflow-hidden group bg-transparent border-2 border-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:h-full -z-10"></span>
            View My Work
          </a>
          
          <a 
            href="#contact" 
            className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-10 flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-2xl ${social.color} transition-all duration-300`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;