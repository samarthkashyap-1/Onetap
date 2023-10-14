import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/logo.png";
import loader from "./assets/loader.json";
import wave from "./assets/wavee.svg";
import wave2 from "./assets/wave2.svg";

import Navbar from "./components/Navbar";
import blob from "./assets/blob.svg";
import demo from "./assets/landing.png";

function App() {
  const [count, setCount] = useState(0);
  const [load, setload] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {
      setload(true);
    }, 3000);
  });
  if (!load) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img src={logo} alt="" className="w-96 animate-pulse" />
      </div>
    );
  }

  return (
    <>
      <h1 className="hidden sm:block md:block text-5xl text-center mt-96">
        Currently not supported on mobile and tablet devices
      </h1>
      <div className="sm:hidden md:hidden">
        <img
          src={wave}
          alt=""
          className="absolute top-0 left-0 right-0 -z-10 "
        />
        <Navbar />
        <div className="h-screen px-20 flex ">
          <div className=" mt-40 text-primary flex-1">
            <h1 className="text-3xl mt-10 text-white">Hola!!!</h1>
            <h1 className="text-3xl mt-6">
              Welcome to <p className="text-white text-7xl">One Tap</p>{" "}
            </h1>
            <p className="text-primary text-2xl mt-4">
              Streamline, Simplify, One Tap!
            </p>
            <h1 className="text-4xl mt-12">
              Where Streamlining and Simplifying are Just One Tap Away!{" "}
            </h1>
          </div>

          <div className=" flex-1 mt-40 ">
            <img
              src={blob}
              alt=""
              className=" scale-75 mt-10 -z-10 absolute top-0"
            />
            <img src={demo} alt="" className="scale-90 mt-10" />
          </div>
        </div>
        <div className=" px-20  py-10 ">
          <h1 className="text-4xl text-primary">About Us</h1>
          <p className="text-sec text-xl mt-8">
            We're dedicated to making your life simpler and more streamlined.
            With "One Tap," you can access all the essential information and
            resources you need in just a single tap. Our commitment is to
            provide convenience at your fingertips.
          </p>
        </div>

        <div className=" px-20 p-10 ">
          <h1 className="text-4xl text-primary">Reach Us</h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-1/2 h-14 rounded-lg bg-white px-4"
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
                    className="w-1/2 h-14 rounded-lg bg-white px-4"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email is not valid.",
                      },
                    })}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-1/2 h-14 rounded-lg bg-white px-4"
                    {...register("phone", {
                      required: "Phone is required",
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-1/2 h-14 rounded-lg bg-white px-4"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
                {errors.subject && (
                  <p className="text-red-500">{errors.subject.message}</p>
                )}
                <div className="flex gap-4">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="w-full h-40 rounded-lg bg-white p-4"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
                <div className="flex justify-end">
                  <button className="w-40 h-14 rounded-xl bg-sec text-white">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="relative mt-20">
          <img src={wave2} alt="" className="w-full" />
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <div>
              <p>Design and Developed by</p>
              <p>Samarth Kashyap</p>
            </div>
            <div className="flex gap-4 mx-auto text-xs">
              <a
                href="https://github.com/samarthkashyap-1"
                target="_blank"
                className="hover:text-sec transition-colors duration-300 ease-in-out"
              >
                Github
              </a>
              <a
                href="https://www.instagram.com/samarthkashyap_/"
                target="_blank"
                className="hover:text-sec transition-colors duration-300 ease-in-out"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/samarth-kashyap-5249b9207/"
                target="_blank"
                className="hover:text-sec transition-colors duration-300 ease-in-out"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/samarthkashyap0"
                target="_blank"
                className="hover:text-sec transition-colors duration-300 ease-in-out"
              >
                Twitter
              </a>
            </div>
            <div className="mx-auto mt-2">
              <p className="text-xs">©2023 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
