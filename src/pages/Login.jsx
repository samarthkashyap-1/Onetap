import React,{useState} from 'react'
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import showpass from "../assets/showpass.png";
import { Link } from "react-router-dom";
import back from "../assets/back.png";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };


       const {
         register: Logindetail,
         handleSubmit,reset,
         formState: { errors },
       } = useForm();

       const onSubmit = (data) => {
         console.log(data);
         reset();
       };
  return (
    <div className="flex flex-col gap-10 px-10">
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
        <h1 className="text-5xl text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-1/4 mx-auto gap-6 mt-10 sm:w-full md:w-1/2 ">
            <input
              type="email"
              placeholder="Email"
              className=" h-14 rounded-lg bg-white px-4 border-2 border-primary"
              {...Logindetail("email", {
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
                className="h-14 rounded-lg bg-white px-4 focus:outline-none w-full active:border-none flex-grow"
                {...Logindetail("password", {
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

            <button className="w-full h-14 rounded-xl bg-sec text-white">
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-sm text-center sm:text-xs">
            Don't have an account?{" "}
            <span>
              <Link className="text-sec" to="/signup">
                Sign up
              </Link>
            </span>
          </p>
          <p className="text-sec text-sm sm:text-xs text-center">
            <a href="">Forgot your password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login