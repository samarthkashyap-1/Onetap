import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import showpass from "../assets/showpass.png";
import back from "../assets/back.png";
import { Fade } from "react-awesome-reveal";

import Toast from "./Toast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Createuser } from "../services/api";
import loader from "../assets/loader.json"
import Lottie from "lottie-react";
const Signup = () => {
  const navigate = useNavigate();
  const [disabler, setdisabler] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [loading, setLoading] = useState(false);

  const {
    register: Signupdetail,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    data.email = data.email.toLowerCase();
    console.log(data)
    postuser(data);
  };

  const postuser = async (data) => {
    try {
      //  localStorage.clear();
      setdisabler(true);
      
      const res = await Createuser(data);
      const user = res.data;
      localStorage.setItem(
        "token",
        JSON.stringify({ token: user.token, email: user.email })
      );
      toast.success("Signed up Successfully");
      reset();
      setdisabler(false);
      setTimeout(() => {
        navigate("/admin");
      }, 1000);

      console.log(user);
    } catch (error) {
      setdisabler(false);
      // console.log(error)
      if (error.response) {
        if (error.response.status === 400) {
          return toast.error("Email is already registered");
        }
      }
      toast.error("An error occurred. Please try again later");
    }
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("token"));
    if (auth) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="flex flex-col gap-10 h-screen px-10">
      <div
        className={`h-screen bg-black bg-opacity-50 z-50 absolute left-0 right-0 top-0 flex flex-col justify-center items-center
         ${disabler ? "" : "hidden"}`}
      >
        <Lottie animationData={loader} className="w-28 sm:w-16" />
        <p className="text-white text-sm animate-bounce">Setting up your account</p>
      </div>
      <Toast />
      <Fade triggerOnce>
        <Link to="/">
          <div className="absolute flex justify-center z-10 top-5 cursor-pointer">
            <img src={back} alt="" className="w-8" />
            <p className="my-auto">Back</p>
          </div>
        </Link>
        <div className="bg-primary w-1/4 mx-auto rounded-xl py-5 sm:w-full md:w-1/2">
          <img src={logo} alt="" className="h-20 sm:h-16 mx-auto" />
        </div>
        <div>
          <h1 className="text-5xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-1/4 mx-auto gap-4 mt-5 sm:w-full md:w-1/2 ">
              <input
                type="text"
                placeholder="Name"
                className=" h-14 sm:h-12 rounded-lg bg-white px-4 border-2 border-primary"
                {...Signupdetail("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
              <input
                type="email"
                placeholder="Email"
                className=" h-14 sm:h-12 rounded-lg bg-white px-4 border-2 border-primary"
                {...Signupdetail("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <div className="flex border-2 border-primary rounded-lg ">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="h-14 sm:h-12 rounded-lg bg-white px-4 focus:outline-none w-full active:border-none flex-grow"
                  {...Signupdetail("password", {
                    required: "Password is required",
                  })}
                />

                <img
                  src={showpass}
                  alt=""
                  className=" scale-50 w-fit cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <div className="flex border-2 border-primary rounded-lg ">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="h-14 sm:h-12 rounded-lg bg-white px-4 focus:outline-none w-full active:border-none flex-grow"
                  {...Signupdetail("Cpassword", {
                    required: "Password is required",
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                />
                <img
                  src={showpass}
                  alt=""
                  className=" scale-50 w-fit cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              </div>
              {errors.Cpassword && (
                <p className="text-red-500">{errors.Cpassword.message}</p>
              )}
              <button
                disabled={disabler}
                className="w-full h-14 sm:h-12 rounded-xl bg-sec text-white"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-3 my-3">
            <p className="text-sm text-center sm:text-xs">
              Already have an account?{" "}
              <span>
                <Link className="text-sec" to="/login">
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Signup;
