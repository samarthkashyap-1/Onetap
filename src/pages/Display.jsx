import React, { useEffect , useState} from 'react'
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

const Display = ({Profile}) => {
   
console.log(Profile);
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
const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to find the selected card
  const findSelectedCard = () => {
    return cards.find((c) => c.id === Profile.card);
  };

  useEffect(() => {
    // When the Profile changes, find and set the selected card
    if (Profile && Profile.card) {
      const foundCard = findSelectedCard(Profile.card.id);
      setSelectedCard(prev => foundCard);
    }
    console.log(selectedCard)
  }, []);



  return (
    <div>
      {selectedCard && (
        <div>
          {/* Display the selected card */}
          
          <selectedCard.card user={Profile} /> {/* Render the selected card component */}
        </div>
      )}
    </div>
  );
}

export default Display
