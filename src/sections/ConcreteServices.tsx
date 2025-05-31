import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectGallery from '../components/ProjectGallery';
import drivewayimg from '../assets/Driveway-img.jpg';
//import driveway2Img from '../assets/Driveway2-img.jpg';
import pationImg from '../assets/Patio-img.jpg';
import patio2Img from '../assets/Patio2-img.jpg';
import walkwayImg from '../assets/Walkway-img.jpg';
import sidewalkImg from '../assets/Sidewalk-img.jpg';
import stampedPatio1Img from '../assets/StampedPatio1-img.jpg';
import stampedPatio2Img from '../assets/StampedPatio2-img.jpg';
import stampedStepsImg from '../assets/StampedSteps-img.jpg';
import frontStepsImg from '../assets/FrontSteps-img.jpg';
import recentDrivewayImg from '../assets/RecentDriveway-img.jpg';
import recentDriveway2Img from '../assets/RecentDriveway2-img.jpg';
import recentWlkyFoundImg from '../assets/RecentWlkyFound-img.jpg';
import recentGarageImg from '../assets/RecentGarage-img.jpg';
import recentBasementImg from '../assets/RecentBasement-img.jpg';
import recentDExtensionImg from '../assets/RecentDExtension-img.jpg';

const ConcreteServices: React.FC = () => {
    // section containing concrete services with image and description
    const services = [
        {
            title: 'Driveways',
            description: 'Custom concrete driveways designed for durability and aesthetics.',
            imageSrc: drivewayimg,
           // imageSrc2: driveway2Img
        },
        {
            title: 'Patios',
            description: 'Transform your outdoor space with beautiful concrete patios.',
            imageSrc: pationImg,
            imageSrc2: patio2Img
        },
        {
            title: 'Sidewalks and Walkways',
            description: 'Durable and stylish concrete sidewalks and walkways for your property.',
            imageSrc: walkwayImg,
            imageSrc2: sidewalkImg
        },
        {
            title: 'Stamped Concrete',
            description: 'Add texture and style with our stamped concrete services.',
            imageSrc: stampedPatio1Img,
            imageSrc2: stampedPatio2Img
        },
        {
            title: 'Concrete Steps',
            description: 'Sturdy and elegant concrete steps for your home or business.',
            imageSrc: stampedStepsImg,
            imageSrc2: frontStepsImg
        }  
    ];

    // section to display images of our recent projects
    const projectImages = [
        {
            url: recentGarageImg,
            alt: 'Recent Garage Project'
        },
        {
            url: recentDrivewayImg,
            alt: 'Recent Driveway Project'
        },
        {
            url: recentDriveway2Img,
            alt: 'Recent Driveway Project 2'
        },
        {
            url: recentWlkyFoundImg,
            alt: 'Recent Walkway Project'
        },
        {
            url: recentBasementImg,
            alt: 'Recent Basement Project'
        },
        {
            url: recentDExtensionImg,
            alt: 'Recent Driveway Extension Project'
        }
    ];

    return (
        <section id="concrete" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Concrete Services"
                    subtitle="Concrete solutions for your home and business"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageSrc={service.imageSrc}
                            imageSrc2={service.imageSrc2}
                            delay={index}
                        />
                    ))}
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-6 text-center">Recent Projects</h3>
                    <ProjectGallery images={projectImages} />
                </div>
            </div>
        </section>
    );
};

export default ConcreteServices;