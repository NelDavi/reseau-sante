import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onQuoteClick: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-forest-green text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+241 76364087</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>Réseausanté+infos@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Nombakele descente saint Germain, Libreville</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-forest-green p-2 rounded-lg">
              <Heart className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-forest-green">Réseau santé +</h1>
              <p className="text-sm text-olive-green">Partout à vos côtés</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link 
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/services"
              className={`font-medium transition-colors ${
                isActive('/services') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
              }`}
            >
              Nos services
            </Link>
            <Link 
              to="/partenaires"
              className={`font-medium transition-colors ${
                isActive('/partenaires') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
              }`}
            >
              Partenaires
            </Link>
            <Link 
              to="/actualites"
              className={`font-medium transition-colors ${
                isActive('/actualites') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
              }`}
            >
              Actualités
            </Link>
            <Link 
              to="/entreprise"
              className={`font-medium transition-colors ${
                isActive('/entreprise') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
              }`}
            >
              Espace entreprise
            </Link>
            <Link 
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={onQuoteClick}
            className="hidden lg:block btn btn-primary text-white"
          >
            Demander un devis
          </button>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 font-medium ${
                  isActive('/') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
                }`}
              >
                Accueil
              </Link>
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 font-medium ${
                  isActive('/services') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
                }`}
              >
                Nos services
              </Link>
              <Link 
                to="/partenaires"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 font-medium ${
                  isActive('/partenaires') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
                }`}
              >
                Partenaires
              </Link>
              <Link 
                to="/actualites"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 font-medium ${
                  isActive('/actualites') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
                }`}
              >
                Actualités
              </Link>
              <Link 
                to="/entreprise"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 font-medium ${
                  isActive('/entreprise') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
                }`}
              >
                Espace entreprise
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 font-medium ${
                  isActive('/contact') ? 'text-forest-green' : 'text-gray-700 hover:text-forest-green'
                }`}
              >
                Contact
              </Link>
              <button 
                onClick={() => {
                  onQuoteClick();
                  setIsMenuOpen(false);
                }}
                className="btn btn-primary text-white mt-4"
              >
                Demander un devis
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}