import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arq. Marina Silva",
      role: "Arquiteta Especialista",
      company: "Silva Arquitetura",
      text: "Parceria excepcional! A Studio R transformou nossos projetos em realidade com precisão e qualidade incomparáveis.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Eduardo",
      role: "Cliente Residencial",
      company: "Família Rodrigues",
      text: "Superaram todas as expectativas! Nossa casa ficou exatamente como sonhamos. Profissionalismo e qualidade únicos.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Eng. Roberto Santos",
      role: "Engenheiro Civil",
      company: "Construtora Premiere",
      text: "Trabalho impecável em todos os empreendimentos. Pontualidade e acabamento premium que nossos clientes adoram.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const partners = [
    { name: "Silva Arquitetura", logo: "SA" },
    { name: "Construtora Premiere", logo: "CP" },
    { name: "Design Urbano", logo: "DU" },
    { name: "Arquitetura Moderna", logo: "AM" }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              O que dizem nossos <span className="text-amber-600">clientes</span>
            </h2>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto">
              Depoimentos reais de quem confia na nossa expertise
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute top-4 right-4 text-amber-500">
                  <Quote size={24} />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-current" />
                  ))}
                </div>

                <p className="text-stone-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-stone-900">{testimonial.name}</div>
                    <div className="text-sm text-stone-600">{testimonial.role}</div>
                    <div className="text-xs text-amber-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-stone-900 mb-8">
              Nossos <span className="text-amber-600">Clientes</span>
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center w-24 h-24 bg-stone-200 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                  <span className="font-bold text-lg group-hover:text-white text-stone-700">
                    {partner.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;