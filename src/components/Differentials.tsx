import React from 'react';
import { Gem, Handshake, Cpu, Leaf, Clock, Zap } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Gem,
      title: "Acabamento Premium",
      description: "Materiais nobres e ferragens importadas para máxima durabilidade e elegância."
    },
    {
      icon: Handshake,
      title: "Parceria Profissional",
      description: "Suporte técnico especializado para arquitetos, engenheiros e construtoras."
    },
    {
      icon: Cpu,
      title: "Tecnologia e Precisão",
      description: "Produção automatizada garantindo perfeição no encaixe e acabamento."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Madeira certificada e processos eco-friendly respeitando o meio ambiente."
    },
    {
      icon: Clock,
      title: "Cumprimento de Prazos",
      description: "Entrega rigorosamente dentro do cronograma acordado com o cliente."
    },
    {
      icon: Zap,
      title: "Entrega Expressa SP",
      description: "Enquanto algumas empresas demoram muito tempo para entregar algum item, entregamos no mesmo dia na região São Paulo."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-6">
              Nossos <span className="text-amber-500">Diferenciais</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de móveis planejados de alto padrão
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className="group bg-stone-800 p-8 rounded-lg hover:bg-stone-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-stone-900 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-50 mb-4">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;