import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full">
      <Link href="/home">
        <div className="mt-[50px] relative h-full w-full cursor-pointer">
          <Image
            src="/images/home.png"
            alt="Aqua Luxe Hotel"
            layout="fill"
            objectFit="fill"
            quality={100}
            priority
            className="z-0 brightness-90" 
          />
        </div>
      </Link>
    </div>
  );
}
