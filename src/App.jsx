import { useState, useEffect, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/logo.png";
import { useLocation,Routes,Route, Outlet } from "react-router-dom";
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


function App() {
  // const Profile = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const [load, setLoad] = useState(false);

  // First useEffect to set 'load' to true after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  // Second useEffect to retrieve 'profiles' from localStorage
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {

    // const storedProfiles = JSON.parse(localStorage.getItem("profiles"));
    const storedProfiles = async () => {
      const res = await axios.get("http://localhost:3001/profiles");
      const data = res.data;
      setProfiles(data);
    };
    storedProfiles();
    console.log(profiles);
   
    
  }, [location.pathname]);


  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      setAuth(true);
    }
    console.log(auth);
  }, []);

  if (!load) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img src={logo} alt="" className="w-96 animate-pulse" />
      </div>
    );
  }

  // Rest of your component code that uses 'profiles'

  return (
    <div className="min-h-screen">
      {/* <h1 className="hidden sm:block md:block text-5xl text-center mt-96">
        Currently not supported on mobile and tablet devices
      </h1> */}

      <Routes>
        <Route path="/:username" element={<Display Profiles={profiles} />} />
        <Route
          path="/"
          element={
            <>
              <Landing auth={auth} setAuth={setAuth} />
              <Footer /> {/* Include the footer here for non-template routes */}
            </>
          }
        />
        <Route
          path="/templates"
          element={
            <>
              <Templates auth={auth} setAuth={setAuth} />
              <Footer /> {/* Include the footer here for non-template routes */}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin allprofile={profiles} />} />
        <Route path="/templates/:id" element={<Template />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
