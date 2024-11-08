import React from "react";
import DestinationCard from "./DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Autoplay CSS dosyasını ekleyin
import { DESTINATIONS } from "../../constans/index";
import Title from "../Title/Title";

const DestinationsCards = () => {
  return (
    <section className="container mx-auto mt-12">
      <Title
        title="Popular Destinations"
        desc="Vacations to make your experience enjoyable in Indonesia!"
      />
      <div>
        <Swiper
          spaceBetween={50}
          className="grid grid-cols-4 gap-10 mt-8 w-full"
          slidesPerView={4}
          loop={true} // Sonsuz döngü için loop özelliği
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay ayarlarını yapın
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {DESTINATIONS.map((card, index) => (
            <SwiperSlide key={index}>
              <DestinationCard data={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DestinationsCards;
