import React, { useEffect, useState } from "react";
import { avatars } from "../services/const.js";




const AvatarSelector = ({ onAvatarSelect}) => {
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const handleAvatarClick = (avatar) => {
    

    setSelectedAvatar(avatar);
    onAvatarSelect(avatar); // Callback to notify the parent component
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Select Your Avatar
      </h2>
      <div className="flex flex-wrap justify-center -m-2">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`m-2 cursor-pointer  rounded-full p-1  ${
              selectedAvatar === avatar ? "outline outline-sec" : ""
            }`}
            onClick={() => handleAvatarClick(avatar.id)}
          >
            <img
              src={avatar.avatar}
              alt={`Avatar ${avatar.id}`}
              className="w-20 h-20 sm:w-16 sm:h-16 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
