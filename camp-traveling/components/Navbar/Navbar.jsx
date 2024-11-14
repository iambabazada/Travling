import { NAV_LINKS } from "@/constans";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

const Navbar = () => (
  <nav className="container mx-auto pt-[40px] flex justify-between items-center px-4">
    <Link href="/" className="text-primary text-2xl font-bold">
      Travling!
    </Link>

    <ul className="hidden lg:flex gap-12 font-nunito">
      {NAV_LINKS.map((link) => (
        <Link key={link.key} href={link.href}>
          {link.label}
        </Link>
      ))}
    </ul>

    {/* <MenuIcon className="inline-block lg:hidden" /> */}

    <Button className="hidden lg:flex">Sign Up</Button>
  </nav>
);

export default Navbar;
