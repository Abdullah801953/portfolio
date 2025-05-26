import React, { useState, useEffect } from "react";
import img from "../../assets/img";
import { LiaHandshakeSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdWbSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const userPref = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userPref) {
      setDarkMode(userPref === "dark");
    } else {
      setDarkMode(systemPrefersDark);
      localStorage.setItem("theme", systemPrefersDark ? "dark" : "light");
    }
  }, []);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="navbar w-full py-10 flex justify-around items-center gap-5 md:gap-0">
      <div className="logo cursor-pointer">
        <Link to={"/"}>
          {/* <img src={img.logo} alt="logo" className="w-32"/> */}
          <span className="text-black dark:text-white font-extrabold text-3xl">Abdullah</span>
        </Link>
      </div>

      <GiHamburgerMenu
        className="text-3xl text-liColor block md:hidden relative"
        onClick={() => {
          setToggler(!toggler);
        }}
      />
      {toggler ? (
        <div className="hamburger-list py-5 absolute right-[137px] top-20 w-56 min-h-40 bg-hamBurgerListBgColor text-white block md:hidden z-10">
          <ul className="text-black dark:text-white font-semibold [&>li]:py-2 px-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
        <ul className="flex gap-7 text-black dark:text-white cursor-pointer items-center justify-center hover:[&>li]:text-orange-700 [&>li]:ease-in-out duration-700 [&>li]:font-medium">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/service"}>Service</Link>
          </li>
          <li>
            <Link to={"/work"}>Work</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="text-white font-medium hidden md:flex items-center gap-5">
        <button className="w-32 py-2 rounded-2xl hover:bg-orange-700 ease-in-out duration-500 text-black dark:text-white">
          Hire Me <LiaHandshakeSolid className="inline text-2xl my-1" />
        </button>
        <button style={{ border: "none" }} onClick={() => setDarkMode(!darkMode)}>{darkMode ? <MdWbSunny className="text-2xl text-black dark:text-white" /> : <MdDarkMode className="text-2xl text-blue-950" />}</button>

      </div>
    </div>
  );
};

export default Navbar;
