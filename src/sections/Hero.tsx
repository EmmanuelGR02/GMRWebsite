import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import bgImage from '../assets/hero-bgimg.jpg';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="h-screen relative flex items-center justify-center text-white overflow-hidden"
    >
      {/* background image with overlat */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            GMR Concrete LLC
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Building strong foundations with quality concrete and reliable property services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary min-w-40"
              >
                Get a Quote
              </motion.button>
            </Link>
            <Link
              to="concrete"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-black min-w-40"
              >
                Our Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* scroll icon with animation*/}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        {/* link to about section */}
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-6 h-6" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;