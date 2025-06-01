import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import trimmingImg from '../assets/Trimming-img.jpg';
import treeRemovalImg from '../assets/TreeRemoval-img.jpg';
import stumpRemovalImg from '../assets/StumpRemoval-img.jpg';

const TreeServices: React.FC = () => {
  const services = [
    {
      title: 'Trimming',
      description: 'Professional trimming to enhance appearance and tree health.',
      imageSrc: trimmingImg
    },
    {
      title: 'Tree Removal',
      description: 'Safe and efficient removal of trees with complete cleanup.',
      imageSrc: treeRemovalImg
    },
    {
      title: 'Stump Grinding',
      description: 'Complete stump removal for a clean, usable landscape.',
      imageSrc: stumpRemovalImg
    }
  ];

  

  return (
    <section id="tree" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Tree Care Services" 
          subtitle="Tree care solutions for health, safety, and beauty"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              delay={index}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TreeServices;