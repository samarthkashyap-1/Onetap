import React from 'react'
import wave from "../assets/wavee.svg"
import { Link } from 'react-router-dom';

const Discover = () => {
  return (
    <div>
      <header
        className=" bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${wave})`,
        }}
      >
        <div className=" h-screen p-20 flex flex-col gap-10 items-center justify-center">
          <div className="max-w-lg text-center mt-20 mx-auto sm:mt-96">
            <h1 className="text-5xl mb-4 text-white">Welcome to OneTap</h1>
            <p className="text-lg mb-8">
              Your All-In-One Solution for Personalized Link Sharing
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-4">What is OneTap?</h1>
            <p className="text-lg mb-8">
              OneTap is your all-in-one solution for creating a personalized
              landing page for all your important links. Say goodbye to the
              hassle of sharing multiple links across social media profiles,
              email signatures, or marketing materials. With OneTap, you can
              create a single, visually appealing link that serves as your
              digital business card.
            </p>
          </div>
        </div>
      </header>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold mb-4">Why OneTap</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 px-20 gap-6">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200 cursor-pointer ease-in-out">
          <h2 className="text-xl font-semibold mb-2">
            User-Friendly Interface
          </h2>
          <p className="text-gray-600">
            Our user-friendly dashboard makes it easy to set up and customize
            your OneTap landing page. No technical skills required!
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200 cursor-pointer ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Multiple Link Support</h2>
          <p className="text-gray-600">
            Share your website, social media profiles, blog, products, and more,
            all in one place. Make it easy for your audience to discover
            everything you have to offer.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200 cursor-pointer ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Beautiful Templates</h2>
          <p className="text-gray-600">
            Choose from a selection of professionally designed templates to make
            your OneTap page uniquely yours.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200 cursor-pointer ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Social Integration</h2>
          <p className="text-gray-600">
            Connect your social media for a seamless online presence. Share your
            OneTap page on Instagram, Twitter, TikTok, and more.
          </p>
        </div>

        {/* Feature 7 */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:bg-sec hover:text-white transition-all duration-200 cursor-pointer ease-in-out">
          <h2 className="text-xl font-semibold mb-2">SEO Optimization</h2>
          <p className="text-gray-600">
            Improve your online visibility with our SEO-friendly OneTap pages.
          </p>
        </div>
      </div>
      {!localStorage.getItem("token") && (
        <div className="flex mt-20">
          <Link
            to="/signup"
            className="w-fit shadow-xl p-5 mx-auto text-center  rounded-xl sm:max-h-10 bg-primary text-sec "
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
}

export default Discover
