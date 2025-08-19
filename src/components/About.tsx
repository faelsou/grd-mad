import React from 'react';
import { Factory, Cog, MapPin, Zap } from 'lucide-react';

const Factory = () => {
  const stats = [
    { icon: Factory, number: "2000+", label: "Chapas por Mês" },
    { icon: Cog, number: "4.0", label: "Marcenaria Tecnológica" },
    { icon: MapPin, number: "KM 21", label: "Raposo Tavares" },
    { icon: Zap, number: "100%", label: "Tecnologia de Ponta" }
  ];

  return (
    <section id="fabrica" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              A <span className="text-amber-600">Fábrica</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                A <strong className="text-amber-600">GRD MAD</strong> é uma fábrica de móveis planejados, 
                atualmente localizada na região da Granja Viana no KM 21 da rodovia Raposo Tavares.
              </p>
              
              <p className="text-lg text-stone-700 leading-relaxed">
                Possuímos a capacidade de corte, fitagem e montagem de mais de <strong className="text-amber-600">2000 chapas por mês</strong>, 
                expandindo suas atividades exponencialmente e demonstrando cada vez mais comprometimento com nossos clientes.
              </p>
              
              <p className="text-lg text-stone-700 leading-relaxed mt-4">
                Nossa linha de produção conta com exclusivo método de fabricação, com alta tecnologia, 
                experiência em uma linha de montagem muito prática e ágil baseada em anos de expertise no ramo moveleiro.
              </p>
              
              <p className="text-lg text-stone-700 leading-relaxed mt-4">
                Contamos com todo nosso maquinário industrial seguindo as práticas mais inovadoras baseadas no 
                método de <strong className="text-amber-600">marcenaria 4.0</strong>, a fim de trazer tecnologias de ponta para nossos clientes.
              </p>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Fábrica GRD MAD"
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
