import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaServer } from 'react-icons/fa';

function Expertise() {
  const expertiseItems = [
    {
      icon: FaLaptopCode,
      title: "Web Development",
      description: "Building responsive and interactive web applications using modern frameworks and technologies.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with Flutter and Dart for Android and iOS.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Designing and implementing efficient database schemas and solutions for various applications.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Developing robust server-side applications using .NET, Python, and Node.js.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id='expertise' className='py-20 md:py-24 lg:py-32 text-white' style={{ backgroundColor: '#030014' }}>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className='text-5xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>My Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className='p-6 rounded-lg text-center bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10'
              >
                <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-xl`}></div>
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
                <p className='text-gray-400'>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Expertise;