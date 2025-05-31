import React from "react";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-[90%] sm:w-[95%] lg:w-4/5 mx-auto grid grid-cols-12 gap-5 py-10"
    >
      <div className="col-span-12 lg:col-span-12 w-full mx-auto h-auto bg-lightBg dark:bg-[#121214] rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-2/3 mx-auto py-20"
        >
          <div className="[&>h1]:text-[28px] sm:[&>h1]:text-[32px] md:[&>h1]:text-[40px] text-white">
            <h1 className="font-[500] text-center leading-snug text-white">
              Are You Ready to kickstart your project with a touch of magic?
            </h1>
          </div>
          <div className="[&>p]:text-[14px] sm:[&>p]:text-[15px] md:[&>p]:text-[16px] text-liColor mb-6">
            <p className="text-center text-white">
              Reach out and let's make it happen ✨. I'm also available for
              full-time or Part-time opportunities to push the boundaries of
              design and deliver exceptional work.
            </p>
          </div>
          <div className="[&>button]:bg-orange-600 flex justify-center">
            <button className="w-36 py-2 px-3 rounded-xl text-white">
              Let's Talk <FaDownload className="inline mb-2" />
            </button>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-12 gap-40">
        <div className="col-span-6">
          <p className="text-[12px] sm:text-[14px] md:text-[16px] text-black dark:text-white">
            Copyright @2024, <span className="text-orange-600"> abdullah</span> All
            Rights Reserved.
          </p>
        </div>
        <div className="col-span-6">
          <p className="text-[12px] sm:text-[14px] md:text-[16px] text-black dark:text-white">
            Crafted by ❤️ abdullah_khan
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
