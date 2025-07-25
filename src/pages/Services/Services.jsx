import React from "react";
import { FaGlobe } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { FaArrowAltCircleRight, FaCartPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";

const Services = () => {
  return (

    <div>
      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-[90%] sm:w-[95%] lg:w-4/5 mx-auto grid grid-cols-12 gap-5 mt-9"
      >
        <div className="col-span-12 text-white">
          <div className="bg-lightBg dark:bg-[#121214] w-full min-h-[560px] lg:min-h-[560px] rounded-3xl flex flex-col items-center relative px-4 lg:px-0 pb-5">
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
              {/* Animated Service Cards */}
              <div className="grid grid-cols-12 gap-5 pt-10 auto-rows-fr">
                {[
                  {
                    icon: <FaGlobe className="text-4xl md:text-5xl text-liColor mb-4" />, 
                    title: "Frontend Web Development",
                    desc: "Build stunning and responsive user interfaces using modern frontend technologies like React, Angular, or Vue.js."
                  },
                  {
                    icon: <FaCartPlus className="text-4xl md:text-5xl text-liColor mb-4" />, 
                    title: "Fullstack Web Development",
                    desc: "Develop complete web solutions with expertise in both frontend and backend technologies, ensuring seamless integration."
                  },
                  {
                    icon: <CiMobile1 className="text-4xl md:text-5xl text-liColor mb-4" />, 
                    title: "Mobile App Development",
                    desc: "Create high-quality mobile applications for Android and iOS platforms with a focus on performance and user experience."
                  },
                  {
                    icon: <FaCode className="text-4xl md:text-5xl text-liColor mb-4" />, 
                    title: "Software Development",
                    desc: "Design and develop custom software solutions tailored to your business needs, ensuring scalability and efficiency."
                  },
                  {
                    icon: <FaMicrochip className="text-4xl md:text-5xl text-liColor mb-4" />, 
                    title: "IoT Solutions",
                    desc: "Develop innovative IoT solutions to connect devices and systems, enabling smarter operations and data-driven decisions."
                  }
                ].map((card, idx) => (
                  <motion.div
                    key={card.title}
                    className="col-span-12 sm:col-span-6 lg:col-span-4 w-full h-auto rounded-lg bg-transparent border border-gray-500 overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="pl-4 pt-8 md:pt-10">
                      {card.icon}
                    </div>
                    <div className="pl-4 pb-3 md:pb-5">
                      <h4 className="text-xl md:text-2xl text-liColor">{card.title}</h4>
                    </div>
                    <div className="pl-4 pb-8 md:pb-10 pr-4">
                      <p className="text-sm md:text-base text-white">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
        className="w-[90%] sm:w-[95%] lg:w-4/5 mx-auto grid grid-cols-12 gap-5 mt-9"
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
                {[1, 2, 3, 4, 5].map((item, idx) => (
                  <motion.div
                    key={item}
                    className="col-span-12 sm:col-span-6 lg:col-span-4 w-full h-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-2xl border border-gray-500 bg-[#18181b] dark:bg-[#18181b] shadow-xl flex flex-col items-center justify-between h-full px-6 py-8 gap-6">
                      <h5 className="text-xl md:text-2xl font-semibold text-center border-b border-gray-600 pb-4 w-full min-h-[60px] flex items-center justify-center">
                        {item === 1
                          ? "Frontend Web Development"
                          : item === 2
                            ? "Fullstack Web Development"
                            : item === 3
                              ? "Mobile App Development"
                              : item === 4
                                ? "Software Development"
                                : "IoT Solutions Development"}
                      </h5>
                      <p className="text-base md:text-lg text-liColor text-center">
                        {item === 1
                          ? "Ideal for creating responsive and stunning user interfaces."
                          : item === 2
                            ? "Perfect for end-to-end web solutions."
                            : item === 3
                              ? "High-quality mobile applications for Android and iOS."
                              : item === 4
                                ? "Custom software solutions tailored to your needs."
                                : "Innovative IoT solutions for smarter operations."}
                      </p>
                      <div className="text-orange-600 font-bold text-2xl md:text-3xl text-center">
                        ₹{item === 1
                          ? "1500"
                          : item === 2
                            ? "2500"
                            : item === 3
                              ? "3000"
                              : item === 4
                                ? "4000"
                                : "5000"}
                        <span className="text-white text-base md:text-lg font-normal"> / Hour</span>
                      </div>
                      <ul className="text-liColor text-sm md:text-base list-disc pl-5 pr-5 flex flex-col gap-2">
                        {item === 1 && (
                          <>
                            <li>Responsive Design</li>
                            <li>Cross-Browser Compatibility</li>
                            <li>Performance Optimization</li>
                            <li>SEO Optimization</li>
                            <li>Accessibility Features</li>
                          </>
                        )}
                        {item === 2 && (
                          <>
                            <li>API Integration</li>
                            <li>Database Management</li>
                            <li>Scalable Architecture</li>
                            <li>Real-Time Features</li>
                            <li>Cloud Deployment</li>
                          </>
                        )}
                        {item === 3 && (
                          <>
                            <li>Cross-Platform Development</li>
                            <li>App Store Deployment</li>
                            <li>Maintenance Support</li>
                            <li>Push Notifications</li>
                            <li>In-App Purchases</li>
                          </>
                        )}
                        {item === 4 && (
                          <>
                            <li>Custom Features</li>
                            <li>Cloud Integration</li>
                            <li>Security Enhancements</li>
                            <li>Third-Party Integrations</li>
                            <li>Performance Monitoring</li>
                          </>
                        )}
                        {item === 5 && (
                          <>
                            <li>Device Integration</li>
                            <li>Real-Time Monitoring</li>
                            <li>Data Analytics</li>
                            <li>Predictive Maintenance</li>
                            <li>IoT Security</li>
                          </>
                        )}
                      </ul>
                      <button className="w-full py-2 px-3 rounded-xl bg-orange-600 text-white text-base font-semibold mt-2 flex items-center justify-center gap-2">
                        Order Now <span className="text-lg"><FaCartPlus /></span>
                      </button>
                    </div>
                  </motion.div>
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
