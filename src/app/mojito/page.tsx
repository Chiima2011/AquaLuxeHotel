"use client";
import React from "react";
import Image from "next/image";

const listMenuMojito = [
  { id: 1, name: "Tropical Mojito", imagePath: "/images/food.jpg"},
  { id: 2, name: "Lemon Mojito", imagePath: "/images/Coffee.jpg"},
  { id: 3, name: "Minty Citrus Mojito", imagePath: "/images/Mojito.jpg" },
  { id: 4, name: "Blue Lagoon Mojito", imagePath: "/images/spa.jpg"},
  { id: 5, name: "Pineapple Mojito", imagePath: "/images/promotion.jpg"},
  { id: 6, name: "Berry Blast Mojito", imagePath: "/images/travel.jpg"},
  { id: 7, name: "Coconut Mojito", imagePath: "/images/important.jpg"},
  { id: 8, name: "Cherry Mojito", imagePath: "/images/important.jpg"},
  { id: 9, name: "Mango Mojito", imagePath: "/images/important.jpg"},
  { id: 10, name: "Lychee Mojito", imagePath: "/images/important.jpg"},
];

function MojitotPage() {
  return (
    <div className="relative min-h-screen screen w-[100%] bg-gray-100 p-8">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-600">Mojito Menu</h1>
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
                  fill
                  className="object-cover rounded-t-lg"
                />
            </div>
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2 text-gray-700">{item.name}</h2>
              <p className="text-sm text-gray-500">Short description or detail</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MojitotPage;
