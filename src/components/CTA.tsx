import React from 'react';
import { ArrowRight, Users, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-stone-50 mb-6">
              Vamos criar algo <span className="text-amber-500">único</span> juntos?
            </h2>
            <p className="text-xl text-stone-300 mb-10 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar seus sonhos 
              em realidade com móveis planejados de alta qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/5511945237617?text=Olá! Gostaria de solicitar um orçamento para móveis planejados."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-amber-500 hover:bg-amber-600 text-stone-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Solicitar Orçamento
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              
              <a 
                href="mailto:contato@studiorplanejados.com.br?subject=Interesse em Parceria"
                className="group border-2 border-stone-400 hover:border-amber-500 text-stone-200 hover:text-amber-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Seja nosso parceiro
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-stone-900 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-50 mb-2">Telefone</h3>
              <a href="tel:+5511945237617" className="text-stone-300 hover:text-amber-500 transition-colors">(11) 94523-7617</a>
              <p className="text-stone-300">(11) 3333-3333</p>
            </div>

            <div className="group">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-stone-900 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-50 mb-2">E-mail</h3>
              <p className="text-stone-300">contato@studiorplanejados.com.br</p>
              <p className="text-stone-300">orcamento@studiorplanejados.com.br</p>
            </div>

            <div className="group">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-stone-900 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-50 mb-2">Endereço</h3>
              <p className="text-stone-300">Rua dos Móveis, 123</p>
              <p className="text-stone-300">São Paulo - SP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;