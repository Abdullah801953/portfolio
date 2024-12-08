import React from "react";
import { FaDownload } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="grid grid-cols-12 w-4/5 mx-auto gap-7 mt-9">
      <div className="col-span-12 lg:col-span-12 w-full mx-auto h-[400px] bg-white/[0.06] backdrop-blur-lg rounded-3xl">
        <div className="w-2/3 mx-auto py-20
        ">
          <div className="[&>h1]:text-[40px] text-white">
            <h1 className="font-[500] text-center leading-snug">
              Are You Ready to kickstart your project with a touch of magic?
            </h1>
          </div>
          <div className="[&>p]:text-[16px] text-liColor mb-6">
            <p className="text-center">
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
        </div>
      </div>
      <div className="grid grid-cols-12 gap-40">
        <div className="col-span-6"><p className="text-white">Copyright @2024, <span className="text-orange-600"> Bentos</span> All Rights Reserved.</p></div>
        <div className="col-span-6"><p className="text-white">Crafted with ❤️ theme_ocean</p></div>
      </div>
    </div>
  );
};

export default Footer;
