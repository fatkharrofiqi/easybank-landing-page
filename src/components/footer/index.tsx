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
      <div className="container mx-auto py-10 px-6 flex flex-col items-center justify-center gap-8">
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
        <div className="flex flex-col items-center justify-center">
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
        <ButtonInvite />
        <div>
          <p className="text-[0.8125rem] text-neutral-grayish-blue">
            © EasyBank. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
