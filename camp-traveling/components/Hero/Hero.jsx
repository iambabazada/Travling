import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowBigLeftIcon, ArrowDownUp, ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="container mx-auto mt-5 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center" >
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-4">
          <h1 className="font-poppins text-3xl lg:text-5xl font-bold">Start your journey by one click, explore beautiful world!</h1>
          <p className="text-sm lg:text-[16] font-poppins">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!</p>
          <div className="mt-4" data-aos="fade-up" >
            <Button>Try Demo <ArrowRightIcon /> </Button>
          </div>
        </div>
        <div className="relative flex flex-col justify-center "  data-aos-once="false" data-aos="fade-up" data-aos-delay="400">
          <Image
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
            alt="Hero Image"
            src={"/hero.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
