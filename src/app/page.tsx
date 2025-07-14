"use client";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useEffect, useMemo, useState } from "react";
import { SpotlightNewDemo } from "@/components/SpotlightNew";
import DigitPassword from "@/components/DigitPassword";
import { birthdayCountdown } from "@/lib/utils";
import Intro from "./Intro/page";
const slides = Array.from({ length: 10 }).map(
  (el, index) => `Slide ${index + 1}`,
);

export default function Home() {
  const [contSwiper, setContSwiper] = useState(null);

  const [isReleased, setIsReleased] = useState(false);

  const [pinCorrect, setPinCorrect] = useState(true);

  useEffect(() => {
    const releaseDate = new Date(2025, 6, 17);

    birthdayCountdown({
      releaseDate,
      intervalCheckTime: 5, // seconds
      callbackProcess: (today, releaseDate) => {
        setIsReleased(today >= releaseDate);
      },
    });
  }, []);

  if (!pinCorrect)
    return (
      <div className="h-svh w-full">
        <SpotlightNewDemo isReleased={isReleased}>
          {isReleased && <DigitPassword setPinCorrect={setPinCorrect} />}
        </SpotlightNewDemo>
      </div>
    );

  return (
    <div
      className={
        "w-dvw h-dvh flex flex-col dark:bg-black/[0.96] bg-white text-white " +
        manrope.className
      }
    >
      {/* <div className="heading flex justify-center">
        <span className='font-bold text-2xl'>
          Memo
        </span>
      </div> */}
      <div className="h-full flex flex-col justify-center">
        <Intro />
      </div>
    </div>
  );
}
