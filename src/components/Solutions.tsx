import React from 'react';
import { Building2, Home, FileText, Shield, Wrench, Headphones, Gem, Clock, Cpu } from 'lucide-react';

const Solutions = () => {
  const b2bFeatures = [
    { icon: FileText, text: "Desenvolvimento de projetos exclusivos com suporte técnico" },
    { icon: Gem, text: "Catálogo de materiais e acabamentos premium" },
    { icon: Clock, text: "Produção e instalação no prazo" },
    { icon: Building2, text: "Equipe especializada em grandes empreendimentos" }
  ];

  const b2cFeatures = [
    { icon: Headphones, text: "Consultoria personalizada" },
    { icon: Cpu, text: "Projeto 3D imersivo" },
    { icon: Home, text: "Design funcional para todos os ambientes" },
    { icon: Shield, text: "Garantia estendida e assistência pós-venda" }
  ];

  return (
    <section id="solucoes" className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Soluções para <span className="text-amber-600">Cada Público</span>
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              Atendemos tanto profissionais quanto clientes finais com excelência
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* B2B Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-stone-900 text-amber-500 rounded-full mr-4">
                  <Building2 size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">B2B</h3>
                  <p className="text-stone-600">Arquitetos, Engenheiros e Construtoras</p>
                </div>
              </div>

              <ul className="space-y-4">
                {b2bFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-amber-500 text-stone-900 rounded-full mr-3 mt-1 flex-shrink-0">
                      <feature.icon size={16} />
                    </div>
                    <span className="text-stone-700">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="mailto:contato@studiorplanejados.com.br?subject=Interesse em Parceria B2B"
                className="mt-8 w-full bg-stone-900 hover:bg-stone-800 text-stone-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 block text-center"
              >
                Seja nosso parceiro
              </a>
            </div>

            {/* B2C Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-stone-900 rounded-full mr-4">
                  <Home size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">B2C</h3>
                  <p className="text-stone-600">Clientes Finais</p>
                </div>
              </div>

              <ul className="space-y-4">
                {b2cFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-amber-500 text-stone-900 rounded-full mr-3 mt-1 flex-shrink-0">
                      <feature.icon size={16} />
                    </div>
                    <span className="text-stone-700">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/5511945237617?text=Olá! Gostaria de solicitar um orçamento para móveis planejados."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-amber-500 hover:bg-amber-600 text-stone-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 block text-center"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;