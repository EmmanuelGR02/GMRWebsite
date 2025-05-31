import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logoIcon from '../assets/logoIcon.png';
// Icons
import { Menu, X} from 'lucide-react';


// navbar gets 'isScrolled' prop
interface NavbarProps {
    isScrolled: boolean;
}

// Navbar component
// recieves 'isScrolled' prop to tell the navbar if the page is scrolled or not
const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
    // state for mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
        <header className= { // sticky navbar that changes style when scrilled
            `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4' }` }
        >
            
            {/* Nav container */}
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo and icon container */}
                <div className="flex items-center space-x-2">
                    <img
                        src={logoIcon}
                        alt="GMR Logo"
                        className="w-13 h-11 object-contain"
                    />

                    <span className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
                        GMR Concrete LLC
                    </span>
                </div>
            


                {/* Desktop navigation */}
                <nav className="hidden md:flex space-x-4">
                    {navLinks.map((link) => (
                        // link to each section of the page with the correct id using smooth scroll
                        <Link
                            key={link.id}
                            to={link.id}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            // add styles to the link
                            className={`font-medium cursor-pointer hover:text-gray-400 hover:underline transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'   }`}
                        >   
                            {/* show the link name */}
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile menu toogle button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                    arial-label="Tootle menu"
                >
                    {isMenuOpen ? (
                        <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
                    ) : (
                        <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
                    )}
                </button>

            </div>

            {/* Mobile navigation menu dropdown (visible when menu is open on small screens) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md z-50 animate-fade-in">
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-800 font-medium py-2 hover:text-gray-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)} 
                    >
                        {link.label}
                    </Link>
                    ))}
                </div>
                </div>
            )}

        </header>
    );
};

// expoert Navbar component
export default Navbar;