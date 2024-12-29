import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Link {
  link: string;
  name: string;
}

const links: Link[] = [
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

interface MenuProps {
  className?: string;
}

const Menu = ({ className }: MenuProps) => {
  return (
    <ul
      className={twMerge("gap-4 p-4 text-xl text-primary-dark-blue", className)}
    >
      {links.map((menu) => (
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
  );
};

export default Menu;
