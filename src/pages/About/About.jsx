import React from "react";
import img from "../../assets/img";
import { IoMail } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const About = () => {
  return (
    <div className="w-[90%] sm:w-[95%] lg:w-4/5 mx-auto">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-7"
      >
        {/* Profile Image */}
        <div className="col-span-12 lg:col-span-4 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-[470px] rounded-3xl flex flex-col items-center relative">
            <div className="w-3/4 sm:w-1/2 lg:w-4/5 mx-auto mt-10 flex justify-center mb-9">
              <img src={img.my_profile} alt="profile_pic" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 text-white"
        >
          <div className="bg-lightBg dark:bg-[#121214] w-full h-auto lg:h-[470px] rounded-3xl">
            <div className="px-6 sm:px-10 py-10">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] mb-5 leading-snug">
                I’m Bentos Walker, a product designer.
              </h1>
              <p className="mb-5 text-sm sm:text-base">
                I am a San francisco-based product designer with a focus on web
                design, illustration, a visual development...
              </p>
              <p className="mb-5 text-sm sm:text-base">
                Contrary to popular belief, Lorem Ipsum is not simply random text...
              </p>
              <button className="bg-orange-600 w-fit py-2 px-4 rounded-xl text-sm sm:text-base">
                Get In touch <IoMail className="inline mb-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Experience & Education */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-7 mt-6"
      >
        {/* Experience */}
        <div className="col-span-12 lg:col-span-6 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-auto lg:h-[560px] rounded-3xl flex flex-col items-center">
            <div className="w-11/12 sm:w-4/5 mx-auto mt-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Experience</h2>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center border-b-[1px] border-gray-300 py-4"
                >
                  <div className="mr-0 sm:mr-5 mb-4 sm:mb-0 w-fit rounded-xl bg-orange-200 py-3 px-4">
                    <FaBook className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <span className="text-white font-extralight opacity-50 text-sm">2021 - Present</span>
                    <h4 className="my-2 sm:my-3 text-lg sm:text-xl text-gray-300 font-bold">Web Designer</h4>
                    <span className="text-white opacity-50 text-sm">Themeforest Market</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="col-span-12 lg:col-span-6 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-auto lg:h-[560px] rounded-3xl">
            <div className="px-6 sm:px-10 py-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Education</h2>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center border-b-[1px] border-gray-300 py-4"
                >
                  <div className="mr-0 sm:mr-5 mb-4 sm:mb-0 w-fit rounded-xl bg-orange-200 py-3 px-4">
                    <FaBook className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <span className="text-white font-extralight opacity-50 text-sm">2013 - 2015</span>
                    <h4 className="my-2 sm:my-3 text-lg sm:text-xl text-gray-300 font-bold">Bachelor Degree</h4>
                    <span className="text-white opacity-50 text-sm">State University</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full mt-6"
      >
        <div className="bg-lightBg dark:bg-[#121214] w-full h-auto lg:h-[560px] rounded-3xl flex flex-col items-center">
          <div className="w-full lg:w-4/5 mx-auto mt-10">
            <h6 className="text-center text-sm text-liColor mb-2">Testimonials</h6>
            <h1 className="text-2xl sm:text-[40px] font-medium text-center text-white mb-7">
              What clients say!
            </h1>

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full px-4"
            >
              {[img.author2, img.author1].map((authorImg, idx) => (
                <SwiperSlide key={idx}>
                  <div className="border border-gray-300 rounded-xl w-full px-5 py-5 flex flex-col items-center gap-4 text-sm sm:text-base text-black dark:text-white">
                    <img src={authorImg} alt="author" className="w-14 rounded-full" />
                    <p className="text-center px-2 sm:px-4">
                      {idx === 0
                        ? "Financial planners help people invest and save efficiently..."
                        : "This is an amazing product. It helped me a lot and I recommend it."}
                    </p>
                    <div className="text-center">
                      <h5 className="font-semibold">{idx === 0 ? "Zonathon Doe" : "Sarah Lee"}</h5>
                      <span className="text-xs opacity-70">
                        {idx === 0 ? "CEO & Founder X" : "Designer"}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
