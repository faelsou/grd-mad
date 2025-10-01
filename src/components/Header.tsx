import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const shouldShowSolidBackground = isScrolled || isMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          shouldShowSolidBackground
            ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg'
            : 'bg-stone-950/95 md:bg-transparent md:shadow-none md:backdrop-blur-none'
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="GRD MAD Logo"
              className="mr-3 h-12 w-auto object-contain"
            />
            <div className="text-2xl font-bold text-stone-50">
              GRD <span className="text-amber-500">MAD</span>
            </div>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-stone-100 transition-colors duration-200 hover:text-amber-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="/catalogo-cores.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2 font-medium text-white transition-colors hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 md:inline-block"
            >
              Catálogo de Cores
            </a>
            <button
              type="button"
              className="text-stone-50 transition-colors hover:text-amber-500 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden">
          <div className="relative h-full">
            <button
              type="button"
              aria-label="Fechar menu"
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="relative z-10 ml-auto flex h-full w-72 flex-col border-l border-stone-800 bg-stone-950/95 px-6 py-8 backdrop-blur-md">
              <nav className="flex flex-1 flex-col space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg text-stone-100 transition-colors duration-200 hover:text-amber-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="/catalogo-cores.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-3 text-center font-medium text-white transition-colors hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
              >
                Catálogo de Cores
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
