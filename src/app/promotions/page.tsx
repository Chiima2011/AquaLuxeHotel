"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function PromotionsPage() {
  const pomotionSlides = [
    { id: 1, src: "/images/Pro1.png", alt: "Pomotion Image 1" },
    { id: 2, src: "/images/Pro2.png", alt: "Pomotion Image 2" },
    { id: 3, src: "/images/Pro3.png", alt: "Pomotion Image 3" },
  ];

  const [bgImage, setBgImage] = useState("/images/bgPromotion.png");
      
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBgImage("/images/bgMbPromotion.png");
      } else {
        setBgImage("/images/bgPromotion.png");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative min-h-screen w-full p-8 flex flex-col items-center py-8">
      <div className="absolute inset-0 -z-10">
        <Image 
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="fill"
          quality={100}
          priority
        />
      </div>
      <div className="mt-[45px]">
        <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center">Pomotion</h1>
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
            {pomotionSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-[400px]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    layout="fill"
                    objectFit="fill"
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

export default PromotionsPage;
