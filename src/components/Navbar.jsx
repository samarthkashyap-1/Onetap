import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className=" fixed z-50 shadow-xl  flex h-20 top-0 left-0 right-0 justify-between  w-[80%] mx-auto mt-10 rounded-xl bg-primary px-5 text-white font-audiowide">
        <div className="h-fit">
          <img src={logo} alt="logo" className=" max-h-20" />
        </div>

        <div className="my-auto w-[30%]">
          <ul className="flex justify-between">
            <li className="hover:text-sec transition-colors duration-300 ease-in-out cursor-pointer">
              Templates
            </li>
            <li className="hover:text-sec transition-colors duration-300 ease-in-out cursor-pointer">
              Discover
            </li>
            <li className="hover:text-sec transition-colors duration-300 ease-in-out cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="my-auto w-[20%]">
          <ul className="flex justify-evenly ">
            <li>
              <button className="w-20 h-14 rounded-lg bg-white text-primary">
                Login
              </button>
            </li>
            <li>
              <button className="w-24 h-14 rounded-xl bg-sec">Signup</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
