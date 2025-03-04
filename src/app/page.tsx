import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-screen">
      <Link href="/home">
        <div className="h-full w-full cursor-pointer">
          <Image
            src="/welcome-bg.jpg"
            alt="Aqua Luxe Hotel"
            layout="fill"          
            objectFit="cover"      
            quality={100}
          />
          <div className="absolute flex-col inset-0 flex items-center justify-center bg-black bg-opacity-20 gap-5">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg items-center">
              Welcome
            </h1>
            <h1 className="text-5xl font-bold text-white drop-shadow-lg items-center">
              Aqua Luxe Hotel
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
