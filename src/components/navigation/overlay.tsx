"use client";

import { useNavStore } from "@/store/nav-store";
import { twMerge } from "tailwind-merge";

const Overlay = () => {
  const { open, toggleNavigation } = useNavStore();

  return (
    <div
      onClick={() => toggleNavigation()}
      className={twMerge(
        "cursor-pointer z-10 opacity-0 transition duration-200 inset-0 h-full w-full bg-gradient-to-b from-primary-dark-blue to-transparent",
        open && "opacity-100 absolute",
      )}
    />
  );
};

export default Overlay;
