"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const listMenuMojito = [
  { id: 1, name: "Tropical Mojito", imagePath: "/images/TropicalMojito.png"},
  { id: 2, name: "Lemon Mojito", imagePath: "/images/LemonMojito.png"},
  { id: 3, name: "Minty Citrus Mojito", imagePath: "/images/MintyCitrusMojito.png" },
  { id: 4, name: "Blue Lagoon Mojito", imagePath: "/images/BlueLagoonMojito.png"},
  { id: 5, name: "Pineapple Mojito", imagePath: "/images/PineappleMojito.png"},
  { id: 6, name: "Berry Blast Mojito", imagePath: "/images/BerryBlastMojito.png"},
  { id: 7, name: "Coconut Mojito", imagePath: "/images/CoconutMojito.png"},
  { id: 8, name: "Cherry Mojito", imagePath: "/images/CherryMojito.png"},
  { id: 9, name: "Mango Mojito", imagePath: "/images/MangoMojito.png"},
  { id: 10, name: "Lychee Mojito", imagePath: "/images/LycheeMojito.png"},
];

function MojitotPage() {
  const [bgImage, setBgImage] = useState("/images/bgMojito.png");
      
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBgImage("/images/bgMbMojito.png");
      } else {
        setBgImage("/images/bgMojito.png");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative min-h-screen w-full p-8">
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
        <h1 className="mb-6 text-3xl font-bold text-center text-white">Mojito Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {listMenuMojito.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="relative w-full h-40">
                  <Image
                    src={item.imagePath || "/images/placeholder.jpg"}
                    alt={item.name}
                    layout="fill"
                    objectFit="fill"
                    className="object-cover rounded-t-lg"
                  />
              </div>
              <div className="p-2 text-center">
                <h2 className="font-semibold text-lg mb-2 text-gray-700">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MojitotPage;
