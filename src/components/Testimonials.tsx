// import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  // Depoimentos
  const testimonials = [
    {
      name: "Arq. Marina Silva",
      role: "Arquiteta Especialista",
      company: "Silva Arquitetura",
      text:
        "Parceria excepcional! A GRD MAD transformou nossos projetos em realidade com precisão e qualidade incomparáveis.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Amanda Duarte",
      role: "Cliente Residencial",
      company: "Família Duarte",
      text:
        "Superaram todas as expectativas! Nossa casa ficou exatamente como sonhamos. Profissionalismo e qualidade únicos.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Eng. Roberto Santos",
      role: "Engenheiro Civil",
      company: "Construtora Premiere",
      text:
        "Trabalho impecável em todos os empreendimentos. Pontualidade e acabamento premium que nossos clientes adoram.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  // Clientes / Logos
  const partners = [
    { name: "Arauco", logo: "/logos/ARAUCO.png" },
    { name: "Duratex", logo: "/logos/DURATEX.jpg" },
    { name: "Eucatex", logo: "/logos/EUCATEX.png" },
    { name: "FGV", logo: "/logos/FGV.png" },
    { name: "Guiararapes", logo: "/logos/GUIARARAPES.png" },
    { name: "Jomarca Parafusos", logo: "/logos/JOMARCA-PARAFUSOS.png" },
    { name: "RFC", logo: "/logos/RFC.png" },
    { name: "Rometal", logo: "/logos/ROMETAL.png" },
  ];

  // Fallback para iniciais caso não exista imagem
// Fallback para iniciais caso não exista imagem
  const getInitials = (name: string): string =>
    name
      .split(" ")
      .map((part: string) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
  

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
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
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute top-4 right-4 text-amber-500">
                  <Quote size={24} />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-current" />
                  ))}
                </div>

                <p className="text-stone-700 mb-6 leading-relaxed italic">"{t.text}"</p>

                <div className="flex items-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-stone-900">{t.name}</div>
                    <div className="text-sm text-stone-600">{t.role}</div>
                    <div className="text-xs text-amber-600 font-medium">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Logos dos Clientes */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-stone-900 mb-8">
              Nossos <span className="text-amber-600">Clientes</span>
            </h3>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-24 h-24 bg-stone-200 rounded-full overflow-hidden hover:bg-amber-500 transition-all duration-300 group shadow-md"
                  title={partner.name}
                >
                  {partner.logo && partner.logo.startsWith("/logos/") ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"; // Esconde a imagem se não carregar
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector("span[data-fallback]")) {
                          const span = document.createElement("span");
                          span.setAttribute("data-fallback", "true");
                          span.className =
                            "font-bold text-lg text-stone-700 group-hover:text-white";
                          span.textContent = getInitials(partner.name);
                          parent.appendChild(span);
                        }
                      }}
                    />
                  ) : (
                    <span className="font-bold text-lg text-stone-700 group-hover:text-white">
                      {getInitials(partner.name)}
                    </span>
                  )}
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
