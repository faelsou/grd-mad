<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
import { Menu, X } from 'lucide-react';

type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ open, setOpen }) => {
  // Trava o scroll da página quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
<<<<<<< HEAD
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
=======
  }, [open]);
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)

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
    { label: 'Contato', href: '#contato' },
  ];

<<<<<<< HEAD
  const shouldApplyElevatedStyles = isScrolled || isMenuOpen;

  return (
    <>
      <header
        className={`sticky top-0 z-[9999] h-16 w-full bg-stone-950/95 text-stone-50 transition-all duration-300 ${
          shouldApplyElevatedStyles ? 'backdrop-blur-sm shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">
=======
  const [isScrolled, setIsScrolled] = React.useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
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

<<<<<<< HEAD
          <nav className="hidden items-center space-x-8 md:flex">
=======
          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
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

          {/* Botões à direita */}
          <div className="flex items-center space-x-4">
            <a
              href="/catalogo-cores.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2 font-medium text-white transition-colors hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 md:inline-block"
            >
              Catálogo de Cores
            </a>

            {/* Menu Mobile */}
            <button
<<<<<<< HEAD
              type="button"
              className="text-stone-50 transition-colors hover:text-amber-500 md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
=======
              className="md:hidden text-stone-50 hover:text-amber-500 transition-colors"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Abrir menu"
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </header>

      {/* Menu Mobile - Fundo sempre escuro */}
      <nav
        aria-hidden={!isMenuOpen}
        aria-modal={isMenuOpen}
        className={`fixed inset-0 z-[10000] bg-stone-950 text-stone-100 transition-all duration-200 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
        role="dialog"
        style={{ backgroundColor: '#0c0a09' }}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-20 bg-stone-950">
          <div className="absolute inset-x-0 top-0 flex h-16 items-center justify-between px-6 bg-stone-950">
            <div className="text-lg font-semibold tracking-wide text-stone-50">Menu</div>
            <button
              type="button"
              aria-label="Fechar menu"
              className="text-stone-50 transition-colors hover:text-amber-500"
              onClick={closeMenu}
=======
      </div>

      {/* Overlay + Drawer do menu mobile */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Fundo escurecido */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer lateral */}
          <div className="absolute top-0 left-0 h-full w-[82%] max-w-xs bg-stone-900 shadow-xl p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-amber-500"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>

            <nav id="mobile-menu" className="mt-10 flex flex-col space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-amber-500 transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="/catalogo-cores.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              onClick={() => setOpen(false)}
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
            >
              <X size={24} />
            </button>
          </div>
<<<<<<< HEAD

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
=======
        </div>
      )}
    </header>
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
  );
};

export default Header;
