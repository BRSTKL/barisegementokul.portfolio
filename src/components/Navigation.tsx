import React from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => handleNavClick('home')}
          >
            <img src="/my_logo.png" alt="Baris Egemen Tokul Logo" className="h-12 w-auto" />
            <span className="text-white font-semibold text-lg">Baris Egemen Tokul</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/CV_BarisEgemenTokul.pdf"
              download="CV_BarisEgemenTokul.pdf"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
            <div className="flex items-center space-x-2">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/baris-egemen-tokul-8016751b5"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/BRSTKL"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-800 border-t border-slate-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  currentSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-700">
              <a
                href="/CV_BarisEgemenTokul.pdf"
                download="CV_BarisEgemenTokul.pdf"
                className="flex items-center space-x-2 text-slate-300 hover:text-white px-3 py-2"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="https://www.linkedin.com/in/baris-egemen-tokul-8016751b5" className="text-slate-400 hover:text-blue-400">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/BRSTKL" className="text-slate-400 hover:text-blue-400">
                  <Github size={20} />
                </a>
                <a href="mailto:barisegementokul@gmail.com" className="text-slate-400 hover:text-blue-400">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;