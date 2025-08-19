import React from 'react';
import { ArrowRight, Play, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      ></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-50 mb-6 leading-tight">
            Design Sob Medida para
            <span className="block text-amber-500">Ambientes Únicos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Soluções exclusivas em móveis planejados para projetos residenciais e corporativos, 
            com acabamento premium e tecnologia de ponta.
          </p>
          
          <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto">
            Fábrica de móveis planejados com capacidade de produção de mais de 2000 chapas por mês. 
            Tecnologia de ponta com método de marcenaria 4.0 e linha de produção exclusiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/5511945237617?text=Olá! Gostaria de solicitar um orçamento na GRD MAD."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-amber-500 hover:bg-amber-600 text-stone-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Solicitar Orçamento
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
            
            <a 
              href="#portfolio"
              className="group bg-amber-500 hover:bg-amber-600 text-stone-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Users size={20} />
              Seja nosso cliente
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;