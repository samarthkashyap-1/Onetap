import React from 'react'
import {CardA, CardB , CardC , CardD, CardE, CardF, CardG} from '../components/Cards'
import Navbar from '../components/Navbar';

import {Link} from "react-router-dom"

import { Fade } from "react-awesome-reveal";
import cardatemp from "../assets/cardatemp.png";
import cardbtemp from "../assets/cardbtemp.png";
import cardctemp from "../assets/cardctemp.png";
import carddtemp from "../assets/carddtemp.png";
import cardetemp from "../assets/cardetemp.png";
import cardftemp from "../assets/cardftemp.png";
import cardgtemp from "../assets/cardgtemp.png";


const Templates = ({auth, setAuth}) => {
  window.scrollTo(0, 0);
  // create an object which have the details of the cards and images and index

  const cards = [
    {
      id: 1,
      image: cardatemp,
      card: CardA,
      name: "Breeze",
    },
    {
      id: 5,
      image: cardetemp,
      card: CardE,
      name: "Pixel",
    },
    {
      id: 2,
      image: cardbtemp,
      card: CardB,
      name: "Hex",
    },
    {
      id: 7,
      image: cardgtemp,
      card: CardG,
      name: "Peachy",
    },
    {
      id: 6,
      image: cardftemp,
      card: CardF,
      name: "Eco Boy",
    },
    {
      id: 3,
      image: cardctemp,
      card: CardC,
      name: "Dear Diary",
    },
    {
      id: 4,
      image: carddtemp,
      card: CardD,
      name: "Bloom",
    },
  ];

  return (
    <div className="min-h-screen px-20 p-10 sm:px-10 -z-10 ">
      <Fade triggerOnce>
        <div>
          <Navbar auth={auth} setAuth={setAuth}/>
          <div>
            <h1 className="text-5xl text-primary sm:text-3xl mt-28 ">
              Templates :-
            </h1>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
            {cards.map((card) => {
              return (
                <Fade triggerOnce>
                    <Link to={`/templates/${card.id}`}>
                  <div className="flex flex-col justify-center group  items-center border p-2 rounded-lg ">
                      <img
                        src={card.image}
                        alt=""
                        className="w-52 rounded-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300"
                      />
                    <h1 className="text-2xl mt-4">{card.name}</h1>
                  </div>
                    </Link>
                </Fade>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Templates
