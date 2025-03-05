import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full">
      <Link href="/home">
        <div className="relative h-full w-full cursor-pointer">
          {/* ใช้ brightness-75 ลดความสว่างของรูปภาพลงแทน Overlay */}
          <Image
            src="/images/hotel.jpg"
            alt="Aqua Luxe Hotel"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="z-0 brightness-60" // ลดความสว่างของรูปภาพ
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              Welcome
            </h1>
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              Aqua Luxe Hotel
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
