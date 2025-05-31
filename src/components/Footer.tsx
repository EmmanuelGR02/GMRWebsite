import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoIcon from '../assets/logoIcon.png';


const Footer: React.FC = () => {
    // get current year
    const currentYear = new Date().getFullYear();

    // array of navigation links
    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'concrete', label: 'Concrete' },
        { id: 'fencing', label: 'Fence Installation' },
        { id: 'tree', label: 'Tree Care' },
        { id: 'junk', label: 'Junk Removal' },
        { id: 'landscaping', label: 'Landscaping' },
        { id: 'snow', label: 'Snow Removal' },
        { id: 'contact', label: 'Contact' },
    ];

  return (
    <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                { /* Logo and ocmapny info */ }
                <div className="space-y-4">
                    <div className="flex items-center pace-x-2">
                        <img
                            src={logoIcon}
                            alt="GMR Logo"
                            className="w-13 h-11 object-contain"
                        />
                        <span className="text-xl font-bold ml-2">GMR Concrete LLC</span>
                    </div>
                    { /* description */ }
                    <p className="text-gray-300 max-w-xs">
                        Quality concrete services, tree care, fence installation, landscaping, and junk removal.
                    </p>
                    { /* social icons */ }
                    <div className="flex space-x-4">
                        <a href="nailto:gmrconcrete20@gmail.com" className="text-white hover:text-gray-400 transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                { /* Quick links section */ }
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        { /* map each link to id and label */ }
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-300 hover:text-gray-400 transition-colors cursor-pointer"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                { /* Contact info section */ }
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-gray-300 mt-0.5" />
                            <span className="text-gray-300">Dayton, OH</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-gray-300" />
                            <span className="text-gray-300">(937)729-8022</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-gray-300" />
                            <a href="mailto:gmrconcrete20@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                gmrconcrete20@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            { /* bootom section */ }
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
                <p>&copy; {currentYear} GMR Concrete LLC. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
