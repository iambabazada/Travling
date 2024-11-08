import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { SpaceIcon } from "lucide-react";

const DestinationCard = ({ data }) => {
  const { image, title, location, price, day,delay } = data;
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <Card>
        <CardHeader>
          <Image src={image} alt={title} layout="responsive" className="max-h-[180px] min-h-[180px] object-cover rounded-lg" width={100} height={100} />
        </CardHeader>
        <CardContent>
            <span className="text-[10px] text-[#8F8F8F]">
                {location}
            </span>
            <h1 className="text-[#333333]  font-nunito font-bold">
                {title}
            </h1>
            <span className="text-[14px] text-[#8F8F8F]">
                {day} Days
            </span>
        </CardContent>
        <CardFooter>
            <span className="text-primary">
                {price} $
            </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DestinationCard;
