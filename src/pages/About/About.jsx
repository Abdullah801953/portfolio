import React from "react";
import img from "../../assets/img";
import { IoMail } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/autoplay";
const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-12 w-4/5 mx-auto gap-7">
        <div className="col-span-12 lg:col-span-4 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-[470px] rounded-3xl flex flex-col items-center relative">
            <div className="w-1/2 lg:w-4/5 mx-auto mt-10 flex justify-center mb-9">
              <img src={img.my_profile} alt="profile_pic" />
            </div>
          </div>
        </div>
        {/* hero section start */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 text-white">
          <div className=" bg-lightBg dark:bg-[#121214] w-full h-[470px] rounded-3xl">
            <div className="px-10 py-10">
              <div className="text-3xl lg:text-[40px] mb-5 leading-snug">
                <h1>I’m Bentos Walker, a product designer.</h1>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <p>
                  I am a San francisco-based product designer with a focus on
                  web design, illustration, a visual development. I have a
                  diverse range of experience having worked across various
                  fields and industries.
                </p>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
              </div>
              <div className="[&>button]:bg-orange-600">
                <button className="w-36 py-2 px-3 rounded-xl">
                  Get In touch <IoMail className="inline mb-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        {/* hero section end */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-12 w-4/5 mx-auto gap-7 mt-6">
        <div className="col-span-12 lg:col-span-6 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-[560px] rounded-3xl flex flex-col items-center relative">
            <div className="w-1/2 lg:w-4/5 mx-auto mt-10">
              <div className="text-2xl font-semibold">
                <h2>Experience</h2>
              </div>
              <div className="flex items-center border-b-[1px] border-l-indigo-200 py-4">
                <div className="mr-5 w-13 rounded-xl bg-orange-200 py-4 px-4 mb-11">
                  <FaBook className="text-orange-600 text-xl" />
                </div>
                <div>
                  <span className="mb-2 text-white font-extralight opacity-50">
                    2021 - Present
                  </span>
                  <h4 className="my-3 text-xl text-gray-300 font-bold">
                    Web Designer
                  </h4>
                  <span className="text-white opacity-50">
                    Themeforest Market
                  </span>
                </div>
              </div>
              <div className="flex items-center border-b-[1px] border-gray-300 py-4">
                <div className="mr-5 w-13 rounded-xl bg-orange-200 py-4 px-4 mb-11">
                  <FaBook className="text-orange-600 text-xl" />
                </div>
                <div>
                  <span className="mb-2 text-white font-extralight opacity-50">
                    2021 - 2023
                  </span>
                  <h4 className="my-3 text-xl text-gray-300 font-bold">
                    Marketing Expert GRP
                  </h4>
                  <span className="text-white opacity-50">
                    Envato Theme Developer
                  </span>
                </div>
              </div>
              <div className="flex items-center border-b-[1px] border-gray-300 py-4">
                <div className="mr-5 w-13 rounded-xl bg-orange-200 py-4 px-4 mb-11">
                  <FaBook className="text-orange-600 text-xl" />
                </div>
                <div>
                  <span className="mb-2 text-white font-extralight opacity-50">
                    2021 - 2022
                  </span>
                  <h4 className="my-3 text-xl text-gray-300 font-bold">
                    Web Designer
                  </h4>
                  <span className="text-white opacity-50">
                    Web Developer & Business Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 text-white">
          <div className=" bg-lightBg dark:bg-[#121214] w-full h-[560px] rounded-3xl">
            <div className="px-10 py-10">
              <div className="text-2xl font-semibold">
                <h2>Education</h2>
              </div>
              <div className="flex items-center border-b-[1px] border-gray-300 py-4">
                <div className="mr-5 w-13 rounded-xl bg-orange-200 py-4 px-4 mb-11">
                  <FaBook className="text-orange-600 text-xl" />
                </div>
                <div>
                  <span className="mb-2 text-white font-extralight opacity-50">
                    2013 - 2015
                  </span>
                  <h4 className="my-3 text-xl text-gray-300 font-bold">
                    Bachelor Degree of Information Technology
                  </h4>
                  <span className="text-white opacity-50">
                    State University bangladesh
                  </span>
                </div>
              </div>
              <div className="flex items-center border-b-[1px] border-gray-300 py-4">
                <div className="mr-5 w-13 rounded-xl bg-orange-200 py-4 px-4 mb-11">
                  <FaBook className="text-orange-600 text-xl" />
                </div>
                <div>
                  <span className="mb-2 text-white font-extralight opacity-50">
                    2021 - 2024
                  </span>
                  <h4 className="my-3 text-xl text-gray-300 font-bold">
                    Higher secoundery Education
                  </h4>
                  <span className="text-white opacity-50">
                    Premium College United VC
                  </span>
                </div>
              </div>
              <div className="flex items-center border-b-[1px] border-gray-300 py-4">
                <div className="mr-5 w-13 rounded-xl bg-orange-200 py-4 px-4 mb-11">
                  <FaBook className="text-orange-600 text-xl" />
                </div>
                <div>
                  <span className="mb-2 text-white font-extralight opacity-50">
                    2020 - 2021
                  </span>
                  <h4 className="my-3 text-xl text-gray-300 font-bold">
                    Web Designer
                  </h4>
                  <span className="text-white opacity-50">
                    Themeforest Market
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero section end */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-12 w-4/5 mx-auto gap-7 mt-6">
        <div className="col-span-12 lg:col-span text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-[560px] rounded-3xl flex flex-col items-center relative">
            <div className="w-full lg:w-4/5 mx-auto mt-10">
              <div className="[&>p]:text-[16px] text-liColor mb-6">
                <h6 className="text-center">Testimonials</h6>
              </div>
              <div className="[&>h1]:text-[50px] text-white mb-7">
                <h1 className="font-[500] text-center">What clients say!</h1>
              </div>
              <div className="">
                <div className="border border-gray-300 rounded-xl w-full h-auto px-5 py-5">
                  <div className="w-14">
                    <img src={img.author2} alt="" className="rounded-full" />
                  </div>
                  <div className="w-1/2">
                    <p>
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      eve plan ners help people tioniio know ledige in about
                      how.
                    </p>
                  </div>
                  <div className="">
                    <h5>Zonathon Doe</h5>
                  </div>
                  <div className="">
                    <span>CEO & Founder X</span>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
