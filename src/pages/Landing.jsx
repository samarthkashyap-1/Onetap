import React from "react";
import { useState} from "react";
import { useForm } from "react-hook-form";

import wave from "../assets/wavee.svg";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import cardatemp from "../assets/cardatemp.png";
import cardgtemp from "../assets/cardgtemp.png";
import cardctemp from "../assets/cardctemp.png";
import carddtemp from "../assets/carddtemp.png";
import { Fade } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
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
          <div className="min-h-screen p-20 sm:px-10 flex sm:flex-col ">
            <div className=" mt-20 text-primary flex-1">
              <Fade triggerOnce>
                <h1 className="text-2xl md:text-xl mt-10 text-white">
                  Hola!!!
                </h1>
                <h1 className="text-2xl md:text-xl mt-6">
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
                    <button className="w-fit hover:bg-sec hover:text-white transition-all duration-200  shadow-xl px-5  h-14 rounded-xl sm:max-h-10 bg-primary text-sec ">
                      Claim Your Link
                    </button>
                  </Link>
                </div>
              </Fade>
            </div>

            <div className="flex-1 flex justify-center relative rounded-lg">
              <Fade triggerOnce>
                <Tilt
                  className="parallax-effectt rounded-lg  cursor-pointer  mt-32  "
                  perspective={500}
                >
                  <div className="inner-element w-full h-full ">
                    <img
                      src={cardgtemp}
                      alt=""
                      className="absolute rounded-lg w-28 sm:w-24 h-fit -bottom-5 -right-12 sm:-right-10 sm:bottom-0"
                    />

                    <img
                      src={carddtemp}
                      alt=""
                      className="absolute rounded-lg w-28 h-fit sm:w-24 -top-5 -left-16  sm:-left-10 sm:top-0"
                    />
                  </div>
                </Tilt>
              </Fade>
            </div>
          </div>
        </header>
      </Fade>

      <div className=" px-20 sm:p-5  my-10 sm:px-10 ">
        <h1 className="text-3xl font-semibold text-primary my-8">About Us</h1>
        <p className="text-sec px-10 sm:px-0 text-lg mt-8">
          OneTap is a versatile linking and sharing app that allows you to
          create a stunning, personalized landing page for all your important
          links. Say goodbye to the hassle of sharing multiple links across
          social media profiles, email signatures, or marketing materials. With
          OneTap, you can create a single, visually appealing link that serves
          as your digital business card.
        </p>
      </div>

      <div className=" px-20 p-10 sm:p-5 sm:px-10 ">
        <h1 className="text-3xl  text-primary font-semibold">
          Ask Us Anything
        </h1>
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
                  className={`w-40 h-14 rounded-xl bg-sec text-white ${
                    disabler ? " cursor-wait" : ""
                  }`}
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
