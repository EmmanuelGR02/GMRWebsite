import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import fence1Img from '../assets/Fence1-img.jpg';
import vinylFenceImg from '../assets/vinylFence-img.jpg';
import chainLinkFenceImg from '../assets/chainLink-img.jpg';

const FencingServices: React.FC = () => {
    // sections containing fencing services info
    const services = [
        {
            title: 'Wood Fence Installation',
            description: 'Classic wood fence for privacy and asthetics. Durable and customizable to fit your style.',
            image: fence1Img
        },
        {
            title: 'Vinyl Fence Installation',
            description: 'Low-maintenance vinyl fence that offers durability and a clean look.',
            image: vinylFenceImg
        },
        {
            title: 'Chain Link Fence Installation',
            description: 'Affordable and secure chain link fence. Ideal for security.',
            image: chainLinkFenceImg
        }
    ];

    return (
        <section id="fencing" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionHeader 
                    title="Fencing Services" 
                    subtitle="Quality fence installation for security, privacy, and curb appeal"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageSrc={service.image}
                            delay={index}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default FencingServices;