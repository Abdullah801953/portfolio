import React, { useState } from "react";
import img from "../../assets/img";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Typed from "typed.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import Card from "../../components/Card/Card";

const Home = () => {
  const [index, setIndex] = useState(1);
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `I’m Abdullah Khan, a fullstack developer crafting user-centric design and robust Mobile apps with pixel-perfect precision.`,
      ],
      typeSpeed: 20,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="w-[90%] sm:w-[95%] lg:w-4/5 mx-auto grid grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 text-white"
        >
          <div className="bg-lightBg dark:bg-[#121214] w-full h-auto sm:h-[650px] rounded-3xl flex flex-col items-center justify-center" style={{ padding: '32px 19px' }}>
            <div className="flex flex-col items-center w-full gap-7">
              <div className="flex justify-center w-full">
                <img
                  src={img.my_profile}
                  alt="profile_pic"
                  loading="lazy"
                  className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[350px] h-auto object-contain rounded-full"
                />
              </div>
              <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                <h2 className="text-white">Abdullah Khan</h2>
              </div>
              <div className="mx-auto text-center text-sm sm:text-base md:text-lg w-full sm:w-4/5 text-liColor">
                <p className="text-white">I am a Developer based in New Delhi.</p>
              </div>
              <div className="flex justify-center flex-wrap gap-5 sm:gap-7 [&>div>a]:text-lg sm:[&>div>a]:text-xl md:[&>div>a]:text-2xl text-liColor">
                {[FaInstagram, FaWhatsapp, FaLinkedin, FaGithubSquare].map(
                  (Icon, idx) => (
                    <div
                      key={idx}
                      className="border rounded-lg flex items-center justify-center w-10 h-10 text-white border-white"
                    >
                      <a href="#">
                        <Icon />
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* hero section start */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 text-white"
        >
          <div className="bg-lightBg dark:bg-[#121214] w-full h-[400px] rounded-3xl">
            <div className="px-10 py-10">
              <div className="mb-5">
                <p className="text-white">Hello There!</p>
              </div>
              <div className="mb-1 leading-snug h-[170px]">
                <h1
                  ref={el}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-white"
                ></h1>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <div className="w-3 h-3 bg-[#0f0] rounded-full"></div>
                <p className="text-white">Available for Freelancing</p>
              </div>
              <div className="[&>button]:bg-orange-600 flex flex-wrap gap-3 justify-start">
                <button className="py-2 px-5 rounded-xl text-white flex items-center gap-2 whitespace-nowrap">
                  <span>Download CV</span>
                  <FaDownload className="text-sm" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 text-white mt-10">
            <div className=" bg-lightBg dark:bg-[#121214] w-full h-auto rounded-3xl">
              <div className="px-5 pt-10">
                <div className="text-[22px] font-bold">
                  <h3 className="text-white">Company I Worked With</h3>
                </div>
              </div>
              <div>
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  slidesPerView={5}
                  spaceBetween={30}
                  allowTouchMove={false}
                  speed={3000}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                  }}
                  className="mySwiper mt-10"
                >
                  {[...Array(3)]
                    .flatMap(() => [
                      img.slide_one,
                      img.slide_two,
                      img.slide_three,
                      img.slide_four,
                      img.slide_five,
                    ])
                    .map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center items-center h-24 ">
                          <img
                            src={slide}
                            alt={`Company logo ${index}`}
                            className="h-full w-auto object-contain grayscale opacity-80 hover:opacity-100 transition duration-300"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </motion.div>
        {/* hero section end */}

        {/* project section start */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-span-12 w-full mx-auto h-auto bg-lightBg dark:bg-[#121214] rounded-3xl px-4 sm:px-8 md:px-14 py-10 sm:py-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 m-auto"
          >
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center text-white">
                Works & Projects
              </h1>
            </div>
            <div className="mb-6">
              <p className="text-sm sm:text-base md:text-lg text-center text-white text-opacity-80">
                Check out some of my design projects, meticulously crafted with
                love and dedication, each one reflecting the passion and soul I
                poured into every detail.
              </p>
            </div>
          </motion.div>

          <div className="mb-8 overflow-x-auto">
            <ul className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center min-w-max">
              <li
                className={`pb-2 cursor-pointer ${
                  index === 1 ? "border-b-[4px] border-orange-600" : ""
                }`}
                onClick={() => setIndex(1)}
              >
                <a className="text-liColor hover:text-white transition-colors">
                  All
                </a>
              </li>
              <li
                className={`pb-2 cursor-pointer ${
                  index === 2 ? "border-b-[4px] border-orange-600" : ""
                }`}
                onClick={() => setIndex(2)}
              >
                <a className="text-liColor hover:text-white transition-colors">
                  Design
                </a>
              </li>
              <li
                className={`pb-2 cursor-pointer ${
                  index === 3 ? "border-b-[4px] border-orange-600" : ""
                }`}
                onClick={() => setIndex(3)}
              >
                <a className="text-liColor hover:text-white transition-colors">
                  Game
                </a>
              </li>
              <li
                className={`pb-2 cursor-pointer ${
                  index === 4 ? "border-b-[4px] border-orange-600" : ""
                }`}
                onClick={() => setIndex(4)}
              >
                <a className="text-liColor hover:text-white transition-colors">
                  Branding
                </a>
              </li>
              <li
                className={`pb-2 cursor-pointer ${
                  index === 5 ? "border-b-[4px] border-orange-600" : ""
                }`}
                onClick={() => setIndex(5)}
              >
                <a className="text-liColor hover:text-white transition-colors">
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            {index === 1 && (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
              </div>
            )}
            {index === 2 && (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
              </div>
            )}
            {index === 3 && (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
              </div>
            )}
            {index === 4 && (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
              </div>
            )}
            {index === 5 && (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-4">
                  <Card />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* project section end */}
      </div>
    </div>
  );
};

export default Home;
