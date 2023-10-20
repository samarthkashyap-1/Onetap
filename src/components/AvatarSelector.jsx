import React, { useState } from "react";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import avatar3 from "../assets/avatar3.svg";
import avatar4 from "../assets/avatar4.svg";
import avatar5 from "../assets/avatar5.svg";
import avatar6 from "../assets/avatar6.svg";




const AvatarSelector = ({ onAvatarSelect }) => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
  ];

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    onAvatarSelect(avatar); // Callback to notify the parent component
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Select Your Avatar</h2>
      <div className="flex flex-wrap justify-center -m-2">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`m-2 cursor-pointer  rounded-full p-1 transition-all duration-200 ${
              selectedAvatar === avatar ? "border border-sec scale-110" : ""
            }`}
            onClick={() => handleAvatarClick(avatar)}
          >
            <img
              src={avatar}
              alt={`Avatar ${index}`}
              className="w-20 h-20 sm:w-16 sm:h-16 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
