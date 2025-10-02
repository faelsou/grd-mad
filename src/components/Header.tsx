import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      closeMenu();
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('load', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('load', handleRouteChange);
    };
  }, [closeMenu]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const handleChange = () => {
      if (media.matches) {
        closeMenu();
      }
    };

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleChange);
    } else if (typeof media.addListener === 'function') {
      media.addListener(handleChange);
    }

    handleChange();

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', handleChange);
      } else if (typeof media.removeListener === 'function') {
        media.removeListener(handleChange);
      }
    };
  }, [closeMenu]);

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
        className={`sticky top-0 z-[9999] h-16 w-full text-stone-50 transition-all duration-300 ${
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
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <nav
        aria-hidden={!isMenuOpen}
        aria-modal={isMenuOpen}
        className={`fixed inset-0 z-[10000] bg-stone-950/95 text-stone-100 backdrop-blur-sm transition-all duration-200 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
        role="dialog"
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-20">
          <div className="absolute inset-x-0 top-0 flex h-16 items-center justify-between px-6">
            <div className="text-lg font-semibold tracking-wide text-stone-50">Menu</div>
            <button
              type="button"
              aria-label="Fechar menu"
              className="text-stone-50 transition-colors hover:text-amber-500"
              onClick={closeMenu}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mt-6 flex flex-1 flex-col space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-stone-100 transition-colors duration-200 hover:text-amber-500"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="/catalogo-cores.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-3 text-center font-medium text-white transition-colors hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
            onClick={closeMenu}
          >
            Catálogo de Cores
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
