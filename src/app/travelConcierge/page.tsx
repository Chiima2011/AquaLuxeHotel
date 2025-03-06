"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function TravelConciergePage() {
  const travelConciergeSlides = [
    { id: 1, src: "/images/Travel1.png", alt: "TravelConcierge Image 1" },
    { id: 2, src: "/images/Travel2.png", alt: "TravelConcierge Image 2" },
  ];

  return (
    <div className="relative min-h-screen w-full p-8 flex flex-col items-center py-8">
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/images/bgTravel.png"
          alt="Background"
          layout="fill"
          objectFit="fill"
          quality={100}
          priority
        />
      </div>
      <div className="mt-[45px]">
        <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center">TravelConcierge</h1>
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="rounded-lg overflow-hidden shadow"
          >
            {travelConciergeSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-[400px]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    layout="fill"
                    objectFit="fill"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TravelConciergePage;
