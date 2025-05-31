import React from 'react';
import { motion } from 'framer-motion';

// structure for each image object
interface Image {
  url: string;
  alt: string;
}

// define props expected for the component
interface ProjectGalleryProps {
  images: Image[];
}


const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  return (
    // grid layout for the gallery. Adjusts columns based on screen size
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {images.map((image, index) => (
        // Animated container for each image
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-md h-64"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
            {/* Image with zoom-in hover effect */}
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGallery;