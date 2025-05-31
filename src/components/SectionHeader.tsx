import React from 'react';
import { motion } from 'framer-motion';

// expected prop types for SectionHeader component
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    centered = true
}) => {
    return (
        // motion div for animation effects when it enters the viewport
        <motion.div
            className={`mb-12 ${centered ? 'text-center' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient`}>
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    {subtitle}
                </p>
            )}
            <div className={`h-1 w-20 bg-black mt-4 ${centered ? 'mc-auto' : ''}`}></div>
        </motion.div>
    );
};

export default SectionHeader;