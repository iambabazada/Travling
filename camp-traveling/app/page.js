"use client"

import { Button } from "@/components/ui/button";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Navbar from "@/components/Navbar/Navbar";

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
    <div data-aos="fade-up">
      <Navbar />
    </div>
  );
}
