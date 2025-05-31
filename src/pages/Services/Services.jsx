import React from "react";
import { FaGlobe } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { FaArrowAltCircleRight, FaCartPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div>
      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-12 w-4/5 mx-auto gap-7 mt-9"
      >
        <div className="col-span-12 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-auto lg:h-[560px] rounded-3xl flex flex-col items-center relative px-4 lg:px-0">
            <div className="w-full lg:w-4/5 mx-auto mt-10">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-liColor mb-6"
              >
                <h6 className="text-center text-base md:text-lg lg:text-xl">Services</h6>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-white mb-7"
              >
                <h1 className="font-[500] text-center text-2xl md:text-4xl lg:text-5xl">Quality Services</h1>
              </motion.div>

              {/* Cards */}
              <div className="grid grid-cols-12 gap-5 pt-10">
                {/* Card 1 */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 w-full h-auto rounded-lg bg-transparent border border-gray-500">
                  <div className="pl-4 pt-8 md:pt-10">
                    <FaGlobe className="text-4xl md:text-5xl text-liColor mb-4" />
                  </div>
                  <div className="pl-4 pb-3 md:pb-5">
                    <h4 className="text-xl md:text-2xl text-liColor">Brand Identity Design</h4>
                  </div>
                  <div className="pl-4 pb-8 md:pb-10 pr-4">
                    <p className="text-sm md:text-base text-white">
                      Bentos gives you the blocks & kits you need to create a true website within minutes.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 w-full h-auto rounded-lg bg-transparent border border-gray-500">
                  <div className="pl-4 pt-8 md:pt-10">
                    <CgWebsite className="text-4xl md:text-5xl text-liColor mb-4" />
                  </div>
                  <div className="pl-4 pb-3 md:pb-5">
                    <h4 className="text-xl md:text-2xl text-liColor">Website Design</h4>
                  </div>
                  <div className="pl-4 pb-8 md:pb-10 pr-4">
                    <p className="text-sm md:text-base text-white">
                      Bentos gives you the blocks & kits you need to create a true website within minutes.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-4 w-full h-auto rounded-lg bg-transparent border border-gray-500">
                  <div className="pl-4 pt-8 md:pt-10">
                    <CiMobile1 className="text-4xl md:text-5xl text-liColor mb-4" />
                  </div>
                  <div className="pl-4 pb-3 md:pb-5">
                    <h4 className="text-xl md:text-2xl text-liColor">Application Design</h4>
                  </div>
                  <div className="pl-4 pb-8 md:pb-10 pr-4">
                    <p className="text-sm md:text-base text-white">
                      Bentos gives you the blocks & kits you need to create a true website within minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


      {/* Pricing Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-12 w-4/5 mx-auto gap-7 mt-9"
      >
        <div className="col-span-12 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-auto py-11 rounded-3xl flex flex-col items-center relative px-4 lg:px-0">
            <div className="w-full lg:w-4/5 mx-auto mt-10">
              <div className="text-liColor mb-6">
                <h6 className="text-center text-base md:text-lg lg:text-xl">Pricing</h6>
              </div>
              <div className="text-white mb-7">
                <h1 className="font-[500] text-center text-2xl md:text-4xl lg:text-5xl">
                  Flexible Pricing Plan
                </h1>
              </div>
              <div className="grid grid-cols-12 gap-5 pt-10">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="col-span-12 sm:col-span-6 lg:col-span-4 w-full h-auto rounded-lg bg-transparent border border-gray-500 relative"
                  >
                    <div className="rounded-lg border border-gray-500 p-5 m-2">
                      <h5 className="text-xl md:text-2xl pb-4 md:pb-7">Basic</h5>
                      <p className="text-base md:text-xl text-liColor pb-3 md:pb-5">
                        Have design ready to build? or small budget
                      </p>
                      <div className="text-orange-600 font-semibold text-2xl md:text-4xl">
                        $15
                        <span className="text-white text-base md:text-lg font-normal">
                          {" "}
                          / Hour
                        </span>
                      </div>
                    </div>
                    <div className="text-liColor pl-5 pr-5 pb-5 text-sm md:text-base">
                      <ul>
                        <li className="my-3">
                          <FaArrowAltCircleRight className="inline mb-1" /> Need your wireframe
                        </li>
                        <li className="my-3">
                          <FaArrowAltCircleRight className="inline mb-1" /> Design with Figma, Framer
                        </li>
                        <li className="my-3">
                          <FaArrowAltCircleRight className="inline mb-1" /> Product Design
                        </li>
                        <li className="my-3">
                          <FaArrowAltCircleRight className="inline mb-1" /> Digital Marketing
                        </li>
                        <li className="my-3">
                          <FaArrowAltCircleRight className="inline mb-1" /> Custom Support
                        </li>
                      </ul>
                      <div className="my-7">
                        <button className="w-full sm:w-36 py-2 px-3 rounded-xl bg-orange-600 text-white text-sm md:text-base">
                          Order Now <FaCartPlus className="inline" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Services;
