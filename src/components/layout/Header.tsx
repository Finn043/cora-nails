import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBooking = () => {
    window.open('https://www.fresha.com/book-now/studio-april-f1fyri2u/alloffer?share=true&pId=2529794', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream z-50 shadow-sm transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest transition-colors duration-200 hover:text-brown">
            STUDIO.APRIL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className="text-charcoal hover:text-brown transition-all duration-200 text-sm lg:text-base hover:-translate-y-0.5">
              Home
            </Link>
            <Link to="/about" className="text-charcoal hover:text-brown transition-all duration-200 text-sm lg:text-base hover:-translate-y-0.5">
              About
            </Link>
            <Link to="/services" className="text-charcoal hover:text-brown transition-all duration-200 text-sm lg:text-base hover:-translate-y-0.5">
              Services
            </Link>
            <Link to="/contact" className="text-charcoal hover:text-brown transition-all duration-200 text-sm lg:text-base hover:-translate-y-0.5">
              Contact
            </Link>
            <button
              onClick={handleBooking}
              className="px-5 lg:px-6 py-2 border border-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all duration-300 text-sm lg:text-base hover:shadow-lg transform hover:-translate-y-0.5"
            >
              BOOK NOW
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-3 md:gap-4 mt-5 md:mt-6 pb-3 md:pb-4 animate-fadeIn">
            <Link
              to="/"
              className="text-charcoal hover:text-brown transition-all duration-200 text-sm hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-charcoal hover:text-brown transition-all duration-200 text-sm hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-charcoal hover:text-brown transition-all duration-200 text-sm hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-charcoal hover:text-brown transition-all duration-200 text-sm hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={handleBooking}
              className="px-6 py-2 border border-charcoal rounded-full hover:bg-charcoal hover:text-cream transition-all duration-300 text-center text-sm mt-2"
            >
              BOOK NOW
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
