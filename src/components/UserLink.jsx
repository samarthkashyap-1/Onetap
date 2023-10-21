import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import shortid from "shortid";
const UserLink = ({ setData }) => {
    
    
  const {
    register: Link,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    data.id = shortid.generate();
    setData(prev => [...prev, {...data}]);
    reset();
    setind(prev => prev + 1)
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-5 p-2 bg-sec rounded-md md:flex-col "
    >
      <div>
        <select
          className="block p-2 border rounded-md shadow-lg sm:mx-auto"
          {...Link("platform", {
            validate: () => {
              if (watch("platform") == "") {
                return "Please select platform";
              }
            },
          })}
        >
          <option value="">Select Platform</option>
          <option value="instagram">Instagram</option>
          <option value="x">X</option>
          <option value="github">Github</option>
          <option value="linkedin">Linkedin</option>
          <option value="portfolio">Portfolio</option>
          <option value="youtube">Youtube</option>
          <option value="twitch">Twitch</option>
          <option value="behance">Behance</option>
          <option value="pinterest">Pinterest</option>
        </select>
        {errors.platform && (
          <p className="text-red-500 text-xs sm:text-center">
            {errors.platform.message}
          </p>
        )}
      </div>
      <div className="flex-grow">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Username"
          className=" block p-2 border rounded-md w-full outline-sec shadow-lg"
          {...Link("link", {
            required: "link is required",
          })}
        />
        {errors.link && (
          <p className="text-red-500 text-xs sm:text-center">
            {errors.link.message}
          </p>
        )}
      </div>
      <div className="flex">
        <button className="bg-primary px-5 py-3 sm:mx-auto  text-white rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserLink;
