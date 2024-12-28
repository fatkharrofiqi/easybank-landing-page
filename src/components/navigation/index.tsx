"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import Logo from "@/components/svg/logo.svg";
import Link from "next/link";
import ToggleButton from "./toggle-button";

interface Menu {
  link: string;
  name: string;
}

const menuList = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/contact",
    name: "Contact",
  },
  {
    link: "/blog",
    name: "Blog",
  },
  {
    link: "/careers",
    name: "Careers",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="relative flex bg-neutral-white justify-between items-center p-[1.0625rem] z-30 shadow-md">
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
          <ToggleButton isOpen={open} toggleOpen={() => setOpen(!open)} />
        </div>

        {/* Menu */}
        <div
          className={twMerge(
            "absolute inset-x-0 z-20 -translate-y-full opacity-0 transition duration-300 m-6 bg-neutral-white text-primary-dark-blue text-center rounded-md shadow-md",
            open && "translate-y-0 opacity-100",
          )}
        >
          <ul className="flex flex-col gap-4 p-6 text-xl">
            {menuList.map((menu) => (
              <li key={menu.link}>
                <Link
                  href={menu.link}
                  className="relative p-1 before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-gradient-to-r before:from-primary-lime-green before:to-primary-bright-cyan before:origin-left before:transition before:duration-300 before:mx-2 before:scale-x-0 before:hover:scale-x-100"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay */}
        <div
          onClick={() => setOpen(!open)}
          className={twMerge(
            "cursor-pointer z-10 opacity-0 transition duration-200 inset-0 h-full w-full bg-gradient-to-b from-primary-dark-blue to-transparent",
            open && "opacity-100 absolute",
          )}
        />
      </nav>
    </header>
  );
};

export default Navigation;
