"use client";

import { Transition } from "@headlessui/react";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Billboard from "../billboard";

interface CarouselProps {
  billboards: {
    id: string;
    label: string | null;
    description: string | null;
    imageUrl: string | null;
  }[];
}

const CustomCarousel: FC<CarouselProps> = ({ billboards }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === billboards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [billboards.length]);

  return (
    <div className="relative h-[450px]">
      {billboards.map((billboard, index) => (
        <Transition
          key={index}
          show={currentImage === index}
          enter="transition-opacity ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Billboard data={billboard} />
        </Transition>
      ))}
    </div>
  );
};

export default CustomCarousel;
