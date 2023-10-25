import React ,{useState,useEffect}from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import back from "../assets/back.png";
import axios from 'axios';
import Toast from './Toast';
import { toast } from 'react-toastify';
import { Fade } from 'react-awesome-reveal';
import loader from "../assets/loader.json"
import Lottie from 'lottie-react';
import { Forgotpasswordapi } from '../services/api';

const Forgotpassword = () => {
     localStorage.clear();
     const [loading, setLoading] = useState(false);
    const [emailtoreset, setemailtoreset] = useState()
    
    const resetPass = async (emailtoreset)=>{
      console.log(emailtoreset.toLowerCase())
        
    try {
        setLoading(true)
        const data = {
          email: emailtoreset.toLowerCase(),
        };
    const result = await Forgotpasswordapi(data)
        console.log(result.data.link)
    if(result.status===200){
        
        toast.success("Reset link has been sent");
        setemailtoreset("")
    }else{
        toast.error("Something went wrong");
    }
    console.log("false running");
    setLoading(false)

} catch (error) {
    setLoading(false)
    
    // if(error.response.status===500 || error.code==="") return toast.error("Oops! Something went wrong")
    if(error.code==="ERR_NETWORK" || error.response.status===500 ) return toast.error("An error occurred. Please try again later");
    if(error.response.status===404) return toast.error("Email is not registered")
    if(error.response.status===400) return toast.error("Email is not valid")
    // toast.error("Oops! Something went wrong")
    
}
    }
  return (
    <div className="flex flex-col gap-10 h-screen px-10">
      <div
        className={`h-screen bg-black bg-opacity-50 z-50 absolute left-0 right-0 top-0 flex flex-col justify-center items-center
         ${loading ? "" : "hidden"}`}
      >
        <Lottie animationData={loader} className="w-28 sm:w-16" />
        <p className="text-white text-sm animate-bounce">Preparing your link</p>
      </div>
      <Link to="/login">
        <div className="absolute flex z-30 justify-center top-5 cursor-pointer">
          <img src={back} alt="" className="w-8" />
          <p className="my-auto">Back</p>
        </div>
      </Link>
      <Fade triggerOnce>
        <div className="bg-primary w-1/4 mx-auto sm:mt-10 rounded-xl py-5 sm:w-full md:w-1/2">
          <Link to="/">
            <img src={logo} alt="" className="h-20 sm:h-16 mx-auto" />
          </Link>
        </div>

        <div className="flex flex-col w-1/4 mx-auto gap-6 mt-10 sm:w-full md:w-1/2 ">
          <div>
            <h1 className="text-2xl">Forgot Password</h1>
          </div>
          <input
            type="text"
            className=" h-14 rounded-lg bg-white px-4 border-2 border-primary"
            placeholder="Enter Email"
            value={emailtoreset}
            onChange={(e) => {
              setemailtoreset(e.target.value);
            }}
          />
          <button
            className={`w-full h-14 rounded-xl bg-sec text-white ${
              emailtoreset ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={() => resetPass(emailtoreset)}
            disabled={emailtoreset ? false : true}
          >
            Reset Password
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-sm text-center sm:text-xs">
            Don't have an account?{" "}
            <span>
              <Link className="text-sec" to="/signup">
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </Fade>
      <Toast />
    </div>
  );
}

export default Forgotpassword
