import React from "react";
import avatar from "../assets/avatar.png";
import cardA from "../assets/cardA.jpg";
import cardB from "../assets/cardB.jpg";
import cardC from "../assets/cardC.jpg";
import cardD from "../assets/cardD.jpg";
import pacman from "../assets/pacman.jpg";
import logo from "../assets/logo.png";
import logowhite from "../assets/logo white.png";
import x from "../assets/x.png";
import insta from "../assets/insta.svg";
import behance from "../assets/behance.svg";
import github from "../assets/git.svg";
import linkedin from "../assets/link.svg";
import youtube from "../assets/youtube.svg";
import pinterest from "../assets/pinterest.svg";
import twitch from "../assets/twitch.svg";
import pac from "../assets/pac.jpg";

const CardA = () => {
  const LinkButton = ({ label, url, btnlogo }) => {
    return (
      <div className="w-full justify-center flex px-4 relative py-2 bg-white  text-primary   rounded-md text-center font-semibold hover:bg-[#637A88] cursor-pointer hover:text-white transition duration-300">
        <img
          src={btnlogo}
          alt=""
          className="w-8 absolute  mr-auto top-1 left-2"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center w-full"
        >
          {label}
        </a>
      </div>
    );
  };
  return (
    <div
      className="bg-gray-200 h-full flex w-full flex-col justify-center items-center rounded-xl"
      style={{
        backgroundImage: `url(${cardB})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div className="flex flex-col  gap-8 md:gap-4 w-full   backdrop-blur-lg bg-transparent rounded-2xl items-center p-5  shadow-2xl">
          <img
            src={avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full border-2 border-white"
          />
          <div className="flex text-white flex-col text-center gap-2">
            <h2 className="text-xl font-semibold ">Your Name</h2>
            <p className="text-lg">Email</p>
          </div>

          <div className="grid gap-4 w-full">
            <LinkButton
              label="Instagram"
              url="https://www.instagram.com/yourusername/"
              btnlogo={insta}
            />
            <LinkButton
              label="Twitter"
              url="https://twitter.com/yourusername/"
              btnlogo={x}
            />
            <LinkButton
              label="Github"
              url="https://twitter.com/yourusername/"
              btnlogo={github}
            />
            <LinkButton
              label="Linkedin"
              url="https://twitter.com/yourusername/"
              btnlogo={linkedin}
            />
            <LinkButton
              label="Behance"
              url="https://twitter.com/yourusername/"
              btnlogo={behance}
            />
          </div>
          <div className="mt-auto">
            <img src={logowhite} alt="" className="w-20 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardB = () => {
  const LinkButton = ({ label, url, btnlogo }) => {
    return (
      <div className="w-full justify-center flex px-4 relative py-2 bg-white  text-primary   rounded-md text-center font-semibold hover:bg-[#7C828A] cursor-pointer hover:text-white transition duration-300">
        <img
          src={btnlogo}
          alt=""
          className="w-8 absolute  mr-auto top-1 left-2"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center w-full"
        >
          {label}
        </a>
      </div>
    );
  };
  return (
    <div
      className="h-full flex w-full flex-col justify-center items-center rounded-xl"
      style={{
        backgroundImage: `url(${cardC})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div
          className="flex flex-col  gap-8 md:gap-4 w-full  backdrop-blur-lg rounded-2xl items-center p-5 shadow-2xl border border-[#7C828A] shadow-[#7C828A]"
          style={{
            backgroundImage: `url(${cardC})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full border-2 border-[#7C828A]"
          />
          <div className="flex  flex-col text-center gap-2 w-full">
            <h2 className="text-xl font-semibold ">Your Name</h2>
            <p className="text-lg">Email</p>
          </div>

          <div className="grid gap-4 w-full">
            <LinkButton
              label="Instagram"
              url="https://www.instagram.com/yourusername/"
              btnlogo={insta}
            />
            <LinkButton
              label="Twitter"
              url="https://twitter.com/yourusername/"
              btnlogo={x}
            />
            <LinkButton
              label="Github"
              url="https://twitter.com/yourusername/"
              btnlogo={github}
            />
            <LinkButton
              label="Linkedin"
              url="https://twitter.com/yourusername/"
              btnlogo={linkedin}
            />
            <LinkButton
              label="Behance"
              url="https://twitter.com/yourusername/"
              btnlogo={behance}
            />
          </div>
          <div className="mt-auto">
            <img src={logowhite} alt="" className="w-20 mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardC = () => {
  const LinkButton = ({ label, url, btnlogo }) => {
    return (
      <div className="w-full justify-center flex px-4 relative py-2 bg-white  text-primary   rounded-md text-center font-semibold hover:bg-[#C1C1C1] cursor-pointer hover:text-white transition duration-300">
        <img
          src={btnlogo}
          alt=""
          className="w-8 absolute  mr-auto top-1 left-2"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center w-full"
        >
          {label}
        </a>
      </div>
    );
  };
  return (
    <div
      className=" h-full flex w-full flex-col justify-center items-center rounded-xl"
      style={{
        backgroundImage: `url(${cardA})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full ">
        <div
          className="flex flex-col  gap-8 md:gap-4 w-full   backdrop-blur-lg rounded-2xl items-center p-5     shadow shadow-white"
          style={{
            backgroundImage: `url(${cardA})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full border-2 border-white"
          />
          <div className="flex text-white flex-col text-center gap-2 w-full">
            <h2 className="text-xl font-semibold ">Your Name</h2>
            <p className="text-lg">Email</p>
          </div>

          <div className="grid gap-4 w-full">
            <LinkButton
              label="Instagram"
              url="https://www.instagram.com/yourusername/"
              btnlogo={insta}
            />
            <LinkButton
              label="Twitter"
              url="https://twitter.com/yourusername/"
              btnlogo={x}
            />
            <LinkButton
              label="Github"
              url="https://twitter.com/yourusername/"
              btnlogo={github}
            />
            <LinkButton
              label="Linkedin"
              url="https://twitter.com/yourusername/"
              btnlogo={linkedin}
            />
            <LinkButton
              label="Behance"
              url="https://twitter.com/yourusername/"
              btnlogo={behance}
            />
          </div>
          <div className="mt-auto">
            <img src={logowhite} alt="" className="w-20 mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardD = () => {
  const LinkButton = ({ label, url, btnlogo }) => {
    return (
      <div className="w-full justify-center flex px-4 relative py-2 bg-white  text-primary   rounded-md text-center font-semibold hover:bg-[#663C92] cursor-pointer hover:text-white transition duration-300">
        <img
          src={btnlogo}
          alt=""
          className="w-8 absolute  mr-auto top-1 left-2"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center w-full"
        >
          {label}
        </a>
      </div>
    );
  };
  return (
    <div
      className=" h-full flex w-full flex-col justify-center items-center rounded-xl"
      style={{
        backgroundImage: `url(${cardD})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full ">
        <div
          className="flex flex-col  gap-8 md:gap-4 w-full rounded-2xl items-center p-5 shadow shadow-[#663C92]"
          style={{
            backgroundImage: `url(${cardD})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full border-2 border-white"
          />
          <div className="flex text-white flex-col text-center gap-2 w-full">
            <h2 className="text-xl font-semibold ">Your Name</h2>
            <p className="text-lg">Email</p>
          </div>

          <div className="grid gap-4 w-full">
            <LinkButton
              label="Instagram"
              url="https://www.instagram.com/yourusername/"
              btnlogo={insta}
            />
            <LinkButton
              label="Twitter"
              url="https://twitter.com/yourusername/"
              btnlogo={x}
            />
            <LinkButton
              label="Github"
              url="https://twitter.com/yourusername/"
              btnlogo={github}
            />
            <LinkButton
              label="Linkedin"
              url="https://twitter.com/yourusername/"
              btnlogo={linkedin}
            />
            <LinkButton
              label="Behance"
              url="https://twitter.com/yourusername/"
              btnlogo={behance}
            />
          </div>
          <div className="mt-auto">
            <img src={logowhite} alt="" className="w-20 mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardE = () => {
  const LinkButton = ({ label, url, btnlogo }) => {
    return (
      <div className="w-full justify-center flex px-4 relative py-2 bg-white  text-primary   rounded-md text-center font-semibold hover:bg-[#0AFFFF] cursor-pointer transition duration-300 hover:motion-safe:animate-bounce ">
        <img
          src={btnlogo}
          alt=""
          className="w-8 absolute  mr-auto top-1 left-2"
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center w-full"
        >
          {label}
        </a>
      </div>
    );
  };
  return (
    <div
      className="font-pixel h-full flex w-full flex-col justify-center items-center rounded-xl"
      style={{
        backgroundImage: `url(${pac})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div
          className="flex flex-col gap-8 md:gap-4 w-full  rounded-2xl items-center p-5 shadow shadow-[#0AFFFF]"
          style={{
            backgroundImage: `url(${pac})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full border-2 border-white"
          />
          <div className="flex text-white flex-col text-center gap-2 w-full">
            <h2 className="text-xl font-semibold ">Your Name</h2>
            <p className="text-lg">Email</p>
          </div>

          <div className="grid gap-4 w-full">
            <LinkButton
              label="Instagram"
              url="https://www.instagram.com/yourusername/"
              btnlogo={insta}
            />
            <LinkButton
              label="Twitter"
              url="https://twitter.com/yourusername/"
              btnlogo={x}
            />
            <LinkButton
              label="Github"
              url="https://twitter.com/yourusername/"
              btnlogo={github}
            />
            <LinkButton
              label="Linkedin"
              url="https://twitter.com/yourusername/"
              btnlogo={linkedin}
            />
            <LinkButton
              label="Behance"
              url="https://twitter.com/yourusername/"
              btnlogo={behance}
            />
          </div>
          <div className="mt-auto">
            <img src={logowhite} alt="" className="w-20 mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardA, CardB, CardC, CardD, CardE };
