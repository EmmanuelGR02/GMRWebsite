import React from 'react';
import { motion } from 'framer-motion';

// Define props expected for the component
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageSrc2?: string; // Corrected type to lowercase 'string'
  delay?: number;
}

// Component to render a single animated service card
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, imageSrc2, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* First image */}
      <div className="h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full  transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Optional second image */}
      {imageSrc2 && (
        <div className="h-64 overflow-hidden mt-2">
          <img 
            src={imageSrc2} 
            alt={`${title} (Additional View)`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}

      {/* Text content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
