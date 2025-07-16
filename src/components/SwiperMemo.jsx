import React from "react";

const SwiperMemo = () => {
  return (
    <>
      <div className="flex items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          onRealIndexChange={(swiper) => {
            console.log("Active Slide:", swiper.activeIndex + 1);
          }}
          slidesPerView={1.4}
          breakpoints={{
            380: {
              slidesPerView: 2,
            },
            420: {
              slidesPerView: 2.4,
            },
            680: {
              slidesPerView: 3,
            },
            1080: {
              slidesPerView: 3.2,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              },
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Virtual, Controller]}
          controller={{ control: contSwiper }}
          className=""
          virtual
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide className="" virtualIndex={index} key={index}>
              <MemoSlide
                src={`https://picsum.photos/680/768?random=${index}`}
                title={`coba${index}`}
                alt={`memo${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center">
        <Swiper
          effect={"coverflow"}
          onSwiper={setContSwiper}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          slidesPerView={1.4}
          breakpoints={{
            380: {
              slidesPerView: 2,
            },
            420: {
              slidesPerView: 2.4,
            },
            680: {
              slidesPerView: 3,
            },
            1080: {
              slidesPerView: 3.2,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              },
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Virtual, Controller]}
          className="w-full"
          virtual
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide className="" virtualIndex={index} key={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperMemo;
