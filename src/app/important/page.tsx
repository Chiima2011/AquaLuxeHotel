'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ImportantPage() {
  const [bgImage, setBgImage] = useState("/images/bgImportant.png");
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBgImage("/images/bgMbImportant.png");
      } else {
        setBgImage("/images/bgImportant.png");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full p-8 ">
      <div className="absolute inset-0 -z-10">
        <Image 
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="flex justify-center items-center min-h-screen p-8">
        <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
          {/* หัวข้อ */}
          <div className="inline-flex items-center px-5 py-3 bg-amber-700 rounded-full text-white font-semibold mb-6 shadow-md">
            <span className="text-2xl">📞</span>
            <span className="ml-3 text-lg">เบอร์โทรสำคัญภายในโรงแรม</span>
          </div>

          {/* รายการข้อมูล */}
          <ul className="space-y-6 text-gray-700 leading-relaxed w-full">
            {/* แผนกต้อนรับ */}
            <li className="flex items-start">
              <span className="mr-3 text-blue-500 text-lg">♦</span>
              <div>
                <p className="font-semibold text-lg">แผนกต้อนรับ (Front Desk): กด 0</p>
                <p className="text-sm text-gray-500">
                  For general inquiries, check-in, and check-out.
                </p>
              </div>
            </li>

            {/* รูมเซอร์วิส */}
            <li className="flex items-start">
              <span className="mr-3 text-pink-500 text-lg">★</span>
              <div>
                <p className="font-semibold text-lg">
                  บริการรูมเซอร์วิส (Room Service): กด 1
                </p>
                <p className="text-sm text-gray-500">
                  To order food, drinks, or request additional items.
                </p>
              </div>
            </li>

            {/* แม่บ้านทำความสะอาด */}
            <li className="flex items-start">
              <span className="mr-3 text-red-500 text-lg">♥</span>
              <div>
                <p className="font-semibold text-lg">
                  แม่บ้านทำความสะอาด (Housekeeping): กด 2
                </p>
                <p className="text-sm text-gray-500">
                  For extra towels, pillows, drinking water, or room cleaning.
                </p>
              </div>
            </li>

            {/* โรงพยาบาลใกล้เคียง */}
            <li className="flex items-start">
              <span className="mr-3 text-green-500 text-lg">♦</span>
              <div>
                <p className="font-semibold text-lg">
                  โรงพยาบาลใกล้เคียง: โรงพยาบาลกระบี่ (Krabi Hospital)
                </p>
                <p className="text-sm text-gray-500">
                  หมายเลขโทรศัพท์โรงพยาบาลกระบี่คือ 075-611-004. <br />
                  The Krabi Hospital is located in Krabi Town. <br />
                  The phone number for Krabi Hospital is 075-611-004.
                </p>
              </div>
            </li>

            {/* สถานีตำรวจ */}
            <li className="flex items-start">
              <span className="mr-3 text-rose-500 text-lg">★</span>
              <div>
                <p className="font-semibold text-lg">
                  สถานีตำรวจ: อ่าวนาง (Ao Nang Police Station)
                </p>
                <p className="text-sm text-gray-500">
                  หมายเลขโทรศัพท์สถานีตำรวจอ่าวนางคือ 075-661-122 <br />
                  The Ao Nang Police Station phone number is 075-661-122.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ImportantPage;
