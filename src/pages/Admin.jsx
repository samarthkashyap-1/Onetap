import React, { useEffect, useState } from "react";
import UserLink from "../components/UserLink";
import logo from "../assets/logo.png";
import back from "../assets/back.png";
import { Link } from "react-router-dom";
import AvatarSelector from "../components/AvatarSelector";
import del from "../assets/delete.svg";
import x from "../assets/x.png";
import insta from "../assets/insta.svg";
import behance from "../assets/behance.svg";
import github from "../assets/git.svg";
import linkedin from "../assets/link.svg";
import youtube from "../assets/youtube.svg";
import pinterest from "../assets/pinterest.svg";
import twitch from "../assets/twitch.svg";
import portfolio from "../assets/portfolio.png";
import cardatemp from "../assets/cardatemp.png";
import cardbtemp from "../assets/cardbtemp.png";
import cardctemp from "../assets/cardctemp.png";
import carddtemp from "../assets/carddtemp.png";
import cardetemp from "../assets/cardetemp.png";
import cardftemp from "../assets/cardftemp.png";
import cardgtemp from "../assets/cardgtemp.png";
import { Fade } from "react-awesome-reveal";
import { set } from "react-hook-form";
import { useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import Toast from "./Toast";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";



const Admin = ({ allprofile }) => {
  const location = useLocation();
   
  const navigate = useNavigate();
     useEffect(() => {
       if (!localStorage.getItem("auth")) {
         navigate("/login");
       }
     }, [location.pathname]);

  const [unique, setunique] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const [data, setData] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [usercard, setUsercard] = useState("");
  const [Profile, setProfile] = useState([]);
  const [existuser, setexistuser] = useState();
  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const cards = [
    {
      id: 1,
      image: cardatemp,
      name: "Breeze",
    },
    {
      id: 5,
      image: cardetemp,
      name: "Pixel",
    },
    {
      id: 2,
      image: cardbtemp,
      name: "Hex",
    },
    {
      id: 7,
      image: cardgtemp,

      name: "Peachy",
    },
    {
      id: 6,
      image: cardftemp,
      name: "Eco Boy",
    },
    {
      id: 3,
      image: cardctemp,
      name: "Dear Diary",
    },
    {
      id: 4,
      image: carddtemp,
      name: "Bloom",
    },
  ];
  const logos = {
    x: x,
    instagram: insta,
    behance: behance,
    github: github,
    linkedin: linkedin,
    youtube: youtube,
    pinterest: pinterest,
    portfolio: portfolio,
    twitch: twitch,
  };

  const completeprofile = async () => {
    const profile = {
      username: username.replace(/\s/g, ""),
      avatar: selectedAvatar,
      email: JSON.parse(localStorage.getItem("auth")).email?.email,
      links: data,
      card: usercard,
    };

    if (existuser) {
     await patchdata(profile);
     toast.success("Profile Updated Successfully");
    }
    else{
      await postdata(profile);
      toast.success("Profile Created Successfully");
    }

    

    setUsername("");
    setSelectedAvatar("");
    setData([]);
    setCurrentStep(1);
  };


  const patchdata = async (profile) => {
   try{
         const res = await axios.patch(
      `http://localhost:3001/profiles/${existuser.id}`,
      profile
    );
    const data = res.data;
     toast.success("Profile Updated Successfully");
    window.open(`/${profile.username}`, "_blank");
   }
    catch(error){
      toast.error("Something went wrong");
    }

  }

  const checkuserexist = () => {
   const email= JSON.parse(localStorage.getItem("auth"))?.email;
   const finduser = allprofile.find((profile) => profile.email === email);
   if(finduser){
     setexistuser(finduser);
    setData(prev=>finduser.links);
   }
  }

  const postdata = async (profile) => {
   try{
     const res = await axios.post("http://localhost:3001/profiles", profile);
    const data = res.data;
    toast.success("Profile Updated Successfully");
    window.open(`/${profile.username}`, "_blank");
   }
   catch(error){

     toast.error("Something went wrong");
   }
  };

  const deletelink = (id) => {
    setData((prev) => prev.filter((d) => d.id !== id));
  };


   useEffect(() => {
    checkuserexist();
   }, []);

  useEffect(() => {
    
    if (username === "" || username === null || username === undefined) {
      setunique(false);
      return;
    }
    const isUnique = !allprofile.some(
      (profile) => profile.username === username
    );
    setunique(isUnique);

  // create a logic if the username is same as the previous one then it should be unique
  if (existuser) {
    if (existuser.username === username) {
      setunique(true);
    }}
  }, [username, allprofile])

  
 
  return (
    <div className="sm:py-10">
      <Toast />
      {currentStep <= 1 && (
        <Link to="/">
          <div className="absolute flex justify-center top-5 cursor-pointer">
            <img src={back} alt="" className="w-8" />
            <p className="my-auto">Back</p>
          </div>
        </Link>
      )}

      <div className="bg-primary w-[80%] mx-auto rounded-xl py-2 mt-5  sm:w-2/3 md:w-1/2">
        <Link to="/">
          <img src={logo} alt="" className="h-16 sm:h-16 mx-auto" />
        </Link>
      </div>
      {currentStep === 1 && (
        <div className="flex  gap-6 md:flex-col sm:px-10 items-center mt-10 font-Merri px-20">
          <div className=" flex-1 items-center justify-center">
            <div className=" p-8 rounded ">
              <h1 className="text-4xl font-semibold mb-4">Hey there!!!</h1>
              <div>
                <input
                  type="text"
                  placeholder="Create a username"
                  className=" block p-3 border-2 rounded-md w-full my-5 outline-sec"
                  defaultValue={existuser ? existuser.username : username}
                  onChange={(e) => setUsername((prev) => e.target.value)}
                />
                {!unique ? (
                  <p className="text-red-600 text-xs">Be yourself, Be unique</p>
                ) : (
                  <p className="text-green-600 text-xs">Awesome</p>
                )}
              </div>
            </div>
            <AvatarSelector onAvatarSelect={handleAvatarSelect} />
            <div className="px-8">
              <input
                type="text"
                placeholder="Create a username"
                className=" block p-3 border-2 rounded-md w-full my-5 outline-sec"
                defaultValue={JSON.parse(localStorage.getItem("auth"))?.email}
                onChange={(e) => setUsername((prev) => e.target.value)}
                readOnly
              />
            </div>
          </div>

          <div className="flex-1 mb-auto">
            <UserLink setData={setData} />
            {data.map((d) => {
              return (
                <div className="flex justify-between p-2 w-full border-b gap-2 sm:gap-1">
                  <img
                    src={logos[d.platform]}
                    alt=""
                    className=" scale-75 sm:scale-50"
                  />
                  <p className="my-auto text-md sm:text-xs truncate text-ellipsis w-96 sm:w-36">
                    {d.link}
                  </p>
                  <button
                    onClick={() => deletelink(d.id)}
                    className="bg-black text-white rounded-lg p-1 sm:scale-75"
                  >
                    <img src={del} alt="" className="invert scale-75" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <>
          <div className="px-20 sm:px-10 mt-10 font-Merri">
            <h1 className="text-4xl sm:text-2xl sm:text-center">
              Select a template
            </h1>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 font-Merri gap-10 px-20 sm:px-10 mt-10">
            {cards.map((card) => {
              return (
                <Fade triggerOnce>
                  <div
                    className={`flex cursor-pointer group flex-col justify-center items-center border  p-2 rounded-lg 
                  ${usercard === card.id ? "border-sec border-2" : ""}
                      `}
                    onClick={() => setUsercard(card.id)}
                  >
                    <img
                      src={card.image}
                      alt=""
                      className="w-52 rounded-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300"
                    />

                    <h1 className="text-2xl mt-4">{card.name}</h1>
                  </div>
                </Fade>
              );
            })}
          </div>
        </>
      )}

      <div className="flex mt-5 w-full sm:flex-col sm:gap-5 sm:p-10 justify-between py-10 px-20">
        {currentStep > 1 && (
          <button
            className="bg-primary px-5 py-3 text-white rounded-lg"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {currentStep <= 1 && (
          <button
            className={`bg-primary px-5 py-3  text-white rounded-lg ${
              username === "" || selectedAvatar === "" || data.length === 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }

            ${currentStep <= 1 ? "ml-auto" : ""}`}
            onClick={handleNext}
            disabled={
              username === "" ||
              selectedAvatar === "" ||
              data.length === 0 ||
              !unique
            }
          >
            Next
          </button>
        )}
        {currentStep === 2 && (
          <button
            className="bg-primary px-5 py-3  text-white rounded-lg"
            onClick={completeprofile}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Admin;
