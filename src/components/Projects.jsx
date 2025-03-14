import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Ferme App",
      image: "public/static/images/eferme.webp", // Replace with your image path
      tech: "Flutter, Dart, Firebase, SQLite",
      description: "Developed a system to help farmers reduce resource wastage and increase crop yield with AI model integration."
    },
    {
      title: "Learning Management System",
      image: "public/static/images/elearning.jpg", // Replace with your image path
      tech: "C#, ASP.NET MVC, SQL Server",
      description: "Built a learning management system to make learning online more friendly and in one platform."
    },
    {
      title: "Walkie Talkie Application",
      image: "public/static/images/walkietalkie.avif", // Replace with your image path
      tech: "Flutter, Dart and Firebase",
      description: "Developed a mobile application that enables real time communication through a channel."
    },
    {
       title: "Distributed Chat Application",
       image: "public/static/images/chatapp.png", // Replace with your image path
       tech: "C#, Dart, Flutter, SQL Server",
       description: "Developed a distributed system with one app and multiple servers synchronized to enable seamless chatting even when one of the servers is down."
    },
    {
      title: "Movie App",
      image: "public/static/images/movies.jpg", // Replace with your image path
      tech: "C#, ASP.NET MVC, SQL Server",
      description: "Developed a mobile application that enables real time communication through a channel."
    }
  ];

  return (
    <section id="projects" className="py-12 text-white" style={{ backgroundColor: '#030014' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden" style={{backgroundColor: '#0d0014'}}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;