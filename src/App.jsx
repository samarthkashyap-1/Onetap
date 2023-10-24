import { useState, useEffect} from "react";

import logo from "./assets/logo.png";
import { useLocation, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

import axios from "axios";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Templates from "./pages/Templates";
import Footer from "./components/Footer";
import Template from "./pages/Template";
import Admin from "./pages/Admin";
import Display from "./pages/Display";
import Error from "./pages/Error";

import { Context} from "./pages/Context";

import Forgotpassword from "./pages/Forgotpassword";
import Resetpass from "./pages/Resetpass";
import { getprofile } from "./services/api";
import Home from "./pages/Home";
import Discover from "./pages/Discover";


function App() {
  

  const [auth, setAuth] = useState(false);
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [loginUser , setloginUser] = useState();


  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const storedProfiles = async () => {
     try {
       const res = await getprofile()
      const data = res.data;
      setProfiles(data);
    }
     catch (error) {
      console.log(error);
      
     }}
    // console.log(profiles);
    storedProfiles();
  }, [location.pathname]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setloginUser(JSON.parse(localStorage.getItem("token")).email);
      // setexistuser();
      return;
    }
    // navigate("/login");
  }, [location.pathname]);

  if (!load) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img src={logo} alt="" className="w-96 sm:w-52 animate-pulse" />
      </div>
    );
  }

  // console.log(loginUser)


  return (
    <Context.Provider value={{ loginUser, setloginUser }}>
      <div className="min-h-screen">
        <Routes>
          {/* <Route
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
          /> */}

          <Route path="/" element={<Home/>}>
            <Route index element={<Landing/>}/>
            <Route path="/templates" element={<Templates/>}/>
            <Route path="/discover" element={<Discover/>}/>



          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/" element={<Admin allprofile={profiles} />} />

          <Route path="/templates/:id" element={<Template />} />
          <Route path="/login/forgotpassword" element={<Forgotpassword />} />
          <Route
            path="/resetpassword/:id/:token"
            element={<Resetpass />}
          />
          <Route path="/:username" element={<Display Profiles={profiles} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
