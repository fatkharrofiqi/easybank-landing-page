import Logo from "@/components/svg/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import ButtonInvite from "../button/button-invite";
import FacebookIcon from "../svg/icon-facebook";
import InstagramIcon from "../svg/icon-instagram";
import PinterestIcon from "../svg/icon-pinterest";
import TwitterIcon from "../svg/icon-twitter";
import YouTubeIcon from "../svg/icon-youtube";

const Footer = () => {
  return (
    <footer className="bg-primary-dark-blue">
      <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[2fr,2fr,3fr] place-items-center gap-8">
        <div className="flex flex-col gap-8 items-center md:justify-around lg:justify-between md:items-start md:gap-0 h-full w-full">
          <div className="h-6">
            <Image
              src={Logo}
              alt="logo"
              priority
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex gap-6">
            <div className="hover:fill-primary-lime-green fill-neutral-white cursor-pointer transition duration-150">
              <FacebookIcon fill="fill-primary-lime-green" />
            </div>
            <div className="hover:fill-primary-lime-green fill-neutral-white cursor-pointer transition duration-150">
              <YouTubeIcon fill="fill-primary-lime-green" />
            </div>
            <div className="hover:fill-primary-lime-green fill-neutral-white cursor-pointer transition duration-150">
              <TwitterIcon fill="fill-primary-lime-green" />
            </div>
            <div className="hover:fill-primary-lime-green fill-neutral-white cursor-pointer transition duration-150">
              <PinterestIcon fill="fill-primary-lime-green" />
            </div>
            <div className="hover:fill-primary-lime-green fill-neutral-white cursor-pointer transition duration-150">
              <InstagramIcon fill="fill-primary-lime-green" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-rows-3 md:grid-flow-col gap-x-8 xl:gap-x-32">
          <Link
            href={"#"}
            passHref
            className="text-[0.9375rem] leading-[2.25] hover:text-primary-lime-green transition duration-150"
          >
            About Us
          </Link>
          <Link
            href={"#"}
            passHref
            className="text-[0.9375rem] leading-[2.25] hover:text-primary-lime-green transition duration-150"
          >
            Contact
          </Link>
          <Link
            href={"#"}
            passHref
            className="text-[0.9375rem] leading-[2.25] hover:text-primary-lime-green transition duration-150"
          >
            Blog
          </Link>
          <Link
            href={"#"}
            passHref
            className="text-[0.9375rem] leading-[2.25] hover:text-primary-lime-green transition duration-150"
          >
            Careers
          </Link>
          <Link
            href={"#"}
            passHref
            className="text-[0.9375rem] leading-[2.25] hover:text-primary-lime-green transition duration-150"
          >
            Support
          </Link>
          <Link
            href={"#"}
            passHref
            className="text-[0.9375rem] leading-[2.25] hover:text-primary-lime-green transition duration-150"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center md:place-self-end md:items-end">
          <ButtonInvite />
          <p className="text-base md:text-sm text-neutral-grayish-blue">
            © EasyBank. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
