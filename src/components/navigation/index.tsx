"use client";

import { twMerge } from "tailwind-merge";

import { useNavStore } from "@/store/nav-store";
import ButtonInvite from "../button/button-invite";
import Logo from "../svg/logo";
import Menu from "./menu";
import ToggleButton from "./toggle-button";

const Navigation = () => {
  const { open, toggleNavigation } = useNavStore();

  return (
    <header className="shadow-md z-20 relative bg-neutral-white">
      <nav className="container mx-auto">
        <div className="relative flex justify-between items-center p-[1.0625rem] z-30">
          {/* Logo */}
          <Logo />

          {/* Hamburger menu */}
          <ToggleButton
            isOpen={open}
            toggleOpen={() => toggleNavigation()}
            className="lg:hidden"
          />

          {/* Menu Web */}
          <Menu className="hidden lg:flex lg:p-4" />

          <div className="hidden lg:flex justify-center items-center">
            <ButtonInvite />
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={twMerge(
            "absolute inset-x-0 z-20 -translate-y-full opacity-0 transition duration-300 m-6 bg-neutral-white text-primary-dark-blue text-center rounded-md shadow-md",
            open && "translate-y-0 opacity-100",
          )}
        >
          <Menu className="flex flex-col" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
