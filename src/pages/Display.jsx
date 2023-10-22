import React, { useEffect, useState } from "react";
import {
  CardA,
  CardB,
  CardC,
  CardD,
  CardE,
  CardF,
  CardG,
} from "../components/Cards";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";
import avatar5 from "../assets/avatar5.svg";
import avatar6 from "../assets/avatar6.svg";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import loader from "../assets/loader.json";

import logo from "../assets/logo.png";
import axios from "axios";
import Lottie from "lottie-react";
import { set } from "react-hook-form";

const Display = ({ Profiles }) => {
  const [loading, setLoading] = useState(false);
  const [nouser, setNouser] = useState(false);
  const location = useLocation();
  const { username } = useParams();
  const cards = [
    {
      id: 1,
      card: CardA,
      name: "Breeze",
    },
    {
      id: 2,
      card: CardB,
      name: "Hex",
    },
    {
      id: 3,
      card: CardC,
      name: "Dear Diary",
    },
    {
      id: 4,
      card: CardD,
      name: "Bloom",
    },
    {
      id: 5,
      card: CardE,
      name: "Pixel",
    },
    {
      id: 6,
      card: CardF,
      name: "Eco Boy",
    },
    {
      id: 7,
      card: CardG,
      name: "Peachy",
    },
  ];



 
  const [Profile , setProfile] = useState()

  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to find the selected card
  const findSelectedCard = (Profile) => {
    return cards.find((c) => c.id === Profile.card);
  };

  const gettingprofile = async () => {
    try {
      setLoading(true);
      const a = await axios.get(
        `${import.meta.env.VITE_REACT_APP_URL}/${username}`
      );
      const data = a.data;
      setProfile(data);
      if (a !== undefined) {
        const foundCard = findSelectedCard(data);
        setSelectedCard(foundCard);
      }
      setLoading(false);
      console.log(data);
    } catch (error) {
      if(error.response.status === 404){
        setLoading(false);
        setNouser(true)
        
      }
    }
  }

  useEffect(() => {
    // When the Profile changes, find and set the selected card
   gettingprofile()
  }, []);

  return (
    <div>
      <div
        className={`h-screen bg-black bg-opacity-50 z-50 absolute left-0 right-0 top-0 flex flex-col justify-center items-center
         ${loading ? "" : "hidden"}`}
      >
        <Lottie animationData={loader} className="w-28 sm:w-16" />
        <p className="text-white text-sm animate-bounce">
          Getting links ready...
        </p>
      </div>
      {nouser && (
        <div className="h-screen flex flex-col justify-center items-center ">
          <h1 className="text-center sm:text-xl text-3xl">User Not Found</h1>
          <img
            src={logo}
            alt=""
            className="sm:w-52 m-auto animate-pulse "
            onClick={() => (window.location.href = "/")}
          />
        </div>
      )}
      {selectedCard && (
        <div>
          <selectedCard.card user={Profile} />{" "}
        </div>
      )}
    </div>
  );
};

export default Display;
