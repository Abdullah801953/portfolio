import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-7 mt-6">
        <div className="col-span-12 lg:col-span text-white">
          <div className="bg-white/[0.06] backdrop-blur-md w-full h-auto py-11 rounded-3xl flex flex-col items-center relative">
            <div className="w-full lg:w-4/5 mx-auto mt-10">
              <div className="[&>p]:text-[16px] text-liColor mb-6">
                <h6 className="text-center">contact</h6>
              </div>
              <div className="[&>h1]:text-[50px] text-white mb-7">
                <h1 className="font-[500] text-center">
                  Get in Touch with Me!
                </h1>
              </div>
              <div className="grid grid-cols-12 pt-10 gap-5">
                <div className="col-span-6 lg:col-span-5 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="px-11 pt-11">
                    <div className="mb-10">
                      <IoLocation className="text-2xl mb-2 text-orange-500" />
                      <h4 className="text-xl font-[500] text-liColor ">
                        our office:
                      </h4>
                      <span className="text-md text-white opacity-50 ">
                        Jurain,Dhaka Bangladesh
                      </span>
                    </div>
                    <div className="mb-10">
                      <FaPhoneAlt className="text-2xl mb-2 text-orange-500" />
                      <h4 className="text-xl font-[500] text-liColor ">
                        contact number:
                      </h4>
                      <span className="text-md text-white opacity-50 ">
                        +1234321321
                      </span>
                    </div>
                    <div className="mb-10">
                      <IoMail className="text-2xl mb-2 text-orange-500" />
                      <h4 className="text-xl font-[500] text-liColor ">
                        Email us:
                      </h4>
                      <span className="text-md text-white opacity-50 ">
                        websitename@mail.com
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-7 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="px-11 pt-11">
                    <div className="flex gap-2 mb-5">
                      <div className="">
                        <label className="block mb-2">Full Name</label>
                        <input
                          type="text"
                          className="px-3 py-3 rounded-xl text-black border-none outline-none"
                        />
                      </div>
                      <div className="">
                        <label className="block mb-2">Email Address</label>
                        <input
                          type="text"
                          className="px-3 py-3 rounded-xl text-black border-none outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <label className="block mb-2">Your Message</label>
                        <textarea
                          type="text"
                          className="px-3 py-3 rounded-xl text-black border-none outline-none w-full h-36"
                        />
                      </div>
                      <div className="[&>button]:bg-orange-600">
                        <button className="w-48 py-2 px-3 rounded-xl">
                          Send Me Message <IoMail className="inline" />
                        </button>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
