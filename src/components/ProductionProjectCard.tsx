import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProductionProject } from '../data/projects';

interface ProductionProjectCardProps {
  project: ProductionProject;
  onProjectClick: (projectId: string) => void;
}

const ProductionProjectCard: React.FC<ProductionProjectCardProps> = ({ project, onProjectClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
      onClick={() => onProjectClick(project.id)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.images[0] || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'} // Use first image or placeholder
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        
        {/* Category Badge (Optional, if you want to add a category to ProductionProject) */}
        {/* <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Production
          </span>
        </div> */}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Call to Action */}
        <div className="flex items-center justify-between">
          <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all">
            <span>View Details</span>
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductionProjectCard;
