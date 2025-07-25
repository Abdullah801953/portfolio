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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    try {
      const userPref = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (userPref) {
        setDarkMode(userPref === "dark");
      } else {
        setDarkMode(systemPrefersDark);
        localStorage.setItem("theme", systemPrefersDark ? "dark" : "light");
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (error) {
      console.error("Error updating dark mode:", error);
    }
  }, [darkMode]);

  return (
    <div className="navbar w-full flex justify-around items-center gap-5 md:gap-0 fixed top-0 z-50 transition-all duration-300 py-5 bg-[#fefeb8] dark:bg-black">
      
      <div className="logo cursor-pointer flex items-center gap-3">
        <Link to={"/"}>
          <span className="text-black dark:text-white font-extrabold text-3xl">
            Abdullah
          </span>
        </Link>

        {/* Dark mode toggle right after logo */}
        <button
          style={{ border: "none" }}
          onClick={() => setDarkMode(!darkMode)}
          className="text-black dark:text-white block md:hidden"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <MdWbSunny className="text-2xl" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </button>
      </div>


      <div className="relative block md:hidden">
        <GiHamburgerMenu
          className="text-3xl text-liColor relative z-20"
          onClick={() => {
            setToggler(!toggler);
          }}
        />
        {toggler && (
          <div className="hamburger-list absolute right-0 top-12 w-56 min-h-40 bg-hamBurgerListBgColor text-white z-10 rounded-xl shadow-lg">
            <ul className="text-black dark:text-white font-semibold flex flex-col gap-3 px-6 py-6">
              <li>
                <Link to="/" onClick={() => setToggler(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setToggler(false)}>About</Link>
              </li>
              <li>
                <Link to="/service" onClick={() => setToggler(false)}>Service</Link>
              </li>
              <li>
                <Link to="/work" onClick={() => setToggler(false)}>Work</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setToggler(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

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
      <button
          style={{ border: "none" }}
          onClick={() => setDarkMode(!darkMode)}
          className="text-black dark:text-white"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <MdWbSunny className="text-2xl" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </button>
        <button className="w-32 py-2 rounded-2xl hover:bg-orange-700 ease-in-out duration-500 text-black dark:text-white">
          Hire Me <LiaHandshakeSolid className="inline text-2xl my-1" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
