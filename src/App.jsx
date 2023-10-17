import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/logo.png";
import { useLocation,Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";

import Navbar from "./components/Navbar";

import { Fade } from "react-awesome-reveal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Templates from "./pages/Templates";

function App() {
 
  const [load, setload] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setload(true);
    }, 3000);
  });
  // if (!load) {
  //   return (
  //     <div className="h-screen flex justify-center items-center">
  //       <img src={logo} alt="" className="w-96 animate-pulse" />
  //     </div>
  //   );
  // }

  return (
    <div className="h-screen">
      {/* <h1 className="hidden sm:block md:block text-5xl text-center mt-96">
        Currently not supported on mobile and tablet devices
      </h1> */}
      {/* <Templates/> */}
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/templates" element={<Templates />} />
        
          <Route path="/login" element={<Login />} />
        
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
