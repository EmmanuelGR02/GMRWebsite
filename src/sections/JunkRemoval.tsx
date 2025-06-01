import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { Truck, Recycle, Clock, Users } from 'lucide-react';
import dumpImg from '../assets/Dump-img.jpg';
import asphaltDumpImg from '../assets/AsphaltDump-img.jpg';
import yardWasteRemovalImg from '../assets/YardWasteRemoval-img.png';
import appliaceDisposalImg from '../assets/ApplianceRemoval-img.jpg';
import residentialWasteRemovalImg from '../assets/ResidentialWaste-img.jpg';

const JunkRemoval: React.FC = () => {
  const services = [
    {
      title: 'Residential Junk Removal',
      description: 'Complete cleanout services for homes and apartments.',
      imageSrc: residentialWasteRemovalImg
    },
    {
      title: 'Construction Debris',
      description: 'Fast and efficient removal of construction waste, including concrete, asphalt, bricks, drywall, wood, metal scraps, tiles, roofing materials, and more.',
      imageSrc: asphaltDumpImg
    },
    {
      title: 'Appliance Disposal',
      description: 'Safe and eco-friendly disposal of old appliances.',
      imageSrc: appliaceDisposalImg
    },
    {
      title: 'Yard Waste Removal',
      description: 'Removal of branches, leaves, grass clippings, shrubs, mulch, soil, and other landscaping debris.',
      imageSrc: yardWasteRemovalImg
    }
  ];

  const benefits = [
    {
      icon: <Truck className="w-10 h-10 text-white" />,
      title: 'Prompt Service',
      description: 'We arrive on time and complete removals quickly.'
    },
    {
      icon: <Recycle className="w-10 h-10 text-white" />,
      title: 'Eco-Friendly',
      description: 'We recycle and donate items whenever possible.'
    },
    {
      icon: <Clock className="w-10 h-10 text-white" />,
      title: 'Flexible Scheduling',
      description: 'Weekend and same-day appointments available.'
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: 'Professional Team',
      description: 'Our crew handles all the heavy lifting with care and efficiency, ensuring a stress-free experience.'
    }
  ];

  return (
    <section id="junk" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Junk Removal Services" 
          subtitle="Fast, reliable junk removal for residential and commercial properties"
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
        
        <div className="mt-20 bg-black text-white rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Why Choose Our Junk Removal Service?
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-gray-800 p-3 rounded-full mb-4">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px] relative"
            >
              <img 
                src= {dumpImg}
                alt="Junk removal service" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JunkRemoval;