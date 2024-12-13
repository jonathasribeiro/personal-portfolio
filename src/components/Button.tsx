import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label = "Home",
  onClick,
  variant = "secondary",
}) => {
  // Estilos base comuns a ambos os botões
  const baseStyles =
    "cursor-pointer px-6 py-2 rounded-lg text-base font-semibold leading-6 transition duration-300";

  // Estilos específicos para cada tipo de botão
  const variantStyles =
    variant === "primary"
      ? "text-white border-2 border-blue-500"
      : "text-white hover:text-sky-400"; // Botão secundário

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {label}
    </motion.button>
  );
};

export default Button;
