import React from 'react';
import { ArrowRight, Users, Phone, MapPin, MessageCircle } from 'lucide-react';

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
              Entre em contato conosco e descubra como nossa fábrica pode atender suas necessidades 
              com móveis planejados de alta qualidade e tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/5511945237617?text=Olá! Gostaria de solicitar um orçamento na GRD MAD."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-amber-500 hover:bg-amber-600 text-stone-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Solicitar Orçamento
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              
              <a
                href="https://wa.me/5511945237617?text=Olá! Gostaria de ser cliente da GRD MAD."
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-stone-400 hover:border-amber-500 text-stone-200 hover:text-amber-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Seja nosso cliente
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-stone-900 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-50 mb-2">Contatos</h3>
              <a href="tel:+5511945237617" className="text-stone-300 hover:text-amber-500 transition-colors">(11) 94523-7617</a>
              <p className="text-stone-300">(11) 3333-3333</p>
              <a href="mailto:grdmadmoveis@gmail.com" className="text-stone-300 hover:text-amber-500 transition-colors">
                grdmadmoveis@gmail.com
              </a>
            </div>

            <div className="group">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-stone-900 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-50 mb-2">Endereço</h3>
              <p className="text-stone-300">KM 21 da Raposo Tavares</p>
              <p className="text-stone-300">Granja Viana - Cotia - SP</p>
            </div>

            <div className="group">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-stone-900 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-50 mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/5511945237617?text=Olá! Gostaria de conversar no WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-stone-50 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;