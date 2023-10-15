import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/logo.png";
import Landing from "./pages/Landing";

import Navbar from "./components/Navbar";

import { Fade } from "react-awesome-reveal";

function App() {
  const [count, setCount] = useState(0);
  const [load, setload] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setload(true);
    }, 3000);
  });
  if (!load) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img src={logo} alt="" className="w-96 animate-pulse" />
      </div>
    );
  }

  return (
    <>
      {/* <h1 className="hidden sm:block md:block text-5xl text-center mt-96">
        Currently not supported on mobile and tablet devices
      </h1> */}
      <Navbar />
    

      <Landing />

      
    </>
  );
}

export default App;
