import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import Projects from '../Data/Projects';

const gradientBackgrounds = [
  "from-[#2C3E50] to-[#3498DB]",
  "from-[#4A148C] to-[#FF6F00]",
  "from-[#1A2980] to-[#26D07C]",
  "from-[#0F2027] to-[#203A43]",
  "from-[#16222A] to-[#3A6073]",
];

const ProjectsPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#6A11CB]"
      >
        Personal Projects
      </motion.h1>

      <div className="space-y-10">
        {Projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            className={`
              bg-gradient-to-br ${gradientBackgrounds[index % gradientBackgrounds.length]} 
              rounded-2xl p-7 shadow-2xl border-2 border-opacity-20 border-white
              transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
            `}
          >
            <div className="flex items-center mb-5">
              <Code className="text-white mr-4" size={32} strokeWidth={2} />
              <div>
                <h2 className="text-3xl font-bold text-white drop-shadow-md">
                  {project.title}
                </h2>
              </div>
            </div>
            
            <ul className="space-y-3 text-white/90">
              {project.description.map((desc, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <span className="mr-3 text-[#4A90E2] mt-1">▸</span>
                  <span>{desc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;