import React from 'react'
import wave from "../assets/wavee.svg"
import { Link } from 'react-router-dom';
import cardetemp from "../assets/cardetemp.png";
import cardftemp from "../assets/cardftemp.png";
import cardbtemp from "../assets/cardbtemp.png"; 
import Tilt from 'react-parallax-tilt';
import { Fade } from 'react-awesome-reveal';
const Discover = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <header
        className=" bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${wave})`,
        }}
      >
        <Fade triggerOnce>
          <div className=" min-h-screen p-20 flex gap-10 sm:flex-col items-center  sm:px-10 justify-center">
            <div className="text-center mt-20 mx-auto sm:mt-28 flex-1 ">
              <h1 className="text-4xl sm:text-3xl  mb-4 text-white">
                What is OneTap?
              </h1>
              <p className="text-lg mb-8 text-primary">
                OneTap is your all-in-one solution for creating a personalized
                landing page for all your important links. Say goodbye to the
                hassle of sharing multiple links across social media profiles,
                email signatures, or marketing materials. With OneTap, you can
                create a single, visually appealing link that serves as your
                digital business card.
              </p>
            </div>
            <div className="flex-1 flex justify-center sm:ml-20  relative rounded-lg">
              <Tilt
                tiltAngleXInitial={10}
                tiltAngleYInitial={100}
                className="parallax-effect mt-32 ml-20 cursor-pointer "
                perspective={500}
              >
                <div className="inner-element w-full h-full ">
                  <img
                    src={cardftemp}
                    alt=""
                    className="absolute check rounded-lg w-36 sm:w-32 h-fit top-10 sm:translate-z-16"
                  />

                  <div className="inner-elementt">
                    <img
                      src={cardbtemp}
                      alt=""
                      className="absolute check rounded-lg w-24 h-fit sm:w-20 top-20 sm:translate-z-0 "
                    />
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </Fade>

        <div className="text-center"></div>
      </header>
      <Fade triggerOnce>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold mb-4">Why OneTap</h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 px-20 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200  ease-in-out hover:scale-105">
            <Fade triggerOnce>
              <h2 className="text-xl font-semibold mb-2">
                User-Friendly Interface
              </h2>
              <p className="text-gray-600">
                Our user-friendly dashboard makes it easy to set up and
                customize your OneTap landing page. No technical skills
                required!
              </p>
            </Fade>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200  ease-in-out hover:scale-105">
            <Fade triggerOnce>
              <h2 className="text-xl font-semibold mb-2">
                Multiple Link Support
              </h2>
              <p className="text-gray-600">
                Share your website, social media profiles, blog, products, and
                more, all in one place. Make it easy for your audience to
                discover everything you have to offer.
              </p>
            </Fade>
          </div>
          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200  ease-in-out hover:scale-105">
            <Fade triggerOnce>
              <h2 className="text-xl font-semibold mb-2">
                Beautiful Templates
              </h2>
              <p className="text-gray-600">
                Choose from a selection of professionally designed templates to
                make your OneTap page uniquely yours.
              </p>
            </Fade>
          </div>
          {/* Feature 6 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200  ease-in-out hover:scale-105">
            <Fade triggerOnce>
              <h2 className="text-xl font-semibold mb-2">Social Integration</h2>
              <p className="text-gray-600">
                Connect your social media for a seamless online presence. Share
                your OneTap page on Instagram, Twitter, TikTok, and more.
              </p>
            </Fade>
          </div>

          {/* Feature 7 */}

          <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200  ease-in-out hover:scale-105">
            <Fade triggerOnce>
              <h2 className="text-xl font-semibold mb-2">SEO Optimization</h2>
              <p className="text-gray-600">
                Improve your online visibility with our SEO-friendly OneTap
                pages.
              </p>
            </Fade>
          </div>
        </div>
      </Fade>

      <div className="flex mt-20 justify-center">
        <Link to={!localStorage.getItem("token") ? "/signup" : "/admin"}>
          <button className="w-fit mx-auto shadow-xl p-5 text-center hover:bg-sec hover:text-white transition-all duration-200   rounded-xl bg-primary text-sec ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Discover
