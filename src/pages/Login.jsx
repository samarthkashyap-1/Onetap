import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import showpass from "../assets/showpass.png";
import { Link } from "react-router-dom";
import back from "../assets/back.png";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "./Toast";
import { Context } from "./Context";
import { useContext } from "react";
import loader from "../assets/loader.json"
import Lottie from "lottie-react";
const Login = () => {
  const [disabler, setdisabler] = useState(false);
  const {loginUser, setloginUser} = useContext(Context)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();



  const {
    register: Logindetail,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //  console.log(data);
    data.email = data.email.toLowerCase();
    console.log(data)
    loginuser(data);
  };

  const loginuser = async (data) => {
    try {
       localStorage.clear();
      setdisabler(true)
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}/login`,
        data
      );
      const user = res.data;
      console.log(user.token)
      toast.success("Logged in Successfully");
        localStorage.setItem("token", JSON.stringify({token:user.token,
        email:user.email
        }));
        setloginUser(user.email)
        
        reset();
        setdisabler(false)
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
    } 
    
       catch (error) {
        setdisabler(false)
      if (error.response) {
        if (error.response.status === 404) {
          // Handle the case when the email is not registered
          console.log('Email is not registered:', error.response.data);
          toast.error('Email is not registered');
        } else if (error.response.status === 401) {
          // Handle the case of invalid email or password
          console.log('Invalid email or password:', error.response.data);
          toast.error('Invalid email or password');
        } else {
          // Handle other errors
          // console.error('An error occurred:', error);
          toast.error('An error occurred. Please try again later.');
        }
      } else {
        console.error('An error occurred:', error);
        // Handle unexpected errors, possibly network-related
        toast.error('An error occurred. Please try again later.');
      }
    }
  };


  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex flex-col gap-10 h-screen px-10">
      <div
        className={`h-screen bg-black bg-opacity-50 z-50 absolute left-0 right-0 top-0 flex flex-col justify-center items-center
         ${disabler ? "" : "hidden"}`}
      >
        <Lottie animationData={loader} className="w-28 sm:w-16" />
        <p className="text-white text-sm animate-bounce">
          Logging you in
        </p>
      </div>
      <Toast />
      <Fade triggerOnce>
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

              <button
                disabled={disabler}
                className={`w-full h-14 rounded-xl bg-sec text-white  ${
                  disabler ? "cursor-wait" : ""
                }`}
              >
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
              <Link to="/login/forgotpassword" className="text-sec">
                Forgot your password?
              </Link>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
