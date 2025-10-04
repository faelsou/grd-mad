import React from "react";
import { ArrowRight, MessageCircle, Users } from "lucide-react";
import useWhatsAppLink from "../hooks/useWhatsAppLink";

<<<<<<< HEAD
const Hero = () => {
  const solicitarOrcamentoLink = useWhatsAppLink({
    message: "Olá! Gostaria de solicitar um orçamento na GRD MAD.",
    source: "cta_orcamento",
  });

  const sejaClienteLink = useWhatsAppLink({
    message: "Olá! Tenho interesse em me tornar cliente da GRD MAD.",
    source: "cta_seja_cliente",
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 px-6 sm:px-8 py-24 sm:py-32">
      <div className="absolute inset-0 bg-black/40"></div>
=======
type HeroProps = { open: boolean };

const Hero: React.FC<HeroProps> = ({ open }) => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      {/* Camadas de fundo */}
      <div className="absolute inset-0 bg-black/40" />
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
<<<<<<< HEAD
            "url(https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)",
        }}
      ></div>

      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-stone-50 mb-6 leading-tight">
=======
            'url(https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative max-w-4xl mx-auto px-4">
        <h1 className="text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-stone-50 mb-6 leading-tight">
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
          Design Sob Medida para
          <span className="block text-amber-500">Ambientes Únicos</span>
        </h1>

<<<<<<< HEAD
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
          Soluções exclusivas em móveis planejados para projetos residenciais e
          corporativos, com acabamento premium e tecnologia de ponta.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-300 max-w-2xl mx-auto">
          Fábrica de móveis planejados com capacidade de produção de mais de
          2000 chapas por mês. Tecnologia de ponta com método de marcenaria 4.0
          e linha de produção exclusiva.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
          <a
            href={solicitarOrcamentoLink.href}
            onClick={solicitarOrcamentoLink.onClick}
=======
        <p className="text-[clamp(.95rem,2.8vw,1.25rem)] text-stone-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Soluções exclusivas em móveis planejados para projetos residenciais e corporativos,
          com acabamento premium e tecnologia de ponta.
        </p>

        <p className="text-[clamp(.9rem,2.4vw,1.125rem)] text-stone-300 mb-10 max-w-2xl mx-auto">
          Fábrica de móveis planejados com capacidade de produção de mais de 2000 chapas por mês.
          Tecnologia de ponta com método de marcenaria 4.0 e linha de produção exclusiva.
        </p>

        {/* CTAs escondidos quando menu aberto */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-opacity duration-300 ${
            open ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <a
            href="https://wa.me/5511945237617?text=Olá! Gostaria de solicitar um orçamento na GRD MAD."
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-amber-500 hover:bg-amber-600 text-stone-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Solicitar Orçamento
<<<<<<< HEAD
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={20}
            />
          </a>

          <a
            href={sejaClienteLink.href}
            onClick={sejaClienteLink.onClick}
            target="_blank"
            rel="noopener noreferrer"
=======
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </a>

          <a
            href="https://wa.me/5511945237617?text=Olá! Gostaria de ser cliente na GRD MAD."
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
            className="group bg-amber-500 hover:bg-amber-600 text-stone-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Users size={20} />
            Seja nosso cliente
          </a>
        </div>
      </div>
<<<<<<< HEAD
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
=======

      {/* Indicador de rolagem */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
>>>>>>> 3119fc4 (fix: WhatsApp e header corrigidos)
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
