import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline' // Importando ícones do Heroicons

const Header = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu no mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-24 flex items-center justify-between px-6 sm:px-12 md:px-20"
    >
      {/* Logo ou Título */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-pacifico text-white">
        Jonathas
      </div>

      {/* Ícone de menu no mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navegação para desktop */}
      <div className="hidden sm:flex space-x-6 sm:space-x-8 md:space-x-12 text-white text-base sm:text-lg md:text-xl">
        {children}
      </div>

      {/* Menu responsivo (aparece apenas no mobile) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute top-24 left-0 w-full bg-[#1a1a1a] py-4 flex flex-col items-center space-y-4`}
      >
        {children}
      </div>
    </motion.header>
  );
};

export default Header;
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
