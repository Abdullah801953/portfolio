import React from "react";
import { FaDownload } from "react-icons/fa6";
import img from "../../assets/img";
import { IoMail } from "react-icons/io5";
const About = () => {
  return (
    <div className="about">
      <div className="grid grid-cols-12 w-4/5 mx-auto gap-7">
        <div className="col-span-12 lg:col-span-4 text-white">
          <div className="bg-white/[0.06] backdrop-blur-md w-full h-[470px] rounded-3xl flex flex-col items-center relative">
            <div className="w-1/2 lg:w-4/5 mx-auto mt-10">
              <img src={img.profile_pic} alt="profile_pic" />
            </div>
          </div>
        </div>
        {/* hero section start */}
        <div className="col-span-12 lg:col-span-8 text-white">
          <div className=" bg-white/[0.06] backdrop-blur-lg w-full h-[470px] rounded-3xl">
            <div className="px-10 py-10">
              
              <div className="text-3xl lg:text-[40px] mb-5 leading-snug">
                <h1>I’m Bentos Walker, a product designer.</h1>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
              </div>
              <div className="[&>button]:bg-orange-600">
                <button className="w-36 py-2 px-3 rounded-xl">
                Get In touch  <IoMail className="inline mb-1" />
                </button>
              </div>
            </div>
          </div>
          
        </div>
        {/* hero section end */}
      </div>
    </div>
  );
};

export default About;
