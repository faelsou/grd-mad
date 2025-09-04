import { useState } from "react";

// IMPORTS das imagens locais (ajuste os que quiser usar)
import cozPremium from "../assets/Portifolio/cozinhas/cozinha-premium.jpg";
import cozinha1   from "../assets/Portifolio/cozinhas/cozinha1.jpg";
//import cozinha2   from "../assets/Portifolio/cozinhas/5.jpg";
//import cozinha3   from "../assets/Portifolio/cozinhas/6.JPEG";
//import cozinha4   from "../assets/Portifolio/cozinhas/9.JPEG";
//import cozinha5   from "../assets/Portifolio/cozinhas/cozinha2.jpg";
import sala1      from "../assets/Portifolio/salas/sala1.jpg";
import sala2      from "../assets/Portifolio/salas/sala2.jpg";
import sala3      from "../assets/Portifolio/salas/sala8.jpg";
import sala4      from "../assets/Portifolio/salas/sala12.jpg";
//import sala5      from "../assets/Portifolio/salas/sala13.JPEG";
import sala6      from "../assets/Portifolio/salas/sala27.jpg";
import quarto1    from "../assets/Portifolio/quartos/quarto1.jpg";
//import quarto2    from "../assets/Portifolio/quartos/quarto6.JPEG";
import banheiro1  from "../assets/Portifolio/banheiro/banheiro1.jpg";
//import banheiro2  from "../assets/Portifolio/banheiro/banheiro2.jpg";
//import banheiro2  from "../assets/Portifolio/banheiro/banheiro2.jpg";
import corp1      from "../assets/Portifolio/corporativo/corp1.jpg";
import corp2      from "../assets/Portifolio/corporativo/corp13.jpg";
import corp3      from "../assets/Portifolio/corporativo/corp20.jpg";
import corp4      from "../assets/Portifolio/corporativo/corp21.jpg";
//import pesp1      from "../assets/Portifolio/projetos-especiais/gourmet3.jpg";
//import pesp2      from "../assets/Portifolio/projetos-especiais/gourmet11.jpg";



const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<
    "todos" | "cozinhas" | "salas" | "quartos" | "corporativo" | "especiais"
  >("todos");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const filters = [
    { id: "todos", label: "Todos" },
    { id: "cozinhas", label: "Cozinhas" },
    { id: "salas", label: "Salas" },
    { id: "quartos", label: "Quartos" },
    { id: "banheiros", label: "Banheiros" },
    { id: "corporativo", label: "Corporativo" },
    { id: "especiais", label: "Projetos Especiais" },
  ] as const;

  // Use as variáveis importadas em vez de strings /assets/...
  const projects = [
    {
      id: 1,
      category: "cozinhas",
      title: "Cozinha Moderna Premium",
      image: cozPremium,
    },
    {
      id: 2,
      category: "salas",
      title: "Sala de Estar Elegante",
      image: sala1,
    },
    {
      id: 3,
      category: "quartos",
      title: "Quarto Casal Sofisticado",
      image: quarto1,
    },
    {
      id: 4,
      category: "corporativo",
      title: "Escritório Executivo",
      image: corp1,
    },
    {
      id: 5,
      category: "cozinhas",
      title: "Cozinha Gourmet",
      image: cozinha1,
    },
    {
      id: 6,
      category: "banheiros",
      title: "Banheiro Contemporânea",
      image: banheiro1,
    },
    {
      id: 7,
      category: "salas",
      title: "Sala Integrada Contemporânea",
      image: sala2,
    },
    {
      id: 8,
      category: "cozinhas",
      title: "Cozinha Gourmet",
      image: sala4,
    },
    {    
      id: 9,
      category: "salas",
      title: "Sala",
      image: sala3,
    },
    {
      id: 10,
      category: "salas",
      title: "Sala",
      image: sala4,
    },
//    {
//      id: 11,
//      category: "salas",
//      title: "Sala",
//      image: sala5,
//    },
    {
      id: 11,
      category: "salas",
      title: "Sala",
      image: sala6,
    },
    {
      id: 12,
      category: "corporativo",
      title: "corporativo",
      image: corp2,
    },
    {
      id: 11,
      category: "corporativo",
      title: "corporativo",
      image: corp3,
    },
    {
      id: 11,
      category: "corporativo",
      title: "corporativo",
      image: corp4,
    },
    
  ] as const;

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section id="portfolio" className="py-20 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-50 mb-6">
              Nosso <span className="text-amber-500">Portfólio</span>
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Conheça alguns dos nossos projetos realizados com excelência
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === f.id
                    ? "bg-amber-500 text-stone-900"
                    : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-amber-500"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="group relative bg-stone-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(p.image)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // opcional: fallback de erro visual
                      (e.currentTarget as HTMLImageElement).style.opacity = "0";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-stone-50 mb-2">{p.title}</h3>
                    <button className="text-amber-500 hover:text-amber-400 font-semibold">
                      Ver imagem →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-stone-900 p-4 rounded-lg shadow-lg max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-stone-50 hover:text-amber-500 text-3xl font-bold p-2"
              aria-label="Fechar"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Imagem em tamanho real"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
