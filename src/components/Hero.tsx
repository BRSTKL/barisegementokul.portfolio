import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, Database } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const floatingIconVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10"
          variants={floatingIconVariants}
          animate="animate"
        >
          <BarChart3 size={60} className="text-blue-400" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <TrendingUp size={40} className="text-teal-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Database size={50} className="text-blue-300" />
        </motion.div>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-20">
        <motion.div
          className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0 lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Baris Egemen Tokul
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
          >
            I'm Baris Egemen Tokul. I am currently elevating my technical foundation in Energy Systems Engineering with a strategic focus through my MSc. in Engineering Management at the Berlin School of Business and Innovation. For me, engineering is not just about designing a product; it's about managing its entire lifecycle—from idea to execution—in the most innovative and efficient way possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange('projects')}
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <span>View My Projects</span>
              <ArrowRight size={20} />
            </motion.button>
            
            <a
              href="/CV_BarisEgemenTokul.pdf"
              download="CV_BarisEgemenTokul.pdf"
              className="flex items-center justify-center space-x-2 border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <span>Download CV</span>
            </a>
          </motion.div>

          
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end"
        >
          <img 
            src="/profile_photo.png"
            alt="Baris Egemen Tokul Profile" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-blue-500"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;