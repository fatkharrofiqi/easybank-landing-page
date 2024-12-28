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
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <Menu size={32} />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition duration-300 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <X size={32} />
      </div>
    </button>
  );
};

export default ToggleButton;
