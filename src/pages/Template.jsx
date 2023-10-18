import React from 'react'
import {Link} from "react-router-dom"
import back from "../assets/back.png"
import { Fade } from "react-awesome-reveal";

const Template = ({Card}) => {
  return (
    <div className="">
        <Fade triggerOnce>
      <Link to="/templates">
        <div className="absolute flex justify-center top-8 left-4 z-10 cursor-pointer">
          <img src={back} alt="" className="w-5" />
          <p className="my-auto text-sm">Back</p>
        </div>
      </Link>

    <div className=''>

      <Card/>
    </div>
    </Fade>
    </div>
  );
}

export default Template
