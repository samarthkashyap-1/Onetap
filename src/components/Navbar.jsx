import React,{useState} from "react";
import logo from "../assets/logo.png";
import ham from "../assets/ham.svg";
import close from "../assets/close.svg";
import {Link} from "react-router-dom"
const Navbar = () => {
const [toggle,settoggle]  = useState(false)




  return (
    <>
      <nav
        className={` fixed z-50 shadow-xl  flex h-20 top-0 md:gap-5  left-0 right-0 justify-between md:flex-col md:overflow-y-hidden ${
          toggle ? "md:h-72 sm:h-72 md:pb-10 " : "h-20"
        } max-w-[80%] mx-auto mt-10 rounded-xl bg-primary px-5 transition-all duration-300 ease-in-out text-white font-audiowide`}
      >
        <div className=" md:mt-2 sm:mt-4 flex justify-between items-center my-auto">
          <img
            src={logo}
            alt="logo"
            className=" max-h-20 md:max-h-16 sm:max-h-10"
          />
          <div className="md:block hidden">
            {toggle ? (
              <img
                src={close}
                alt=""
                className="scale-75"
                onClick={() => settoggle(!toggle)}
              />
            ) : (
              <img
                src={ham}
                alt=""
                className="scale-75"
                onClick={() => settoggle(!toggle)}
              />
            )}
          </div>
        </div>

        <div className="my-auto min-w-[30%] md:w-full md:mx-auto ">
          <ul className="flex justify-between md:flex-col md:gap-5 ">
            <Link to="/templates">
            <li className="hover:text-sec transition-colors  duration-300 text-center ease-in-out cursor-pointer">
              Templates
            </li>
            </Link>
            <li className="hover:text-sec transition-colors duration-300  text-center ease-in-out cursor-pointer">
              Discover
            </li>
            <li className="hover:text-sec transition-colors duration-300  text-center ease-in-out cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="my-auto w-[20%] md:w-full">
          <ul className="flex justify-evenly ">
            <Link to="/login">
              <li>
                <button className="px-5 sm:px-0  sm:w-20 h-14 rounded-lg sm:max-h-10  bg-white text-primary">
                  Login
                </button>
              </li>
            </Link>
            <Link to="/Signup">
              <li>
                <button className="px-5  md:w-24 h-14 rounded-xl sm:max-h-10 bg-sec">
                  Signup
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
