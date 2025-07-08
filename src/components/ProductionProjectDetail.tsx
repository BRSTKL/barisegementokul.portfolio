import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { productionProjects } from '../data/projects';

interface ProductionProjectDetailProps {
  productionProjectId: string;
  onBack: () => void;
}

const ProductionProjectDetail: React.FC<ProductionProjectDetailProps> = ({ productionProjectId, onBack }) => {
  const project = productionProjects.find(p => p.id === productionProjectId);
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

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={onBack}
          className="flex items-center text-blue-400 hover:text-blue-300 mx-auto"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Project Engineer Details
        </button>
      </div>
    );
  }

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
          Back to Project Engineer Details
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            {project.description}
          </p>
        </motion.div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {project.images.map((mediaSrc, index) => {
            const isVideo = mediaSrc.toLowerCase().endsWith('.mov') || mediaSrc.toLowerCase().endsWith('.mp4');
            return isVideo ? (
              <video
                key={index}
                src={mediaSrc}
                controls
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl"
              />
            ) : (
              <img
                key={index}
                src={mediaSrc}
                alt={`${project.title} Image ${index + 1}`}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl cursor-pointer"
                onClick={() => openModal(mediaSrc)}
              />
            );
          })}
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

export default ProductionProjectDetail;
