
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Card = () => {
  const images = [
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1505691723518-36a8aa1f7b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  ];

  return (
    <div className="bg-lightBg dark:bg-[#121214] rounded-3xl overflow-hidden cursor-pointer border border-[#232323]">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-3xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-t-3xl"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-5">
        <h5 className="text-lg md:text-xl font-semibold text-white mb-2">
          Wooden House, Florida
        </h5>
        <p className="text-white text-opacity-80 text-sm md:text-base leading-relaxed">
          Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            aria-label="Like"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-200"
          >
            ❤️
          </button>

          <button
            aria-label="Bookmark"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-200"
          >
            🔖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
