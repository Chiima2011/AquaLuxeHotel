"use client";
import React from "react";
import Image from "next/image";

const listMenuFood = [
  {
    id: 1,
    name: "ข้าวไก่ผัดซอส",
    description: "เมนูขายดีตลอดกาล",
    price: 50,
    imagePath: "/images/food.jpg",
  },
  {
    id: 2,
    name: "ปูผัดผงกระหรี่",
    description: "เมนูที่สาวๆ ชื่นชอบ",
    price: 70,
    imagePath: "/images/Coffee.jpg",
  },
  {
    id: 3,
    name: "ก๋วยเตี๋ยวต้มยำ",
    description: "เมนูแซ่บๆ รสชาติถึงใจ",
    price: 60,
    imagePath: "/images/Mojito.jpg",
  },
];

function FoodPage() {
  return (
    <div className="relative min-h-screen screen w-[100%] bg-[#fffbe8] p-8">
      <h1 className="mb-10 text-3xl font-bold text-center text-gray-800">
        เมนูแนะนำร้านอาหาร
      </h1>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {listMenuFood.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between ${
                isEven ? "flex-row-reverse text-right" : "flex-row text-left"
              }`}
            >
              <div className="flex-shrink-0 w-50 h-50 rounded-full overflow-hidden bg-amber-950 relative">
                <Image
                  src={item.imagePath || "/images/placeholder.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 px-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {item.price && (
                  <div className="mt-1 font-bold text-orange-600">
                    {item.price} บาท
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodPage;
