import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import dadJoeDriveway  from '../assets/dadJoeDriveway-img.jpg'; 

const About: React.FC = () => {

    // initialize each feature and its properties
    const features = [
        {
            icon: <Award className="w-10 h-10 text-black" />,
            title: 'High Quality',
            description: 'We take pride in delivering high-quality services.'
        },
        {
            icon: <Users className="w-10 h-10 text-black" />,
            title: 'Experienced Team',
            description: 'Our experienced team ensure excellence in every project.'
        },
        {
            icon: <Clock className="w-10 h-10 text-black" />,
            title: 'Timely Service',
            description: 'We complete projects on schedule without compromising quality.'
        },
        {
            icon: <Shield className="w-10 h-10 text-black" />,
            title: 'Fully Insured',
            description: 'We are fully insured for your peace of mind.'
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                { /* call section header component to display title and subtitle with animation */}
                <SectionHeader
                    title="About GMR Concrete LLC"
                    subtitle="Your partner for all concrete and property improvement needs"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    { /* animation for section content when it comes into view */}
                    <motion.div
                        initial={{ opacity: 0, x:-20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <img
                                src={dadJoeDriveway}
                                alt="team working"
                                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                            />
                            { /* experience div label */}
                            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                                <p className="text-lg font-bold mb-2">10+ Years Experince</p>
                                <p className="text-sm">Serving our community with pride and dedication</p>
                            </div>
                        </div>  
                    </motion.div>

                    { /* about us sentences with animation when scrolled */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold">We Provide Quality Services</h3>
                        <p className="text-gray-600 leading-relaxed">
                            At GMR Concrete LLC, we take pride in delivering top-notch concrete services, tree care, fence installations, landscaping, and junk removal. With over a decade of experience, our dedicated team has built a reputation for reliability, quality, and customer satisfaction.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our commitment to excellence and attention to detail set us apart from the competition. We use premium materials and have a skilled team to ensure every project exceeds expectations and stands the test of time.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {features.map((feature, index) => (
                            <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-4"
                            >
                            <div className="p-2 bg-gray-100 rounded-lg">
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                            </motion.div>
                        ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About;