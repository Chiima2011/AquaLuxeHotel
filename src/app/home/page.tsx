"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const listMenu = [
  { id: 1, name: "Food", imagePath: "/images/food.jpg", path: "/food" },
  { id: 2, name: "Coffee", imagePath: "/images/Coffee.jpg", path: "/coffee" },
  { id: 3, name: "Mojito", imagePath: "/images/Mojito.jpg", path: "/mojito" },
  { id: 4, name: "Spa", imagePath: "/images/spa.jpg", path: "/spa" },
  { id: 5, name: "Promotions", imagePath: "/images/promotion.jpg", path: "/promotions" },
  { id: 6, name: "Travel Concierge", imagePath: "/images/travel.jpg", path: "/travelConcierge" },
  { id: 7, name: "Important", imagePath: "/images/important.jpg", path: "/important" },
];

function Homepage() {
  return (
    <div className="relative min-h-screen w-[100%] bg-gray-100 p-8">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-600">AquaLuxeHotel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listMenu.map((item) => (
          <Link key={item.id} href={item.path}>
            <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
