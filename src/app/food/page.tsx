"use client";
import React from "react";
// import Image from "next/image";

// const listMenuFood = [
//   {
//     id: 1,
//     name: "ข้าวไก่ผัดซอส",
//     description: "เมนูขายดีตลอดกาล",
//     price: 50,
//     imagePath: "/images/MangoMojito.png",
//   },
//   {
//     id: 2,
//     name: "ปูผัดผงกระหรี่",
//     description: "เมนูที่สาวๆ ชื่นชอบ",
//     price: 70,
//     imagePath: "/images/MangoMojito.png",
//   },
//   {
//     id: 3,
//     name: "ก๋วยเตี๋ยวต้มยำ",
//     description: "เมนูแซ่บๆ รสชาติถึงใจ",
//     price: 60,
//     imagePath: "/images/MangoMojito.png",
//   },
// ];

const mainMenu = [
  { name: "Fried Rice", price: 199 },
  { name: "Sirloin Steak", price: 259 },
  { name: "Spicy Chicken", price: 179 },
  { name: "Grilled Salmon Fish", price: 299 },
  { name: "Deep Bake Goose", price: 179 },
];

const appetizersMenu = [
  { name: "Mozzarella Sticks", price: 139 },
  { name: "French Fries", price: 139 },
  { name: "Chicken Fingers", price: 159 },
  { name: "Broccoli Cheddar", price: 179 },
  { name: "Soup", price: 99 },
  { name: "Potato Wedges", price: 99 },
  { name: "Chunky Onion Rings", price: 159 },
];

const drinksMenu = [
  { name: "Mineral Water", price: 139 },
  { name: "Jasmine Tea", price: 139 },
  { name: "Lemonade", price: 159 },
  { name: "Fresh Juice", price: 179 },
  { name: "Smoothie", price: 199 },
];
function FoodPage() {
  return (
    <div className="mt-[50px] relative min-h-screen w-[100%] bg-gradient-to-b from-yellow-100 to-orange-300 p-8">
      <h1 className="mb-3 text-3xl font-bold text-center text-gray-800">
        Borcelle Restaurant Menu
      </h1>
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* กล่อง Coffee */}
          <div className=" text-black p-6 ">
            <div className="justify-center bg-white items-center">
              <h2 className="text-lg font-bold mb-4 text-center justify-center">MAIN COURSE</h2>
            </div>
            <ul className="space-y-2">
              {mainMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between font-bold">
                  <span>{item.name}</span>
                  <span>{item.price} $</span>
                </li>
              ))}
            </ul>
          </div>

          {/* กล่อง Burger */}
          <div className=" text-black p-6 ">
            <div className="justify-center bg-white items-center">
              <h2 className="text-lg font-bold mb-4 text-center justify-center">APPETIZERS</h2>
            </div>
            <ul className="space-y-2">
              {appetizersMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between font-bold">
                  <span>{item.name}</span>
                  <span>{item.price} $</span>
                </li>
              ))}
            </ul>
          </div>

          {/* กล่อง ICE CREAM */}
          <div className=" text-black p-6 ">
            <div className="justify-center bg-white items-center">
              <h2 className="text-lg font-bold mb-4 text-center justify-center">DRINKS</h2>
            </div>
            <ul className="space-y-2">
              {drinksMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between font-bold">
                  <span>{item.name}</span>
                  <span>{item.price} $</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      {/* <div className="max-w-4xl mx-auto flex flex-col gap-6">
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
      </div> */}
    </div>
  );
}

export default FoodPage;
