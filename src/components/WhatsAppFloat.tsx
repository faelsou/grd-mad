import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
    }`}>
      <a
        href="https://wa.me/5511945237617?text=Olá! Gostaria de solicitar um orçamento para móveis planejados."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default WhatsAppFloat;