import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Mail, Facebook, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Réalisations', path: '/realisations' },
  { name: 'Dating Pro', path: '/dating-pro' },
  { name: 'Podcast', path: '/podcast' },
  { name: 'À propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Sticky Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dfsspwbcs/image/upload/v1772100997/Design_sans_titre_vnyy90.png" 
              alt="Logo Ahoueffa Rey" 
              className="w-40 md:w-48 h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brown",
                  location.pathname === link.path ? "text-brown font-semibold" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dating-pro"
              className="bg-brown text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brown/90 transition-colors"
            >
              Réserver
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-sand pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                    window.location.href = link.path;
                  }}
                  className="text-2xl font-serif text-brown hover:text-green active:text-green transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/dating-pro"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                  window.location.href = '/dating-pro';
                }}
                className="bg-brown text-white px-8 py-3 rounded-full text-lg font-medium mx-auto mt-4 inline-block transition-transform hover:bg-brown/90"
              >
                Réserver un Dating Pro
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sand/30 pt-16 pb-8 border-t border-brown/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="block mb-6">
                <img 
                  src="https://res.cloudinary.com/dfsspwbcs/image/upload/v1772100997/Design_sans_titre_vnyy90.png" 
                  alt="Logo Ahoueffa Rey" 
                  className="w-44 md:w-56 h-auto object-contain"
                />
              </Link>
              <p className="text-gray-600 max-w-md mb-6">
                Accompagnement terrain & structuration d'image business pour entrepreneurs et commerces.
                Une approche humaine, directe et pragmatique.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/ahoueffa-rey-299b54183?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/ahoueffarey?igsh=MW9tcDFnOGZ1dzE2dw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/share/17BaQogpiT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://wa.me/2290198378939" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-colors">
                  <Phone size={20} />
                </a>
                <a href="mailto:ahoueffa.rey@gmail.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-brown mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 6).map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-600 hover:text-brown transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-brown mb-4">Légal</h4>
              <ul className="space-y-2">
                <li><Link to="/mentions-legales" className="text-gray-600 hover:text-brown transition-colors">Mentions légales</Link></li>
                <li><Link to="/confidentialite" className="text-gray-600 hover:text-brown transition-colors">Politique de confidentialité</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-brown transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brown/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Charlène Ahoueffa Rey. Tous droits réservés.</p>
            <p className="mt-2 md:mt-0">Fait avec passion et pragmatisme.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button could go here */}
    </div>
  );
}
