import React, { useState } from "react";
import img from "../../assets/img";
import { FaExternalLinkAlt } from "react-icons/fa";
const Work = () => {
  const [index, setIndex] = useState(1);
  return (
    <div className="work">
      {/* project section start */}
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-7">
        <div className="col-span-12 lg:col-span-12 w-full mx-auto h-auto bg-white/[0.06] backdrop-blur-lg rounded-3xl px-14 py-14">
          <div className="w-full lg:w-1/2 m-auto">
            <div className="[&>h1]:text-[50px] text-white mb-6">
              <h1 className="font-[500] text-center">Works & Projects</h1>
            </div>
            <div className="[&>p]:text-[16px] text-liColor mb-6">
              <p className="text-center">
                Check out some of my design projects, meticulously crafted with
                love and dedication, each one reflecting the passion and soul I
                poured into every detail.
              </p>
            </div>
          </div>
          <div className="[&>ul]:flex mb-5">
            <ul className="[&>li>a]:text-liColor gap-10">
              <li
                className={
                  index === 1 ? "border-b-[4px] border-orange-600" : ""
                }
                onClick={() => {
                  setIndex(1);
                }}
              >
                <a href="#">All</a>
              </li>
              <li
                className={
                  index === 2 ? "border-b-[4px] border-orange-600" : ""
                }
                onClick={() => {
                  setIndex(2);
                }}
              >
                <a href="#">Design</a>
              </li>
              <li
                className={
                  index === 3 ? "border-b-[4px] border-orange-600" : ""
                }
                onClick={() => {
                  setIndex(3);
                }}
              >
                <a href="#">Game</a>
              </li>
              <li
                className={
                  index === 4 ? "border-b-[4px] border-orange-600" : ""
                }
                onClick={() => {
                  setIndex(4);
                }}
              >
                <a href="#">Branding</a>
              </li>
              <li
                className={
                  index === 5 ? "border-b-[4px] border-orange-600" : ""
                }
                onClick={() => {
                  setIndex(5);
                }}
              >
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>
          <div className="">
            {index === 1 ? (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative z-0">
                  <div className="w-full">
                    <img src={img.work_one} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative">
                  <div className="w-full">
                    <img src={img.work_two} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative">
                  <div className="w-full">
                    <img src={img.work_three} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative">
                  <div className="w-full">
                    <img src={img.work_four} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative">
                  <div className="w-full">
                    <img src={img.work_three} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative">
                  <div className="w-full">
                    <img src={img.work_one} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {index === 2 ? (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative z-0">
                  <div className="w-full">
                    <img src={img.work_one} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative z-0">
                  <div className="w-full">
                    <img src={img.work_one} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {index === 3 ? (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative z-0">
                  <div className="w-full">
                    <img src={img.work_one} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {index === 4 ? (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative z-0">
                  <div className="w-full">
                    <img src={img.work_one} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {index === 5 ? (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative z-0">
                  <div className="w-full">
                    <img src={img.work_one} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative z-0">
                  <div className="w-full">
                    <img src={img.work_one} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Design</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mobile Application Design</h4>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* project section end */}
    </div>
  );
};

export default Work;
