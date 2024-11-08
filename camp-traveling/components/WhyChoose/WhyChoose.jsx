import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { WHY_CHOOSE_US } from "@/constans";

const WhyChoose = () => {
  return (
    <div className=" container mx-auto mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center" >
            <Image src='/why_choouse_us.png' width={100} data-aos="fade-right" data-aos-delay={300} height={100} layout="responsive" alt="choose_us"/>
            <div className="flex flex-col">
                <div className="title">
                    <h3 className="text-4xl font-roboto font-bold">Why Choose Us</h3>
                    <p className="text-lg font-roboto font-medium mt-4">
                    Enjoy different experiences in every place you visit and discover new and affordable adventures of course.
                    </p>
                    <div className="mt-8">
                        {WHY_CHOOSE_US.map((item,index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={item.delay} className="flex items-center p-6 first:shadow-md" >
                                <Image src={item.icon} width={50} height={50} className="p-3 bg-slate-100 rounded-md mr-2" alt={item.title}/>
                                <div>
                                    <h4 className="text-xl font-bold font-roboto">{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhyChoose;
