import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

import Toast from "./Toast";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Resetlinkvalidate, Resetpassword } from "../services/api";


const Resetpass = () => {
     localStorage.clear();
    const navigate = useNavigate()
     const location = useLocation();
     const { pathname } = location;
    const [passchanged, setpasschanged] = useState(false)
    const [exptoken, setexptoken] = useState(false)
  const [pass, setpass] = useState();
  const [cpass, setcpass] = useState();
  const {id,token} = useParams()


    const validator = async () => {
     try {
         const result = await Resetlinkvalidate(id,token)
         console.log(result.data);
        if(result.status === 200){
            return
        }
     } catch (error) {
        if(error.response.status ===400){
            setexptoken(true)
            return
        }
        console.log(error)
     }
    };

    useEffect(() => {
      validator();
    }, []);

  const resetPass = async (e) => {
    try {
        e.preventDefault();
        if(cpass != pass) return toast.error("password does not match")

      const data = {
        password: cpass,
      };
      console.log(data)
      const result = await Resetpassword(id,token,data)
      
      console.log(result.data)
      if (result.data) {
        setpasschanged(true)
        setTimeout(() => {
            navigate("/login")
        }, 2000);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
    
    console.log(error)
    }
  };




  return (
    <div>
      <Toast />
      {exptoken ? (
        <h1>Link Expired</h1>
      ) : (
        <>
          {passchanged ? (
            <>
              <h1>Your Password is updated</h1>
              <p>Redirecting...</p>
            </>
          ) : (
            <Fade triggerOnce>
              <div className="bg-primary w-1/4 mx-auto rounded-xl py-5 mt-5 sm:w-full md:w-1/2">
                <img src={logo} alt="" className="h-20 sm:h-16 mx-auto" />
              </div>

              <form
                onSubmit={resetPass}
                className="flex flex-col w-1/4 mx-auto px-10 gap-6 mt-10 sm:w-full md:w-1/2 "
              >
                <div>
                  <h1 className="text-2xl">Reset Password</h1>
                </div>
                <input
                  type="text"
                  className=" h-14 rounded-lg bg-white px-4 border-2 border-primary"
                  placeholder="Enter new password"
                  value={pass}
                  minLength={4}
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className=" h-14 rounded-lg bg-white px-4 border-2 border-primary"
                  placeholder="Enter confirm password"
                  value={cpass}
                  minLength={4}
                  onChange={(e) => {
                    setcpass(e.target.value);
                  }}
                />
                <button
                  className={`w-full h-14 rounded-xl bg-sec text-white ${
                    cpass ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  disabled={cpass ? false : true}
                >
                  Reset Password
                </button>
              </form>
            </Fade>
          )}
        </>
      )}
    </div>
  );
};

export default Resetpass;
