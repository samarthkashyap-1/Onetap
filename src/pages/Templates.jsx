import React from 'react'
import {CardA, CardB , CardC , CardD, CardE, CardF} from '../components/Cards'
import Navbar from '../components/Navbar';
import back from "../assets/back.png";
import {Link} from "react-router-dom"
import Footer from '../components/Footer';

const Templates = () => {
  const cards = [CardA, CardB, CardC, CardD, CardE, CardF];
  return (
    <>
      <Link to="/">
        <div className="absolute flex justify-center top-5 z-10 cursor-pointer">
          <img src={back} alt="" className="w-8" />
          <p className="my-auto">Back</p>
        </div>
      </Link>
      <div className="font-Tilt flex flex-col py-20 px-8 gap-10 ">
        {cards.map((Card) => {
          return <Card />;
        })}
      </div>
      
    </>
  );
}

export default Templates
