import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-[90%] sm:w-[95%] lg:w-4/5 mx-auto grid grid-cols-12 gap-5 mt-9"
      >
        <div className="col-span-12 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full h-auto py-11 rounded-3xl flex flex-col items-center relative px-4 lg:px-0">
            <div className="w-full lg:w-4/5 mx-auto mt-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-liColor mb-6"
              >
                <h6 className="text-center text-base md:text-lg lg:text-xl">Contact</h6>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-white mb-7"
              >
                <h1 className="font-[500] text-center text-2xl md:text-4xl lg:text-5xl">
                  Get in Touch with Me!
                </h1>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-12 pt-10 gap-5">
                {/* Left Box */}
                <div className="md:col-span-5 w-full h-auto rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="px-6 sm:px-8 pt-8 sm:pt-11">
                    <div className="mb-8 sm:mb-10 flex items-center">
                      <IoLocation className="text-2xl mr-4 text-orange-500" />
                      <div>
                        <h4 className="text-lg sm:text-xl font-[500] text-liColor">Our Office:</h4>
                        <span className="text-sm sm:text-base text-white">Jamia Nagar, Okhla, New Delhi</span>
                      </div>
                    </div>
                    <div className="mb-8 sm:mb-10 flex items-center">
                      <FaPhoneAlt className="text-2xl mr-4 text-orange-500" />
                      <div>
                        <h4 className="text-lg sm:text-xl font-[500] text-liColor">Contact Number:</h4>
                        <span className="text-sm sm:text-base text-white">(+91) 9905866356</span>
                      </div>
                    </div>
                    <div className="mb-8 sm:mb-10 flex items-center">
                      <IoMail className="text-2xl mr-4 text-orange-500" />
                      <div>
                        <h4 className="text-lg sm:text-xl font-[500] text-liColor">Email Us:</h4>
                        <span className="text-sm sm:text-base text-white">abdullahkhan99058@gmail.com</span>
                      </div>
                    </div>
                    <div className="mb-8 sm:mb-10 flex items-center">
                      <FaLinkedin className="text-2xl mr-4 text-orange-500" />
                      <div>
                        <h4 className="text-lg sm:text-xl font-[500] text-liColor">LinkedIn:</h4>
                        <span className="text-sm sm:text-base text-white">
                          <a
                            href="https://linkedin.com/in/abdullah-99df"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:underline"
                          >
                            linkedin.com/in/abdullah-99df
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Box */}
                <div className="md:col-span-7 w-full h-auto rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="px-6 sm:px-11 pt-8 sm:pt-11 pb-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-5">
                      <div className="w-full">
                        <label className="block mb-2 text-sm sm:text-base">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-3 rounded-xl text-black border-none outline-none text-sm sm:text-base"
                        />
                      </div>
                      <div className="w-full">
                        <label className="block mb-2 text-sm sm:text-base">Email Address</label>
                        <input
                          type="text"
                          className="w-full px-3 py-3 rounded-xl text-black border-none outline-none text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm sm:text-base">Your Message</label>
                        <textarea
                          className="w-full px-3 py-3 rounded-xl text-black border-none outline-none h-36 text-sm sm:text-base"
                        />
                      </div>
                      <div className="mt-4">
                        <a
                          href="mailto:abdullahkhan99058@gmail.com?subject=Message%20from%20Portfolio&body=Hi%20Abdullah,%0A%0A"
                          className="w-full sm:w-48 py-2 px-3 rounded-xl bg-orange-600 text-white text-sm sm:text-base inline-block text-center"
                        >
                          Send Me Message <IoMail className="inline ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Grid */}
              </div>

              <div className="contact-info mt-10 text-white">
                {/* Removed contact details as requested */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
