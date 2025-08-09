import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-stone-50 mb-4">
                Studio R <span className="text-amber-500">Planejados</span>
              </h3>
              <p className="text-stone-400 leading-relaxed mb-6">
                Referência em móveis planejados de alto padrão, oferecendo soluções 
                exclusivas para projetos residenciais e corporativos há mais de 15 anos.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-stone-50 mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre</a></li>
                <li><a href="#diferenciais" className="hover:text-amber-500 transition-colors">Diferenciais</a></li>
                <li><a href="#solucoes" className="hover:text-amber-500 transition-colors">Soluções</a></li>
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
                <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Móveis Corporativos</span></li>
                <li><span className="hover:text-amber-500 transition-colors cursor-pointer">Projetos Especiais</span></li>
              </ul>
            </div>
          </div>

          <hr className="border-stone-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2024 Studio R Planejados. Todos os direitos reservados.
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