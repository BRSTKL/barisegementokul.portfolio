import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, MapPin, Calendar, FileText, BarChart2, Table, Database, Globe } from 'lucide-react';
import { skills } from '../data/projects';

const iconComponents: { [key: string]: React.ElementType } = {
  FileText,
  BarChart2,
  Table,
  Database,
  Globe,
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate about transforming raw data into strategic insights that drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
              
              <h3 className="text-2xl font-bold text-white mb-2">Baris Egemen Tokul</h3>
              <p className="text-blue-400 font-medium mb-4">Energy Systems Engineer</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center text-slate-400">
                  <MapPin size={16} className="mr-2" />
                  <span>Germany, Berlin</span>
                </div>
                <div className="flex items-center justify-center text-slate-400">
                  <Calendar size={16} className="mr-2" />
                  <span>1 Year Experience</span>
                </div>
              </div>

              <a
                href="/CV_BarisEgemenTokul.pdf"
                download="CV_BarisEgemenTokul.pdf"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Story */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm Baris Egemen Tokul, an Energy Systems Engineer currently pursuing my MSc in Engineering Management at the Berlin School of Business and Innovation. I approach engineering as more than just technical design—it's about managing the full journey from concept to completion in the most effective way. Through hands-on experience in both production optimization and project execution, I've developed a strong foundation that combines technical precision with strategic thinking. My experience ranges from quality control and process analysis to managing the end-to-end production of industrial systems like pressure vessels and conveyors. As a former Sales Engineer, I’ve also learned how to align technical solutions with business needs, which sharpened my ability to bridge engineering and strategy. I'm passionate about solving complex problems with a holistic mindset and always open to meaningful collaborations.
                </p>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 text-yellow-400" />
                Education & Certifications
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Bachelor of Science in Energy Systems Engineering</h4>
                  <p className="text-blue-400">Bahçeşehir University, Istanbul, Turkey</p>
                  <p className="text-slate-400 text-sm">2018 – 2024</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Certificate in English Language Education</h4>
                  <p className="text-teal-400">Bay Atlantic University, Washington, D.C., USA</p>
                  <p className="text-slate-400 text-sm">2018 – 2019</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">TÜV Austria Quality Management Certificate</h4>
                  <p className="text-yellow-400">TÜV AUSTRIA Group</p>
                  <p className="text-slate-400 text-sm">February 2025</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const isImagePath = skill.icon.startsWith('/skills_logo/') || skill.icon.startsWith('/logo/');
              const IconComponent = iconComponents[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center"
                >
                  {isImagePath ? (
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 mx-auto mb-3" />
                  ) : (
                    IconComponent && <IconComponent size={40} className="text-blue-400 mx-auto mb-3" />
                  )}
                  <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    />
                  </div>
                  <span className="text-slate-400 text-sm">{skill.level}%</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;