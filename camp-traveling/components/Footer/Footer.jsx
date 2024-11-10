import React from "react";
import { Button } from "../ui/button";
import { NAV_LINKS } from "@/constans";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-auto lg:h-[550px] bg-primary rounded-tl-2xl pt-24 rounded-tr-2xl relative">
      <div data-aos="fade-up" data-aos-delay="100" className="backdrop-blur-sm bg-white/30  container mx-auto border-[1px] border-solid border-gray-300 flex-col flex items-center lg:flex-row gap-4 text-center px-4 lg:text-start justify-between p-12 rounded-lg">
        <div>
          <p className="font-nunito text-white ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h3 className="font-nunito font-semibold text-4xl text-white">
            The Beauty of Indonesia
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="default" size="lg">
            Sign In
          </Button>
          <Button variant="outline" size="lg">
            Sign Up
          </Button>
        </div>
      </div>
      <div className="container mx-auto mt-20 px-4">
        <div  className="flex flex-col lg:flex-row gap-4 justify-between border-b-[1px] pb-5 ">
          <div>
            <h3 className="text-3xl font-bold text-white">Travling!</h3>
            <ul className="flex gap-6 text-white font-light font-nunito">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white text-md font-medium">Get The App</p>
            <div className="flex gap-4 mt-4">
              <Button className="bg-black border-white border-[1px]" size="sm">
                Google Play
              </Button>
              <Button className="bg-black border-white border-[1px]" size="sm">
                App Store
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-5 flex justify-between pb-4">
          <div className="text-white text-lg">© 2024 Travling.com</div>
          <div className="flex gap-4 items-center ">
            <Link href={''} className="text-white">
              <Instagram />
            </Link>
            <Link href={''} className="text-white">
              <Twitter />
            </Link>
            <Link href={''} className="text-white">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
