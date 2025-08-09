import React from 'react';
import { Award, Users, Clock, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Anos de Experiência" },
    { icon: Users, number: "500+", label: "Projetos Realizados" },
    { icon: Clock, number: "98%", label: "Prazos Cumpridos" },
    { icon: Zap, number: "100%", label: "Satisfação dos Clientes" }
  ];

  return (
    <section id="sobre" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Sobre a <span className="text-amber-600">Studio R Planejados</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Com mais de <strong className="text-amber-600">15 anos</strong> de experiência, 
                a Studio R Planejados é referência em móveis planejados de alto padrão. 
                Atuamos em parceria com arquitetos, engenheiros e construtoras, além de 
                atender clientes finais exigentes.
              </p>
              
              <p className="text-lg text-stone-700 leading-relaxed">
                Nosso processo une design autoral, tecnologia de fabricação de ponta e 
                instalação precisa, criando ambientes que encantam e funcionam. Cada projeto 
                é uma obra única, desenvolvida com atenção aos mínimos detalhes e máximo 
                cuidado na execução.
              </p>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Ambiente planejado Studio R"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-lg opacity-20"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 text-amber-500 rounded-full mb-4 group-hover:bg-amber-500 group-hover:text-stone-900 transition-all duration-300">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-bold text-stone-900 mb-2">{stat.number}</div>
                <div className="text-stone-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;