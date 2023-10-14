import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/logo.png";
import loader from "./assets/loader.json";
import wave from "./assets/wavee.svg";
import wave2 from "./assets/wave2.svg";

import Navbar from "./components/Navbar";
import blob from "./assets/blob.svg";
import demo from "./assets/landing.png";
import { Fade } from "react-awesome-reveal";

function App() {
  const [count, setCount] = useState(0);
  const [load, setload] = useState(false);
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

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
      {/* <h1 className="hidden sm:block md:block text-5xl text-center mt-96">
        Currently not supported on mobile and tablet devices
      </h1> */}
      <div className="">
        <Fade triggerOnce>
          <header
            className=" bg-cover bg-no-repeat "
            style={{
              backgroundImage: `url(${wave})`,
            }}
          >
            <Navbar />

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
                </Fade>
              </div>

              <div className=" flex-1 mt-40 z-10 sm:hidden ">
                <img
                  src={blob}
                  alt=""
                  className=" scale-75 mt-10 -z-10 absolute top-0"
                />
                <Fade triggerOnce>
                  <img
                    src={demo}
                    loading="lazy"
                    alt=""
                    className="scale-90 mt-10 z-10"
                  />
                </Fade>
              </div>
            </div>
          </header>
        </Fade>

        <div className=" px-20 sm:p-5  my-10 sm:px-10 ">
          <h1 className="text-5xl text-primary my-8">About Us</h1>
          <p className="text-sec text-2xl mt-8">
            We're dedicated to making your life simpler and more streamlined.
            With "One Tap," you can access all the essential information and
            resources you need in just a single tap. Our commitment is to
            provide convenience at your fingertips.
          </p>
        </div>

        <div className=" px-20 p-10 sm:p-5 sm:px-10 ">
          <h1 className="text-4xl text-primary">Reach Us</h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex sm:flex-col gap-4">
                  <div className="flex flex-col gap-6 w-1/2 sm:w-full">
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
                  </div>

                  <div className="flex flex-col gap-4 w-1/2 sm:w-full">
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
                </div>
                <div className="flex justify-end">
                  <button className="w-40 h-14 rounded-xl bg-sec text-white">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <footer
          className="relative bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${wave2})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <div className="text-center text-white pt-20 pb-6">
            <div>
              <p>Design and Developed by</p>
              <p>Samarth Kashyap</p>
            </div>
            <div className="flex gap-4 justify-center text-xs text-center mt-4">
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
        </footer>
      </div>
    </>
  );
}

export default App;
