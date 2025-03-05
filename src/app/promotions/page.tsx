"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function PromotionsPage() {
  const pomotionSlides = [
    { id: 1, src: "/images/S__23584789.jpg", alt: "Pomotion Image 1" },
    { id: 2, src: "/images/S__23584789.jpg", alt: "Pomotion Image 2" },
    { id: 3, src: "/images/S__23584789.jpg", alt: "Pomotion Image 3" },
  ];

  return (
    <div className="mt-[50px] min-h-screen w-full bg-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Pomotion</h1>
      <div className="w-full max-w-3xl">
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
          {pomotionSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[400px]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PromotionsPage;
