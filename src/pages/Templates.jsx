import React from 'react'

import Navbar from '../components/Navbar';

import {Link} from "react-router-dom"

import { Fade } from "react-awesome-reveal";

import { cards } from "../services/const"


const Templates = ({auth, setAuth}) => {
  window.scrollTo(0, 0);
  // create an object which have the details of the cards and images and index



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
                        className="w-52 rounded-xl  group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300"
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
