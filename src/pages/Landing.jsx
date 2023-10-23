import React from "react";
import { useState} from "react";
import { useForm } from "react-hook-form";

import wave from "../assets/wavee.svg";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import blob from "../assets/blob.svg";
import demo from "../assets/landing.png";
import { Fade } from "react-awesome-reveal";

import { toast} from "react-toastify";

import Toast from "./Toast";
import { Contactapi } from "../services/api";

const Landing = ({ auth, setAuth }) => {
  const [disabler,setdisabler] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    try {
      setdisabler(true)
      console.log(data);
      const result = await Contactapi(data)
        if(result.status===200){
          toast.success("Message Recieved")
        }
        reset();
      setdisabler(false)
    } catch (error) {
      setdisabler(false)
      toast.error("Something went wrong")
    }
  };
  // console.log(auth);
  


  return (
    <div className="">
      <Toast />
      <Fade triggerOnce>
        <header
          className=" bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${wave})`,
          }}
        >
          <Navbar auth={auth} setAuth={setAuth} />
          <div className="h-screen px-20 sm:px-10 flex ">
            <div className=" mt-40 text-primary flex-1">
              <Fade triggerOnce>
                <h1 className="text-2xl md:text-xl mt-10 text-white">
                  Hola!!!
                </h1>
                <h1 className="text-2xl md:text-xl  mt-6">
                  Welcome to{" "}
                  <p className="text-white md:text-4xl text-6xl">One Tap</p>{" "}
                </h1>
                <p className="text-primary text-xl md:text-xl mt-4">
                  Streamline, Simplify, One Tap!
                </p>
                <h1 className="text-3xl mt-12 md:text-2xl">
                  Where Streamlining and Simplifying are Just One Tap Away!{" "}
                </h1>
                <div className="mt-12">
                  <Link
                    to={`${
                      !localStorage.getItem("token") ? "/login" : "/admin"
                    }`}
                  >
                    <button className="w-fit shadow-xl px-5  h-14 rounded-xl sm:max-h-10 bg-primary text-sec ">
                      Claim Your Link
                    </button>
                  </Link>
                </div>
              </Fade>
            </div>

            <div className=" flex-1 mt-40 z-10 sm:hidden ">
              <img
                src={blob}
                alt=""
                className=" scale-75 mt-10 -z-10 md:mt-40 absolute top-0"
              />
              <Fade triggerOnce>
                <img
                  src={demo}
                  loading="lazy"
                  alt=""
                  id="tilt"
                  className="scale-90 mt-10 z-10"
                />
              </Fade>
            </div>
          </div>
        </header>
      </Fade>

      <div className=" px-20 sm:p-5  my-10 sm:px-10 ">
        <h1 className="text-4xl text-primary my-8">About Us</h1>
        <p className="text-sec px-10 sm:px-0 text-lg mt-8">
          We're dedicated to making your life simpler and more streamlined. With
          "One Tap," you can access all the essential information and resources
          you need in just a single tap. Our commitment is to provide
          convenience at your fingertips.
        </p>
      </div>

      <div className=" px-20 p-10 sm:p-5 sm:px-10 ">
        <h1 className="text-4xl text-primary">Reach Us</h1>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col gap-4 w-1/2 md:w-full mx-auto">
                <input
                  type="text"
                  placeholder="Name"
                  className=" h-14 rounded-lg bg-white px-4 border-2 border-primary"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  className=" h-14 rounded-lg  bg-white px-4 border-2 border-primary"
                  {...register("email", {
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

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="w-full h-40 rounded-lg bg-white p-4 border-2 border-primary"
                  {...register("message", {
                    required: "Message is required",
                  })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-end w-1/2 mx-auto">
                <button
                  disabled={disabler}
                  className={`w-40 h-14 rounded-xl bg-sec text-white ${disabler?" cursor-wait":""}`}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
