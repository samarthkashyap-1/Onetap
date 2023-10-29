import React from 'react'
import {Link} from "react-router-dom"
import back from "../assets/backwhite.png"
import { Fade } from "react-awesome-reveal";

import { useParams } from 'react-router-dom';

import {cards} from "../services/const.js"


const Template = () => {
  const {id} = useParams();
  const card = cards.find((card) => card.id === parseInt(id));
  const Card = card.card;
  return (
    <div className="">
      <Link to="/templates">
        <div className="absolute flex justify-center top-8 left-4 z-10 cursor-pointer">
          <img src={back} alt="" className="w-5" />
          <p className="my-auto text-sm text-white">Back</p>
        </div>
      </Link>
        <Fade triggerOnce>

    <div className=''>
    
      <Card/>
    </div>
    </Fade>
    </div>
  );
}

export default Template
