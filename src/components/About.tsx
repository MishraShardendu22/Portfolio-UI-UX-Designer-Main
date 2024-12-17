import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Download, Target } from 'lucide-react';
import Info from '../Data/Info';
import Professional_Summary from '../Data/ProfessionalSummary';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleResumeDownload = () => {
    const filePath = 'src/VasiniProfile.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Vasini_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-[#60a5eb] via-[#1e71ec] to-[#D1D9E6]  min-h-screen">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#4A90E2] to-[#50C878] text-white px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-6 md:space-y-0 md:space-x-12">
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-white/30 relative transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://github.com/ShardenduMishra22/Portfolio-UI-UX-Designer/blob/main/src/VasiniProfile.png?raw=true" 
                alt="Vasini Singh Profile" 
                className="w-full h-full object-cover"
              />
              </div>
              <div className="text-center md:text-left max-w-xl">
                <h1 className="text-5xl font-extrabold mb-3 text-white drop-shadow-md">
                  Vasini Singh
                </h1>
                <p className="text-xl text-white/90 mb-3 font-medium">
                  UI/UX Designer | Creative Technologist
                </p>
                <p className="text-base text-white/80 leading-relaxed">
                  Transforming complex design challenges into intuitive, visually stunning digital experiences that tell a compelling story.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Professional Summary */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#4A90E2] border-b border-gray-200 pb-3">
                {Professional_Summary.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                {Professional_Summary.content}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "User-Centered Design",
                  "Responsive Interface Creation",
                  "Design Systems Development",
                  "Interactive Prototyping"
                ].map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 text-gray-700 bg-gray-100 p-3 rounded-xl shadow-sm hover:bg-gray-200 transition-all"
                  >
                    <Target size={20} className="text-[#4A90E2] flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
                className="flex items-center space-x-3 bg-gradient-to-r from-[#4A90E2] to-[#50C878] text-white px-6 py-3 rounded-full hover:opacity-90 transition-colors group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Contact & Location Sections */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#4A90E2] border-b border-gray-200 pb-3">
                  Contact
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: Info.email, type: 'email' },
                    { icon: Phone, text: Info.phone, type: 'phone' },
                    { 
                      icon: Linkedin, 
                      text: Info.linkedIn, 
                      type: 'link', 
                      href: "https://www.linkedin.com/in/vasini-singh-18a442205/" 
                    }
                  ].map(({ icon: Icon, text, type, href }) => (
                    <div 
                      key={type} 
                      className="flex items-center space-x-4 text-gray-700 hover:text-[#4A90E2] transition-colors"
                    >
                      <Icon className="text-[#4A90E2]" size={24} />
                      {type === 'link' ? (
                        <a 
                          href={href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline truncate max-w-[200px]"
                        >
                          {text}
                        </a>
                      ) : (
                        <span>{text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#4A90E2] border-b border-gray-200 pb-3">
                  Location
                </h3>
                <div className="flex items-center space-x-4 text-gray-700">
                  <MapPin className="text-[#4A90E2]" size={28} />
                  <div>
                    <span className="block text-lg">{Info.currentPosition}</span>
                    <span className="text-sm text-[#4A90E2]/80">{Info.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;