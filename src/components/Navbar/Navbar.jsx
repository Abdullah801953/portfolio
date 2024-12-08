import React, { useState } from "react";
import img from "../../assets/img";
import { LiaHandshakeSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="navbar w-full py-10 flex justify-around items-center gap-5 md:gap-0">
      <div className="logo cursor-pointer">
        <img src={img.logo} alt="logo" className="w-40 md:w-32" />
      </div>
      <GiHamburgerMenu
        className="text-3xl text-liColor block md:hidden relative"
        onClick={() => {
          setToggler(!toggler);
        }}
      />
      {toggler ? (
        <div className="hamburger-list py-5 absolute right-[137px] top-20 w-56 min-h-40 bg-hamBurgerListBgColor text-white block md:hidden">
          <ul className="[&>li]:text-liColor font-semibold [&>li]:py-2 px-6">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="nav-items hidden md:block">
        <ul className="flex gap-7 [&>li]:text-liColor cursor-pointer items-center justify-center hover:[&>li]:text-orange-700 [&>li]:ease-in-out duration-700 [&>li]:font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="text-white font-medium hidden md:block">
        <button className="w-32 py-2 rounded-2xl hover:bg-orange-700 ease-in-out duration-500">
          Hire Me <LiaHandshakeSolid className="inline text-2xl my-1" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
