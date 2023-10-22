import { useState, useEffect, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/logo.png";
import { useLocation, Routes, Route, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";

import axios from "axios";

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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "./pages/Context";



function App() {
 
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [loginuser , setLoginuser] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const storedProfiles = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_REACT_APP_URL}/profiles`
      );
      const data = res.data;
      setProfiles(data);
    };
    storedProfiles();
    console.log(profiles);
  }, [location.pathname]);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      console.log(profiles)
      setAuth(true);

    }
    console.log(auth);
  }, []);

  if (!load) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img src={logo} alt="" className="w-96 sm:w-52 animate-pulse" />
      </div>
    );
  }



  return (
    <div className="min-h-screen">
    

      <Routes>
        <Route path="/:username" element={<Display Profiles={profiles} />} />
        <Route
          path="/"
          element={
            <>
              <Landing auth={auth} setAuth={setAuth} />
              <Footer /> 
            </>
          }
        />
        <Route
          path="/templates"
          element={
            <>
              <Templates auth={auth} setAuth={setAuth} />
              <Footer /> 
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/" element={<Admin allprofile={profiles} />} />
       
        <Route path="/templates/:id" element={<Template />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
