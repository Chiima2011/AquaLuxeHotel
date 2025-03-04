import React from "react";

function ImportantPage() {
  return (
    <div className="min-h-screen screen w-[100%] bg-gray-50 p-6 flex justify-center items-start">
      <div className="max-w-[100%] w-full bg-white p-6 rounded-lg shadow-md justify-center items-center flex flex-col">
        <div className="inline-flex items-center  px-4 py-2 bg-amber-800 rounded-full text-white font-semibold mb-6">
          <span className="text-xl">📞</span>
          <span className="ml-2">เบอร์โทรสำคัญภายในโรงแรม</span>
        </div>

        {/* รายการข้อมูล */}
        <ul className="space-y-5 text-gray-700 leading-relaxed">
          {/* แผนกต้อนรับ */}
          <li className="flex items-start">
            {/* สัญลักษณ์ Bullet */}
            <span className="mr-2 text-blue-500 text-lg">♦</span>
            {/* ข้อความ */}
            <div>
              <p className="font-semibold">แผนกต้อนรับ (Front Desk): กด 0</p>
              <p className="text-sm text-gray-500">
                For general inquiries, check-in, and check-out.
              </p>
            </div>
          </li>

          {/* รูมเซอร์วิส */}
          <li className="flex items-start">
            <span className="mr-2 text-pink-500 text-lg">★</span>
            <div>
              <p className="font-semibold">
                บริการรูมเซอร์วิส (Room Service): กด 1
              </p>
              <p className="text-sm text-gray-500">
                To order food, drinks, or request additional items.
              </p>
            </div>
          </li>

          {/* แม่บ้านทำความสะอาด */}
          <li className="flex items-start">
            <span className="mr-2 text-red-500 text-lg">♥</span>
            <div>
              <p className="font-semibold">
                แม่บ้านทำความสะอาด (Housekeeping): กด 2
              </p>
              <p className="text-sm text-gray-500">
                For extra towels, pillows, drinking water, or room cleaning.
              </p>
            </div>
          </li>

          {/* โรงพยาบาลใกล้เคียง */}
          <li className="flex items-start">
            <span className="mr-2 text-green-500 text-lg">♦</span>
            <div>
              <p className="font-semibold">
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
            <span className="mr-2 text-rose-500 text-lg">★</span>
            <div>
              <p className="font-semibold">
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
  );
}

export default ImportantPage;
