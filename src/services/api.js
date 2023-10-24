import axios from "axios";

const BASEURL = import.meta.env.VITE_REACT_APP_URL;



export const updateprofile = async (id, data,config) => {
  const res = await axios.put(`${BASEURL}/profiles/${id}`, data, config);
  return res;
};
export const Createprofile = async (data, config) => {
  const res = await axios.post(`${BASEURL}/profiles`, data, config);
  return res;
};

export const Forgotpasswordapi = async (data) => {
  const res = await axios.post(`${BASEURL}/login/forgotpassword`, data);
  return res;
};

export const Contactapi = async(data)=>{
    const res = await axios.post(`${BASEURL}/contactus`, data);
    return res;
}

export const Resetlinkvalidate = async(id,token)=>{
   const res = await axios.get(
      `${BASEURL}/resetpassword/${id}/${token}`
    );
    return res
}

export const Resetpassword = async(id,token,data)=>{
    const res = axios.put(
      `${import.meta.env.VITE_REACT_APP_URL}/resetpassword/${id}/${token}`,
      data
    );
    return res
}

export const Createuser = async(data)=>{
    const res = await axios.post(
      `${BASEURL}/user`,
      data
    );
    return res
}

export const getuser = async(username)=>{
    const res =await axios.get(`${BASEURL}/${username}`);
    return res
}

export const getprofile = async()=>{
  const res = await axios.get(`${BASEURL}/profiles`)
  return res;
}