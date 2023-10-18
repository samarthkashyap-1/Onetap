import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/logo.png";
import { useLocation,Routes,Route, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";
import {
  CardA,
  CardB,
  CardC,
  CardD,
  CardE,
  CardF,
  CardG,
} from "./components/Cards";

import Navbar from "./components/Navbar";

import { Fade } from "react-awesome-reveal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Templates from "./pages/Templates";
import Footer from "./components/Footer";
import Template from "./pages/Template";

function App() {
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
    <div className="min-h-screen">
      {/* <h1 className="hidden sm:block md:block text-5xl text-center mt-96">
        Currently not supported on mobile and tablet devices
      </h1> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              
              <Footer /> {/* Include the footer here for non-template routes */}
            </>
          }
        />
        <Route
          path="/templates"
          element={
            <>
              <Templates />
              
              <Footer /> {/* Include the footer here for non-template routes */}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {cards.map((card) => (
          <Route
            key={card.id}
            path={`templates/${card.id}`}
            element={<Template Card={card.card} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
