import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'cozinhas', label: 'Cozinhas' },
    { id: 'salas', label: 'Salas' },
    { id: 'quartos', label: 'Quartos' },
    { id: 'corporativo', label: 'Corporativo' },
    { id: 'especiais', label: 'Projetos Especiais' }
  ];

  const projects = [
    {
      id: 1,
      category: 'cozinhas',
      title: 'Cozinha Moderna Premium',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 2,
      category: 'salas',
      title: 'Sala de Estar Elegante',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 3,
      category: 'quartos',
      title: 'Quarto Casal Sofisticado',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 4,
      category: 'corporativo',
      title: 'Escritório Executivo',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 5,
      category: 'cozinhas',
      title: 'Cozinha Gourmet',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: 6,
      category: 'especiais',
      title: 'Projeto Personalizado',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-amber-500 text-stone-900'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-amber-500'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-stone-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer" // Adicionado cursor-pointer
                onClick={() => openModal(project.image)} // Adicionado onClick para abrir o modal
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-stone-50 mb-2">{project.title}</h3>
                    <button className="text-amber-500 hover:text-amber-400 font-semibold">
                      Ver imagem → {/* Mudei o texto do botão para ser mais descritivo */}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Fecha o modal ao clicar fora da imagem
        >
          <div 
            className="relative bg-stone-900 p-4 rounded-lg shadow-lg max-w-4xl max-h-[90vh] overflow-auto"
            onClick={e => e.stopPropagation()} // Impede que o clique dentro do modal feche-o
          >
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-stone-50 hover:text-amber-500 text-3xl font-bold p-2"
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