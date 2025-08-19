import React from 'react';
import { Clock, Zap, Truck, Package, Settings, Palette, Wrench, MapPin, Users, Tag, Target, Layers } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Clock,
      title: "Entrega de 25 a 30 dias corridos",
      description: "Prazo padrão de entrega para todos os projetos."
    },
    {
      icon: Zap,
      title: "Opção de pedido Express em 15 dias corridos",
      description: "Para projetos urgentes (Consulte condições)."
    },
    {
      icon: Truck,
      title: "Frete em SP, região metropolitana, interior e litoral",
      description: "Sem taxas abusivas para toda a região."
    },
    {
      icon: Package,
      title: "Fundo de gavetas de 15mm e armários 06mm",
      description: "Espessura diferenciada para maior resistência."
    },
    {
      icon: Settings,
      title: "Caixas e gavetas montadas",
      description: "Embaladas com cantoneiras e plástico stretch."
    },
    {
      icon: Palette,
      title: "Promob próprio com diversas cores",
      description: "Catálogo completo e opção curinga para flexibilizar escolhas."
    },
    {
      icon: Wrench,
      title: "Assistência técnica em até 7 dias corridos",
      description: "Suporte rápido e eficiente (Consulte valores)."
    },
    {
      icon: MapPin,
      title: "Fábrica localizada em Cotia",
      description: "KM 21 da Raposo Tavares, próximo ao rodoanel."
    },
    {
      icon: Users,
      title: "Salas de atendimento",
      description: "Para serem utilizadas pelos nossos clientes."
    },
    {
      icon: Tag,
      title: "Fita de 0.45mm com acabamento perfeito",
      description: "Utilização de cola PUR para máxima qualidade."
    },
    {
      icon: Target,
      title: "Corte em 45 graus",
      description: "Para portas e frentes de gavetas, com ou sem puxador."
    },
    {
      icon: Layers,
      title: "Etiqueta nas peças por ambiente",
      description: "Cor e numeração para melhor identificação."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-6">
              <span className="text-amber-500">DIFERENCIAIS GRD MAD</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Tecnologia, qualidade e agilidade em cada detalhe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className="group bg-stone-800 p-6 rounded-lg hover:bg-stone-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500 text-stone-900 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-stone-50 mb-3">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-stone-800 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-amber-500 mb-4">Benefícios Especiais</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-stone-300 leading-relaxed">
                    <strong className="text-amber-500">Cortesia de licença anual do Promob:</strong> A partir de R$25.000 em pedidos nos primeiros 30 dias, ou 50% da licença para valores de R$10.000 a R$24.900.
                  </p>
                </div>
                <div>
                  <p className="text-stone-300 leading-relaxed">
                    <strong className="text-amber-500">Principais marcas:</strong> Trabalhamos com FGVTN, RFC, Rometal, Jomarca, Schmitt, Jomer, MDFs, Duratex, Arauco, Guararapes e Eucatex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;