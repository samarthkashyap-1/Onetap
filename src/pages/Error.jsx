import React from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen px-10">

      <div className="bg-primary w-1/4 mx-auto rounded-xl py-5 mt-5 sm:w-full md:w-1/2">
        <Link to="/">
        <img src={logo} alt="" className="h-20 sm:h-16 mx-auto" />
        </Link>
      </div>
      <h1 className="mt-36 sm:px-10 px-20 text-3xl text-center ">404 Not Found</h1>
    </div>
  );
}

export default Error
