import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Fábrica', href: '#fabrica' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="/Oficial (1).png" 
              alt="GRD MAD Logo" 
              className="h-12 w-auto mr-3"
            />
            <div className="text-2xl font-bold text-stone-50">
              GRD <span className="text-amber-500">MAD</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-stone-100 hover:text-amber-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/catalogo-cores.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-stone-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Phone size={20} />
              Ligar
            </a>
            <a href="mailto:contato@grdmad.com.br" className="text-amber-500 hover:text-amber-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button
            className="md:hidden text-stone-50 hover:text-amber-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-stone-100 hover:text-amber-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;