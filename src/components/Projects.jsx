import React, { useState } from 'react';
import { Motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Financial Management System",
      image: "/static/images/financialmgmt.png",
      tech: "Flutter, Dart, C#, .NET, SQL Server",
      category: "desktop",
      description: "A desktop financial management system for tracking income, expenses, budgets, and generating financial reports. Built with Flutter for the desktop UI and .NET for the backend API.",
      githubUrl: [
        { label: "Frontend", url: "https://github.com/graham005/Financial-Management-Frontend" },
        { label: "Backend", url: "https://github.com/graham005/Financial-Management-Backend" }
      ],
      liveUrl: ""
    },
    {
      title: "MedDash",
      image: "/static/images/meddash.png",
      tech: "TypeScript, React, NestJs, PostgreSQL",
      category: "web",
      description: "A healthcare system to simplify the process of booking and managing of appointments, creating, managing and ordering prescriptions, and requesting for emergency services.",
      githubUrl: "https://github.com/graham005/MedDash-frontend",
      liveUrl: "https://med-dash-frontend-ubl1.vercel.app"
    },
    {
      title: "Expense Tracker API",
      image: "/static/images/expensetracker.png",
      tech: "TypeScript, NestJs, PostgreSQL",
      category: "backend",
      description: "A backend API for tracking personal and business expenses. Features include user authentication, expense categorization, reporting, and analytics to help users manage their finances efficiently.",
      githubUrl: "https://github.com/graham005/expense-tracker-NestJs",
      liveUrl: "https://expense-tracker-nestjs-docker.onrender.com/api"
    },
    {
      title: "E-Ferme App",
      image: "/static/images/eferme.webp",
      tech: "Flutter, Dart, Firebase, SQLite",
      category: "mobile",
      description: "A system to help farmers reduce resource wastage and increase crop yield with AI model integration. Features include crop monitoring, weather forecasting, and pest detection.",
      githubUrl: "https://github.com/graham005/eferme_app",
      liveUrl: ""
    },
    {
      title: "Movie App",
      image: "/static/images/movies.jpg",
      tech: "C#, ASP.NET MVC, SQL Server",
      category: "web",
      description: "A movie recommendation system that uses machine learning algorithms to suggest movies based on user preferences and viewing history.",
      githubUrl: "https://github.com/graham005/MovieBox",
      liveUrl: ""
    },
    {
      title: "Chat Application",
      image: "/static/images/chatapp.png",
      tech: "C#, Dart, Flutter, SQL Server",
      category: "web",
      description: "Real-time chat application with features like user authentication, private messaging, group chats, and message notifications.",
      githubUrl: "https://github.com/graham005/Distributed-Chat-App",
      liveUrl: ""
    },
    {
      title: "E-Learning Platform",
      image: "/static/images/elearning.jpg",
      tech: "C#, ASP.NET MVC, SQL Server",
      category: "web",
      description: "A comprehensive e-learning platform with courses, quizzes, progress tracking, and certificate generation for completed courses.",
      githubUrl: "https://github.com/graham005/LMS",
      liveUrl: ""
    },
    {
      title: "Walkie Talkie App",
      image: "/static/images/walkietalkie.avif",
      tech: "Flutter, Dart, WebRTC, Firebase",
      category: "mobile",
      description: "A mobile application that allows users to communicate like a walkie-talkie with push-to-talk functionality and group channels.",
      githubUrl: "https://github.com/graham005/walkie_talkie_app",
      liveUrl: ""
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className="py-14 sm:py-20 md:py-24 lg:py-32 text-white relative" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Background glow effects */}
      <div className="absolute top-40 right-40 w-80 h-80 bg-[var(--primary)] rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-40 left-40 w-80 h-80 bg-[var(--accent)] rounded-full filter blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent sm:text-4xl lg:text-5xl">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mb-8"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group rounded-xl overflow-hidden cursor-pointer bg-[var(--muted)]/50 backdrop-blur-sm border border-[var(--primary)]/20 hover:border-[var(--primary)]/50 transition-all duration-300 shadow-lg hover:shadow-[var(--primary)]/10"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-44 sm:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-sm text-gray-300">{project.tech}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors duration-300 sm:text-xl">{project.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-4 sm:text-base">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-[var(--primary)]/20 text-[var(--primary)] rounded-full text-xs capitalize">{project.category}</span>
                  <button className="text-sm text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;