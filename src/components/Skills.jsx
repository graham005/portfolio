import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "C#", level: 85, icon: "devicon-csharp-plain colored" },
          { name: "Dart", level: 80, icon: "devicon-dart-plain colored" },
          { name: "TypeScript", level: 85, icon: "devicon-typescript-plain colored" },
          { name: "JavaScript", level: 80, icon: "devicon-javascript-plain colored" },
          { name: "SQL", level: 70, icon: "devicon-mysql-plain colored" },
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: ".NET", level: 90, icon: "devicon-dotnetcore-plain colored" },
        { name: "Flutter", level: 75, icon: "devicon-flutter-plain colored" },
        { name: "React", level: 80, icon: "devicon-react-original colored" },
        { name: "Node.js", level: 70, icon: "devicon-nodejs-plain colored" },
        { name: "NestJs", level: 75, icon: "devicon-nestjs-plain" },
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git", level: 85, icon: "devicon-git-plain colored" },
        { name: "Docker", level: 70, icon: "devicon-docker-plain colored" },
        { name: "Firebase", level: 80, icon: "devicon-firebase-plain colored" },
        { name: "VS Code", level: 90, icon: "devicon-vscode-plain colored" },
        { name: "GitHub", level: 85, icon: "devicon-github-original" },
      ]
    }
  ];


  return (
    <section id="skills" className="py-20 md:py-24 lg:py-32 text-white relative overflow-hidden" style={{ backgroundColor: '#152840' }}>
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#2E9AA6] rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#4C428C] rounded-full filter blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-r from-[#2E9AA6] to-[#4C428C] bg-clip-text text-transparent">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2E9AA6] to-[#4C428C] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a3a52]/50 backdrop-blur-sm border border-[#2E9AA6]/20 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-[#2E9AA6]">{category.name}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className="flex items-center mb-2">
                      <i className={`${skill.icon} text-2xl mr-3`}></i>
                      <span className="text-lg font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-[#2E9AA6] to-[#4C428C]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 right-0 -bottom-2 h-0.5 bg-gradient-to-r from-[#2E9AA6] to-[#4C428C]"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;