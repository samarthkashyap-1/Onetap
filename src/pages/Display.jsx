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

import logo from "../assets/logo.png";

const Display = ({ Profiles }) => {
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

  useEffect(() => {
    // When the Profile changes, find and set the selected card
    const a = Profiles.find((profile) => profile.username === username);
    setProfile(a);
    if (a !== undefined) {
      const foundCard = findSelectedCard(a);
      setSelectedCard(foundCard);
    }
   
  }, [Profiles,location.pathname]);

  return (
    <div>
      {selectedCard && (
        <div>
    
          <selectedCard.card user={Profile} />{" "}
        
        </div>
      )}
    </div>
  );
};

export default Display;
