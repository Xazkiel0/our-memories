"use client"

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Virtual, Controller } from 'swiper/modules'
import Image from 'next/image';
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  weight: '400',
  subsets: ['latin']
})

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import MemoSlide from '@/components/MemoSlide';
import { useState } from 'react';
import { SpotlightNewDemo } from '@/components/SpotlightNew';
const slides = Array.from({ length: 10 }).map((el, index) => `Slide ${index + 1}`)

export default function Home() {
  const [contSwiper, setContSwiper] = useState(null)

  const [isRelease, setIsRelease] = useState(false)

  if (!isRelease)
    return (
      <div className="h-svh w-full">
        <SpotlightNewDemo />
      </div>
    )

  return (
    <div className={("w-dvw h-dvh flex flex-col " + manrope.className)}>
      <div className="heading flex justify-center">
        <span className='font-bold text-2xl'>
          Our Memories
        </span>
      </div>
      <div className="h-full flex flex-col justify-center">
        <div className="flex items-center">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
            onRealIndexChange={swiper => {
              console.log("Active Slide:", swiper.activeIndex + 1)
            }}
            slidesPerView={1.4}
            breakpoints={{
              380: {
                slidesPerView: 2
              },
              420: {
                slidesPerView: 2.4,
              },
              680: {
                slidesPerView: 3
              },
              1080: {
                slidesPerView: 3.2,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false
            }}
            modules={[EffectCoverflow, Virtual, Controller]}
            controller={{ control: contSwiper }}
            className=''
            virtual
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide className='' virtualIndex={index} key={index} >
                <MemoSlide
                  src={`https://picsum.photos/680/768?random=${index}`}
                  title={`coba${index}`}
                  alt={`memo${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center">

          <Swiper
            effect={'coverflow'}
            onSwiper={setContSwiper}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
            slidesPerView={1.4}
            breakpoints={{
              380: {
                slidesPerView: 2
              },
              420: {
                slidesPerView: 2.4,
              },
              680: {
                slidesPerView: 3
              },
              1080: {
                slidesPerView: 3.2,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false
            }}
            modules={[EffectCoverflow, Virtual, Controller]}
            className='w-full'
            virtual
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide className='' virtualIndex={index} key={index} >
                {slideContent}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
