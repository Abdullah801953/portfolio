import React from "react";
import { FaGlobe } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
const Services = () => {
  return (
    <div className="service">
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-7 mt-6">
        <div className="col-span-12 lg:col-span text-white">
          <div className="bg-white/[0.06] backdrop-blur-md w-full h-[560px] rounded-3xl flex flex-col items-center relative">
            <div className="w-full lg:w-4/5 mx-auto mt-10">
              <div className="[&>p]:text-[16px] text-liColor mb-6">
                <h6 className="text-center">Services</h6>
              </div>
              <div className="[&>h1]:text-[50px] text-white mb-7">
                <h1 className="font-[500] text-center">Quality Services</h1>
              </div>
              <div className="grid grid-cols-12 pt-10 gap-5">
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="pl-5 pt-10">
                    <FaGlobe className="text-5xl text-liColor mb-5" />
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-5">
                    <h4>Brand Identity Design</h4>
                  </div>
                  <div className="pl-5 pb-10">
                    <p>
                      Bentos gives you the blocks & kits you need to create a
                      true website within minutes.
                    </p>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="pl-5 pt-10">
                    <CgWebsite className="text-5xl text-liColor mb-5" />
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-5">
                    <h4>Website Design</h4>
                  </div>
                  <div className="pl-5 pb-10">
                    <p>
                      Bentos gives you the blocks & kits you need to create a
                      true website within minutes.
                    </p>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="pl-5 pt-10">
                    <CiMobile1 className="text-5xl text-liColor mb-5" />
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-5">
                    <h4>Application Design</h4>
                  </div>
                  <div className="pl-5 pb-10">
                    <p>
                      Bentos gives you the blocks & kits you need to create a
                      true website within minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-7 mt-6">
        <div className="col-span-12 lg:col-span text-white">
          <div className="bg-white/[0.06] backdrop-blur-md w-full h-auto py-11 rounded-3xl flex flex-col items-center relative">
            <div className="w-full lg:w-4/5 mx-auto mt-10">
              <div className="[&>p]:text-[16px] text-liColor mb-6">
                <h6 className="text-center">Pricing</h6>
              </div>
              <div className="[&>h1]:text-[50px] text-white mb-7">
                <h1 className="font-[500] text-center">
                  Flexible Pricing Plan
                </h1>
              </div>
              <div className="grid grid-cols-12 pt-10 gap-5">
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="rounded-lg border border-gray-500 p-5 m-2">
                    <h5 className="text-2xl pb-7">Basic</h5>
                    <p className="text-2xl text-liColor pb-5">
                      Have design ready to build? or small budget
                    </p>
                    <span className="text-4xl text-orange-600 font-semibold">
                      $15
                    </span>{" "}
                    <span>/ Hour</span>
                  </div>
                  <div className="text-liColor pl-5 pb-5">
                    <ul>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Need
                        your wireframe
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Design
                        with Figma, Framer
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" />{" "}
                        Product Design
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" />{" "}
                        Digital Marketing
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Custom
                        Support
                      </li>
                    </ul>
                    <div className="[&>button]:bg-orange-600 my-7">
                      <button className="w-36 py-2 px-3 rounded-xl text-white">
                        Order Now <FaCartPlus className="inline"/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="rounded-lg border border-gray-500 p-5 m-2">
                    <h5 className="text-2xl pb-7">Basic</h5>
                    <p className="text-2xl text-liColor pb-5">
                      Have design ready to build? or small budget
                    </p>
                    <span className="text-4xl text-orange-600 font-semibold">
                      $15
                    </span>{" "}
                    <span>/ Hour</span>
                  </div>
                  <div className="text-liColor pl-5 pb-5">
                    <ul>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Need
                        your wireframe
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Design
                        with Figma, Framer
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" />{" "}
                        Product Design
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" />{" "}
                        Digital Marketing
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Custom
                        Support
                      </li>
                    </ul>
                    <div className="[&>button]:bg-orange-600 my-7">
                      <button className="w-36 py-2 px-3 rounded-xl text-white">
                        Order Now <FaCartPlus className="inline"/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 relative">
                  <div className="rounded-lg border border-gray-500 p-5 m-2">
                    <h5 className="text-2xl pb-7">Basic</h5>
                    <p className="text-2xl text-liColor pb-5">
                      Have design ready to build? or small budget
                    </p>
                    <span className="text-4xl text-orange-600 font-semibold">
                      $15
                    </span>{" "}
                    <span>/ Hour</span>
                  </div>
                  <div className="text-liColor pl-5 pb-5">
                    <ul>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Need
                        your wireframe
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Design
                        with Figma, Framer
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" />{" "}
                        Product Design
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" />{" "}
                        Digital Marketing
                      </li>
                      <li className="my-3">
                        <FaArrowAltCircleRight className="inline mb-1" /> Custom
                        Support
                      </li>
                    </ul>
                    <div className="[&>button]:bg-orange-600 my-7">
                      <button className="w-36 py-2 px-3 rounded-xl text-white">
                        Order Now <FaCartPlus className="inline"/>
                      </button>
                    </div>
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

export default Services;
