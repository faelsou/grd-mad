import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-stone-50 mb-4">
                GRD <span className="text-amber-500">MAD</span>
              </h3>
              <p className="text-stone-400 leading-relaxed mb-6">
                Fábrica de móveis planejados com capacidade de produção de mais de 2000 chapas por mês. 
                Tecnologia de ponta com método de marcenaria 4.0.
              </p>
              
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/grd_mad/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-500 transition-colors p-2 hover:bg-stone-800 rounded-lg">
                  <Instagram size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-stone-50 mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#fabrica" className="hover:text-amber-500 transition-colors">Fábrica</a></li>
                <li><a href="#diferenciais" className="hover:text-amber-500 transition-colors">Diferenciais</a></li>
                <li><a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfólio</a></li>
                <li><a href="#contato" className="hover:text-amber-500 transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-stone-50 mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Cozinhas Planejadas</span></li>
                <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Salas e Ambientes</span></li>
                <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Quartos e Closets</span></li>
                <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Marcenaria 4.0</span></li>
                <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Produção Industrial</span></li>
              </ul>
            </div>
          </div>

          <hr className="border-stone-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2024 GRD MAD. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
