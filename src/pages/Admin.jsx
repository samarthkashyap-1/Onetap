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
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import avatar from "../assets/avatar.png";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";

import { Context } from "./Context";
import { useContext } from "react";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";
import avatar5 from "../assets/avatar5.svg";
import avatar6 from "../assets/avatar6.svg";
import { updateprofile, Createprofile } from "../services/api";



const Admin = ({ allprofile }) => {
   const avatars = [
     { id: 1, avatar: avatar1 },
     { id: 2, avatar: avatar2 },
     { id: 3, avatar: avatar3 },
     { id: 4, avatar: avatar4 },
     { id: 5, avatar: avatar5 },
     { id: 6, avatar: avatar6 },
   ];
   
  // console.log("Bearer " + token);
  const {loginUser,setloginUser} = useContext(Context)
  const location = useLocation();
  
  // console.log(loginUser.toString())
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // setloginUser(JSON.parse(localStorage.getItem("token")).email);
      setexistuser();
      return 
    }{
      
    }
    navigate("/login");
  }, [location.pathname,localStorage]);

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
    // console.log(avatar)
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

  const completeprofile = async (e) => {
    
    e.preventDefault();
    const profile = {
      username: username.replace(/\s/g, ""),
      avatar: selectedAvatar,
      email: loginUser,
      links: data,
      card: usercard,
      id: existuser ? existuser.id : "",
    };

    console.log(existuser)

    try {
      if (existuser) {
        await patchdata(profile);
        
      } else {
        await postdata(profile);
        
      }
    } catch (error) {
      // Handle the error and provide feedback to the user
      console.error("An error occurred:", error);
      toast.error("An error occurred while updating/creating the profile");
    }

    
    setCurrentStep(1);
    
    // window.location.reload();
    
  };



  const patchdata = async (profile) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
        },
      };
      setLoading(true);
      const data = await updateprofile(existuser.id, profile,config);
      console.log(data)
      setLoading(false);
      toast.success("Profile Updated Successfully");
      window.open(`/${profile.username}`, "_blank");
    } catch (error) {
      setLoading(false);
      console.log(error.message)
        if (error.response && error.response.status === 401) {
      // Unauthorized access, redirect to the login page
       localStorage.clear();
      toast.error("Unauthorized access. Please log in.");
      navigate('/login');
      toast.error("Something went wrong");
    }}
  };

  const checkuserexist = () => {
    console.log("checkuser run test")
    if (loginUser){
  
    const finduser = allprofile.find((profile) => profile.email === loginUser);
    

    if (finduser) {
      

      setUsername((prev) => finduser.username);
      setData((prev) => finduser.links);
      setUsercard((prev) => finduser.card);
      setSelectedAvatar((prev) => finduser.avatar);
      setexistuser(finduser);
     
    }
      console.log(existuser);
  };
}

  const postdata = async (profile) => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("token")).token
          }`,
        },
      };
      const res = await Createprofile(profile,config)
      const data = res.data;
      setLoading(false);
      toast.success("Profile Updated Successfully");
      window.open(`/${profile.username}`, "_blank");
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      if (error.response && error.response.status === 401) {
        localStorage.clear()
        // Unauthorized access, redirect to the login page
        toast.error("Unauthorized access. Please log in.");
        navigate("/login");
      }
      toast.error("Something went wrong");
    }
  };

  const deletelink = (id) => {
    setData((prev) => prev.filter((d) => d.id !== id));
  };

  useEffect(() => {
    checkuserexist();
  }, [location.pathname, localStorage, loginUser]);

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
      }
    }
  }, [username, allprofile]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  // console.log(existuser)


  return (
    <>
      <div
        className={`h-screen bg-black bg-opacity-50 z-50 absolute left-0 right-0 top-0 flex flex-col justify-center items-center
         ${loading ? "" : "hidden"}`}
      >
        <Lottie animationData={loader} className="w-28 sm:w-16" />
        <p className="text-white text-sm animate-bounce">
          Getting your links ready..
        </p>
      </div>
      <div
        className={`sm:pt-16 h-screen flex flex-col pt-5 ${
          loading ? "overflow-hidden" : ""
        }`}
      >
        <Toast />
        {currentStep <= 1 && (
          <Link to="/">
            <div className="absolute flex justify-center top-5 cursor-pointer">
              <img src={back} alt="" className="w-8" />
              <p className="my-auto">Back</p>
            </div>
          </Link>
        )}

        <div className="bg-primary  w-[50%] mx-auto rounded-xl flex justify-center py-2 sm:w-2/3 md:w-1/2">
          <Link to="/">
            <img src={logo} alt="" className="h-16 sm:h-16 mx-auto" />
          </Link>
        </div>
        <div className="flex   gap-6 md:flex-col sm:px-10 items-center mt-10 font-Merri px-20">
          {currentStep === 1 && (
            <div className=" w-1/2 mx-auto sm:w-full items-center justify-center">
              <div className=" p-8 rounded ">
                <h1 className="text-4xl font-semibold mb-4 sm:text-2xl">
                  Hey there!!!
                </h1>
                <div className="">
                  <label htmlFor="" className="text-sm">
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="Create a username"
                    className=" block p-3 border-2 rounded-md w-full my-1 outline-sec"
                    defaultValue={existuser ? existuser.username : username}
                    onChange={(e) => setUsername((prev) => e.target.value)}
                  />
                  {!unique ? (
                    <p className="text-red-600 text-xs animate-bounce">
                      Be yourself, Be unique
                    </p>
                  ) : (
                    <p className="text-green-600 text-xs">Awesome</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex-1 flex">
                  <img
                    src={selectedAvatar ? avatars.find((avatar)=>avatar.id == selectedAvatar).avatar : avatar}
                    alt=""
                    className="w-36 m-auto drop-shadow-2xl rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <AvatarSelector onAvatarSelect={handleAvatarSelect} />
                  {selectedAvatar ? (
                    <p></p>
                  ) : (
                    <p className="text-red-600 text-xs px-8 animate-bounce">
                      Select an avatar
                    </p>
                  )}
                </div>
              </div>

              <div className="px-8">
                <label htmlFor="" className="text-sm">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Create a username"
                  className=" block p-3 border-2 rounded-md w-full my-1 outline-sec"
                  defaultValue={loginUser}
                  onChange={(e) => setUsername((prev) => e.target.value)}
                  readOnly
                />
                <p className="text-xs text-green-600">Email is set</p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className=" w-1/2 sm:w-full mx-auto mb-auto">
              <Fade triggerOnce>
                <UserLink setData={setData} />
                {data.length < 3 && (
                  <p className="text-red-600 text-xs px-8 mt-2 animate-bounce">
                    Add atleast 3 link
                  </p>
                )}
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
              </Fade>
            </div>
          )}
        </div>

        {currentStep === 3 && (
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

        <div className="flex mt-auto mx-auto sm:flex-col items-center sm:gap-5  w-1/2 justify-between py-10 px-10">
          {currentStep > 1 && (
            <button
              className="bg-primary px-5 py-3 text-white rounded-lg"
              onClick={handlePrevious}
            >
              Prev
            </button>
          )}
          {currentStep === 1 && (
            <button
              className={`bg-primary px-5 py-3 text-white rounded-lg ml-auto sm:mx-auto ${
                username === "" || selectedAvatar === "" || !unique
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }

            `}
              onClick={handleNext}
              disabled={username === "" || selectedAvatar === "" || !unique}
            >
              Next
            </button>
          )}
          {currentStep === 2 && (
            <button
              className={`bg-primary px-5 py-3 text-white rounded-lg ${
                username === "" ||
                selectedAvatar === "" ||
                data.length < 3 ||
                !unique
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }

            `}
              onClick={handleNext}
              disabled={
                username === "" ||
                selectedAvatar === "" ||
                !unique ||
                data.length < 3
              }
            >
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button
              className="bg-primary px-5 py-3 text-white rounded-lg"
              onClick={completeprofile}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
