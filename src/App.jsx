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
import Admin from "./pages/Admin";
import Display from "./pages/Display";
import Error from "./pages/Error";

function App() {
const [Profiles, setProfiles] = useState([]);
// const Profile = JSON.parse(localStorage.getItem("profile"));


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

  useEffect(() => {
    
    setProfiles(prev=>JSON.parse(localStorage.getItem("profiles")));
    console.log(Profiles);
  }
  , [localStorage])

  return (
    <div className="min-h-screen">
      {/* <h1 className="hidden sm:block md:block text-5xl text-center mt-96">
        Currently not supported on mobile and tablet devices
      </h1> */}

      <Routes>
        {Profiles.map((profile) => (
          <Route
            key={profile.index}
            path={`${profile.username}`}
            element={<Display Profile={profile} />}
          />
        ))}
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
        <Route path="/admin" element={<Admin />} />
        {cards.map((card) => (
          <Route
            key={card.id}
            path={`templates/${card.id}`}
            element={<Template Card={card.card} />}
          />
        ))}

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
