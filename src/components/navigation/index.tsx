"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import Logo from "@/components/svg/logo.svg";
import { useNavStore } from "@/store/nav-store";
import ButtonInvite from "../button/button-invite";
import { default as Menu } from "./menu";
import ToggleButton from "./toggle-button";

const Navigation = () => {
  const { open, toggleNavigation } = useNavStore();

  return (
    <header className="shadow-md z-20 relative bg-neutral-white">
      <nav className="container mx-auto">
        <div className="relative flex justify-between items-center p-[1.0625rem] z-30">
          {/* Icon */}
          <div className="h-6">
            <Image
              src={Logo} // Use the imported logo
              alt="logo"
              priority
              className="object-cover h-full w-full"
            />
          </div>
          {/* Hamburger menu */}
          <ToggleButton
            isOpen={open}
            toggleOpen={() => toggleNavigation()}
            className="lg:hidden"
          />

          {/* Menu Horizontal */}
          <Menu className="hidden lg:flex" />

          <div className="hidden lg:flex justify-center items-center">
            <ButtonInvite />
          </div>
        </div>

        {/* Menu */}
        <div
          className={twMerge(
            "absolute inset-x-0 z-20 -translate-y-full opacity-0 transition duration-300 m-6 bg-neutral-white text-primary-dark-blue text-center rounded-md shadow-md",
            open && "translate-y-0 opacity-100",
          )}
        >
          {/* Menu Vertical */}
          <Menu className="flex flex-col" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
