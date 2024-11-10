"use client"

import { Button } from "@/components/ui/button";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import DestinationsCards from "@/components/Cards/DestinationsCards";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import PlanVacation from "@/components/PlanVacation/PlanVacation";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })

  return (
    <div>
      <div className="bg-gradient-to-b from-[#E3F7FD]   via-white via-40%">
        <Navbar />
        <Hero />
        <div id="destinations">
          <DestinationsCards />
        </div>
        <div id="about_us" >
          <WhyChoose />
        </div>
        <div id="contact_us">
          <PlanVacation  />
        </div>
        <Footer />
      </div>

    </div>
  );
}
