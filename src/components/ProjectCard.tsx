import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
      onClick={() => onProjectClick(project)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* External Links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900/70 p-2 rounded-full text-white hover:bg-slate-900"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-slate-500 text-xs px-2 py-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-between">
          <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all">
            <span>View Details</span>
            <ArrowRight size={16} className="ml-1" />
          </button>
          
          {project.featured && (
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 text-xs font-bold px-2 py-1 rounded">
              FEATURED
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;