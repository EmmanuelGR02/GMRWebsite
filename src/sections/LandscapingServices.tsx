import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import stripesImg from '../assets/Stripes-img.jpeg';
import mulchImg from '../assets/Mulch-img.jpeg';
import snowRemovalImg from '../assets/SnowRemoval-img.jpeg';

const LandscapingServices: React.FC = () => {
  const services = [
    
    {
      title: 'Lawn Maintenance',
      description: 'Regular maintenance to keep your lawn healthy and beautiful.',
      imageSrc: stripesImg
    },
    {
      title: 'Planting & Mulching',
      description: 'Planting and mulching services for improved yard aesthetics.',
      imageSrc: mulchImg
    },
    {
      title: 'Snow Removal',
      description: 'Reliable snow clearing for both residential and commercial properties.',
      imageSrc: snowRemovalImg
    }
  ];


  return (
    <section id="landscaping" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Landscaping and Snow Removal Services" 
          subtitle="Simple and Reliable lan care and Snow Removal"
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

        <div className="h-m w-1 bg-black"></div>
        
      </div>
    </section>
  );
};

export default LandscapingServices;