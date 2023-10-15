import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import showpass from "../assets/showpass.png";
import  back from "../assets/back.png";
const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

 

  const {
    register: Signupdetail,
    handleSubmit,reset,watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };
  return (
    <div className="flex flex-col gap-10 sm:gap-5 px-10">
      <Link to="/">
      <div className="absolute flex justify-center top-5 cursor-pointer">
        <img src={back} alt="" className="w-8" />
        <p className="my-auto">Back</p>
      </div>
      </Link>
      <div className="bg-primary w-1/4 mx-auto rounded-xl py-5 mt-5 sm:w-full md:w-1/2">
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
              <button
                className=" scale-50 w-fit"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <img src={showpass} alt="" />
              </button>
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
              <button
                className=" scale-50 w-fit"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <img src={showpass} alt="" />
              </button>
            </div>
            {errors.Cpassword && (
              <p className="text-red-500">{errors.Cpassword.message}</p>
            )}
            <button className="w-full h-14 sm:h-12 rounded-xl bg-sec text-white">
              Sign up
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-3 mt-3">
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
    </div>
  );
};

export default Signup;