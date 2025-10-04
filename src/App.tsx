import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Differentials from './components/Differentials';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <Header />
      <main className="pt-16">
        <Hero />
=======
    <div className="min-h-screen">
      <Header open={menuOpen} setOpen={setMenuOpen} />
      {/* Conteúdo principal com fade e blur quando o menu estiver aberto */}
      <main
        aria-hidden={menuOpen}
        className={`transition-opacity duration-300 ease-in-out ${
          menuOpen
            ? 'pointer-events-none select-none opacity-0 blur-[2px]'
            : 'opacity-100'
        }`}
      >
        <Hero open={menuOpen} />
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
        <About />
        <Differentials />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Footer />
<<<<<<< HEAD
      </main>
      <WhatsAppFloat />
    </div>
  );
}

export default App;
=======
        <WhatsAppFloat />
      </main>
    </div>
  );
}
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
