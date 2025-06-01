import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-black" />,
      title: 'Our Location',
      details: 'Dayton, OH  and surrounding areas',
      link: null
    },
    {
      icon: <Mail className="w-6 h-6 text-black" />,
      title: 'Email Us',
      details: 'gmrconcrete20@gmail.com',
      link: 'mailto:gmrconcrete20@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-black" />,
      title: 'Call Us',
      details: '(937) 729-8022',
      link: 'tel:+19377298022'
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      title: 'Business Hours',
      details: 'Mon-Sun: 6am-6pm',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Contact Us" 
          subtitle="Get in touch for a free quote or to discuss your project needs"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
              >
                <div className="p-3 bg-gray-100 rounded-full flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-black transition-colors underline"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.details}</p>
                  )}
                </div>
              </motion.div>
            ))}

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123379.53207287739!2d-84.27799575267048!3d39.7589471277075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884081cba1c4fd61%3A0x5f17c9e5ec5c9e5e!2sDayton%2C%20OH!5e0!3m2!1sen!2sus!4v1717286272000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="GMR Concrete Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;