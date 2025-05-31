import React, { useState } from "react";
import img from "../../assets/img";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Card from "../../components/Card/Card";

const Work = () => {
  const [index, setIndex] = useState(1);
  return (
    <div className="w-[90%] sm:w-[95%] lg:w-4/5 mx-auto grid grid-cols-12 gap-5 mt-9">
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
              Check out some of my design projects, meticulously crafted with love
              and dedication, each one reflecting the passion and soul I poured
              into every detail.
            </p>
          </div>
        </motion.div>

        <div className="mb-8 overflow-x-auto">
          <ul className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center min-w-max">
            <li
              className={`pb-2 cursor-pointer ${index === 1 ? "border-b-[4px] border-orange-600" : ""
                }`}
              onClick={() => setIndex(1)}
            >
              <a className="text-liColor hover:text-white transition-colors">
                All
              </a>
            </li>
            <li
              className={`pb-2 cursor-pointer ${index === 2 ? "border-b-[4px] border-orange-600" : ""
                }`}
              onClick={() => setIndex(2)}
            >
              <a className="text-liColor hover:text-white transition-colors">
                Design
              </a>
            </li>
            <li
              className={`pb-2 cursor-pointer ${index === 3 ? "border-b-[4px] border-orange-600" : ""
                }`}
              onClick={() => setIndex(3)}
            >
              <a className="text-liColor hover:text-white transition-colors">
                Game
              </a>
            </li>
            <li
              className={`pb-2 cursor-pointer ${index === 4 ? "border-b-[4px] border-orange-600" : ""
                }`}
              onClick={() => setIndex(4)}
            >
              <a className="text-liColor hover:text-white transition-colors">
                Branding
              </a>
            </li>
            <li
              className={`pb-2 cursor-pointer ${index === 5 ? "border-b-[4px] border-orange-600" : ""
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
  );
};

export default Work;
