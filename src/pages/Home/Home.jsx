import React, { useState } from "react";
import img from "../../assets/img";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import Typed from "typed.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
const Home = () => {
  const [index, setIndex] = useState(1);
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `I’m Abdullah Khan, a fullstack developer crafting user-centric
      design with pixel-perfect precision.`,
      ],
      typeSpeed: 20,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="home">
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-7">
        <div className="col-span-12 lg:col-span-4 text-white">
          <div className="bg-white/[0.06] backdrop-blur-sm w-full h-[650px] rounded-3xl flex flex-col items-center relative justify-center">
            <div className="w-1/2 lg:w-4/5 mx-auto mt-10 mb-10">
              <img src={img.my_profile} alt="profile_pic" />
            </div>
            <div className="text-center text-[40px] font-bold mb-4">
              <h2>Abdullah Khan</h2>
            </div>
            <div className="mx-auto text-center text-[16px] w-4/5 text-liColor mb-4">
              <p>I am a Web Developer based in New Delhi.</p>
            </div>
            <div className="flex justify-center gap-10 [&>div>a]:text-2xl text-liColor">
              <div className="border rounded-lg px-2 py-2 w-10 h-10">
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
              <div className="border rounded-lg px-2 py-2 w-10 h-10">
                <a href="#">
                  <FaWhatsapp />
                </a>
              </div>
              <div className="border rounded-lg px-2 py-2 w-10 h-10">
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
              <div className="border rounded-lg px-2 py-2 w-10 h-10">
                <a href="#">
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* hero section start */}
        <div className="col-span-12 lg:col-span-8 text-white">
          <div className=" bg-white/[0.06] backdrop-blur-lg w-full h-[400px] rounded-3xl">
            <div className="px-10 py-10">
              <div className="mb-5">
                <p>Hello There!</p>
              </div>
              <div className="text-3xl lg:text-[40px] mb-5 leading-snug h-[170px]">
                <h1 ref={el}></h1>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <div className="w-3 h-3 bg-[#0f0] rounded-full"></div>
                <p>Available for Freelancing</p>
              </div>
              <div className="[&>button]:bg-orange-600">
                <button className="w-36 py-2 px-3 rounded-xl">
                  Download CV <FaDownload className="inline mb-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 text-white mt-8">
            <div className=" bg-white/[0.06] backdrop-blur-lg w-full h-[200px] rounded-3xl">
              <div className="px-5 pt-10">
                <div className="text-[22px] font-bold">
                  <h3>Company I Worked With</h3>
                </div>
              </div>
              <div className="">
                <Swiper
                  className="mySwiper flex items-center mt-10"
                  modules={[Autoplay]}
                  loop={true}
                  slidesPerView={5}
                  autoplay={{
                    delay: 1, // Slide change hone ka time (milliseconds)
                    disableOnInteraction: false, // User ke interaction ke baad bhi autoplay chalu rahe
                  }}
                  speed={3000}
                  spaceBetween={8}
                >
                  <SwiperSlide>
                    <img src={img.slide_one} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_two} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_three} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_four} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_five} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_one} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_two} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_three} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_four} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img.slide_five} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/* hero section end */}

        {/* project section start */}
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
                    <img src={img.project1} alt="" className="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <Link to={"https://nest-shop-project.netlify.app"} target="_blank">
                        <FaExternalLinkAlt className="text-xl text-center cursor-pointer" />
                      </Link>
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Grocery App</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Nest Grocery Web App</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative">
                  <div className="w-full">
                    <img src={img.project2} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <Link to={"https://mehtatransportcorporations-hi3pg6xa8-abdullah801953s-projects.vercel.app/"} target="_blank"><FaExternalLinkAlt className="text-xl text-center cursor-pointer" /></Link>
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">Transportation Webstie</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Mehta Transport Corporations</h4>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent border border-gray-500 border-t-0 relative">
                  <div className="w-full">
                    <img src={img.project3} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition duration-300">
                    <div className="rounded-full bg-orange-600 w-20 py-8 px-4 flex justify-center">
                      <Link to={"https://fayaz-international-com.vercel.app/"}><FaExternalLinkAlt className="text-xl text-center cursor-pointer" target="_blank"/></Link>
                    </div>
                  </div>
                  <div className="pl-5 pt-10">
                    <p className="text-lg text-liColor">E-Education</p>
                  </div>
                  <div className="text-2xl text-liColor pl-5 pb-10">
                    <h4>Fayaz International</h4>
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
        {/* project section end */}
      </div>
    </div>
  );
};

export default Home;
