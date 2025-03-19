"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// ข้อมูล Coffee
const coffeeMenu = [
  { name: "Espresso", price: 80 },
  { name: "Cappuccino", price: 80 },
  { name: "Mocha", price: 70 },
  { name: "Macchiato", price: 80 },
  { name: "Affogato", price: 80 },
  { name: "Flat White", price: 80 },
  { name: "Double Espresso", price: 80 },
];

// ข้อมูล Burger
const burgerMenu = [
  { name: "Pug Burger", price: 99 },
  { name: "Beef Burger", price: 99 },
  { name: "Fruit Burger", price: 89 },
  { name: "Chile Stuffed", price: 89 },
  { name: "Cheese Burger", price: 79 },
  { name: "Butter Burger", price: 79 },
  { name: "Vegan Burgar", price: 89 },
];

// ข้อมูล Ice Cream
const iceCreamMenu = [
  { name: "Cookie Dough", price: 120 },
  { name: "Vanilla Bean", price: 149 },
  { name: "Cotton Candy", price: 120 },
  { name: "Peanut Butter", price: 120 },
  { name: "Salted Caramel", price: 100 },
  { name: "Coconut Crush", price: 129 },
];

// ข้อมูล Desserts
const dessertsMenu = [
  { name: "Croissant", price: 99 },
  { name: "Custards", price: 89 },
  { name: "Apple Pie", price: 89 },
  { name: "Pecan Pie", price: 89 },
  { name: "Banana Pie", price: 99 },
  { name: "Gulab Jamun", price: 79 },
];

function CoffeePage() {
  const [bgImage, setBgImage] = useState("/images/bgCoffee.png");
    
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBgImage("/images/bgMbCoffee.png");
      } else {
        setBgImage("/images/bgCoffee.png");
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
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Menu
        </h1>
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* กล่อง Coffee */}
          <div className="bg-[#6B4E3D] text-white p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-4">COFFEE</h2>
            <ul className="space-y-2">
              {coffeeMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* กล่อง Burger */}
          <div className="bg-[#6B4E3D] text-white p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-4">BURGER</h2>
            <ul className="space-y-2">
              {burgerMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* กล่อง ICE CREAM */}
          <div className="bg-[#6B4E3D] text-white p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-4">ICE CREAM</h2>
            <ul className="space-y-2">
              {iceCreamMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* กล่อง DESSERTS */}
          <div className="bg-[#6B4E3D] text-white p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-4">DESSERTS</h2>
            <ul className="space-y-2">
              {dessertsMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeePage;
