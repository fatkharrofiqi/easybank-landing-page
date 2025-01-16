"use client";

import { Menu, X } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ToggleButtonProps {
  isOpen: boolean;
  toggleOpen: () => void;
  className?: string;
}

const ToggleButton = ({ isOpen, toggleOpen, className }: ToggleButtonProps) => {
  return (
    <button
      onClick={toggleOpen}
      className={twMerge(
        "relative flex size-8 text-primary-dark-blue items-center justify-center transition-transform duration-300",
        className,
      )}
      aria-label="Toggle menu"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <Menu size={32} />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition duration-300 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <X size={32} />
      </span>
    </button>
  );
};

export default ToggleButton;
