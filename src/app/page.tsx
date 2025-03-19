'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [bgImage, setBgImage] = useState("/images/home.png");
        
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBgImage("/images/bgMbHome.png");
      } else {
        setBgImage("/images/home.png");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative h-screen w-full">
      <Link href="/home">
        <div className="mt-[50px] relative h-full w-full cursor-pointer">
          <Image
            src={bgImage}
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
