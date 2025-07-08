import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Target, Lightbulb, TrendingUp, Zap, X } from 'lucide-react';
import { Project, productionProjects } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onProductionProjectClick: (id: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onProductionProjectClick }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center text-blue-400 hover:text-blue-300 mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-400 mb-8">
            {project.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl cursor-pointer"
            onClick={() => openModal(project.image)}
          />
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 p-6 bg-gradient-to-r from-blue-900/20 to-teal-900/20 rounded-xl border border-blue-800/30"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="mr-3 text-blue-400" size={24} />
            Executive Summary
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Problem Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Lightbulb className="mr-3 text-yellow-400" size={28} />
            The Problem
          </h2>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed">
              {project.problem}
            </p>
          </div>
        </motion.div>

        {/* Process & Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Projects I Took Part in Production
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.id === 'project-engineer' ? (
              <>
                {productionProjects.filter(p => ['pressured-vessels', 'filters', 'conveyor-systems', 'bunker'].includes(p.id)).map((prodProject) => (
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h3 
                      className="text-xl font-semibold text-blue-400 mb-3 cursor-pointer hover:underline"
                      onClick={() => onProductionProjectClick(prodProject.id)}
                    >
                      {prodProject.title}
                    </h3>
                    <p className="text-slate-300">{prodProject.description}</p>
                  </div>
                ))}
              </>
            ) : (
              <>
                {productionProjects.filter(p => ['quality-control-procedures', 'production-planning-management', 'energy-safety-compliance'].includes(p.id)).map((prodProject) => (
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <h3 
                      className="text-xl font-semibold text-blue-400 mb-3 cursor-pointer hover:underline"
                      onClick={() => onProductionProjectClick(prodProject.id)}
                    >
                      {prodProject.title}
                    </h3>
                    <p className="text-slate-300">{prodProject.description}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Zap className="mr-3 text-green-400" size={28} />
            The Solution
          </h2>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed">
              {project.solution}
            </p>
          </div>
        </motion.div>

        {/* Challenges & Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Challenges & Key Learnings
          </h2>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <p className="text-slate-300 text-lg leading-relaxed">
              {project.challenges}
            </p>
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12 p-6 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl border border-green-800/30"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="mr-3 text-green-400" size={28} />
            Results & Business Impact
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Immediate Outcome</h3>
              <p className="text-slate-300">{project.outcome}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Long-term Impact</h3>
              <p className="text-slate-300">{project.impact}</p>
            </div>
          </div>
        </motion.div>

        {/* Image Modal */}
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative" onClick={e => e.stopPropagation()}>
              <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl bg-gray-800 rounded-full p-2 hover:bg-gray-700"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
