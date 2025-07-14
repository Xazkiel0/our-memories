"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { TextAnimate } from "./magicui/text-animate";

export function SpotlightNewDemo({ children, isReleased }) {
  // const 
  
  return (
    <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0 my-auto">
        {isReleased ? (
          <ComponentWhenReleased />
        ) : (
          <ComponentBeforeRelease />
        )}
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
}

const ComponentBeforeRelease = () => (
  <>
    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text py-1 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
      Coming Soon, <br /> Halo Melinda!
    </h1>
    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
      Kalau ga keberatan liat atau buka lagi saat ulang tahun mu yaa 🤗 <br />{" "}
      Nanti passwordnya
      <span className="text-blue-600 p-1 mx-1 rounded-sm bg-blue-600/10 font-semibold">
        17072511
      </span>
    </p>
  </>
);
const ComponentWhenReleased = () => (
  <>
    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text py-1 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
      Selamat Ulang Tahun, <br /> Melinda!
    </h1>
    <div className="mt-4 font-normal text-base text-neutral-300 max-w-7xl text-center mx-auto">
      <TextAnimate by="word" animation="blurInUp" duration={1}>Halo Melinda!</TextAnimate>
      <TextAnimate by="word" animation="blurInUp" delay={2} duration={2}>Selamat ulang tahun yaa!</TextAnimate>🎉🎂
      <TextAnimate by="word" animation="blurInUp" delay={4} duration={5}>Semoga di umur yang baru ini, kamu semakin bahagia, sehat, dan sukses dalam segala hal yang kamu lakukan.</TextAnimate>
      <TextAnimate by="word" animation="blurInUp" delay={9} duration={5}>Terima kasih atas semua kebaikannya dan selalu ada di saat aku terpuruk.</TextAnimate>
      <TextAnimate by="word" animation="blurInUp" delay={14} duration={5}>Semoga selalu diberikan kemudahan dan kebahagiaan dalam hidupmu yaaa.</TextAnimate>
    </div>
  </>
);
