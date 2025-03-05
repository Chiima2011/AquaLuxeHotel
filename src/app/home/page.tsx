"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const listMenu = [
  { id: 1, name: "Food", imagePath: "/images/Food.png", path: "/food" },
  { id: 2, name: "Coffee", imagePath: "/images/Coffee.png", path: "/coffee" },
  { id: 3, name: "Mojito", imagePath: "/images/Mojito.png", path: "/mojito" },
  { id: 4, name: "Spa", imagePath: "/images/Spa.png", path: "/spa" },
  { id: 5, name: "Promotions", imagePath: "/images/Promotion.png", path: "/promotions" },
  { id: 6, name: "Travel Concierge", imagePath: "/images/Travel.png", path: "/travelConcierge" },
  { id: 7, name: "Important", imagePath: "/images/Important.png", path: "/important" },
];

function Homepage() {
  return (
    <div className="mt-[50px] relative min-h-screen w-full bg-gradient-to-b from-[#F6DED8] to-[#F2B28C] p-8">
      <h1 className="mb-4 text-3xl font-bold text-center text-gray-600">Menu</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listMenu.map((item) => (
          <Link key={item.id} href={item.path}>
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
              <div className="w-full aspect-square relative">
                <Image
                  src={item.imagePath || "/images/placeholder.jpg"}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center font-semibold text-gray-700">{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
