import React from "react";
import avatar from "../assets/avatar.png";
import cardA from "../assets/cardA.jpg";
import cardB from "../assets/cardB.jpg";
import cardC from "../assets/CardC.jpg";
import cardD from "../assets/CardD.jpg";
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
import portfolio from "../assets/portfolio.png"
import logoblack from "../assets/logoblack.png"
import cardG from "../assets/cardG.png"

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
          className="text-center text-lg w-full"
        >
          {label}
        </a>
      </div>
    );
  };
  return (
    <div
      className="bg-gray-200 h-full flex w-full flex-col  justify-center items-center "
      style={{
        backgroundImage: `url(${cardB})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" md:p-4 rounded-lg min-h-screen  font-Dancing w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div className="flex flex-col  gap-8 md:gap-4 w-full my-auto  backdrop-blur-lg bg-transparent rounded-2xl items-center p-5  shadow-2xl">
          <img
            src={avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full border-2 border-white"
          />
          <div className="flex text-white flex-col text-center gap-2">
            <h2 className="text-2xl font-semibold ">John Smith</h2>
            <a href = "mailto: abc@example.com" className="text-lg">johnsmith@me.com</a>
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
      <div className="w-full justify-center group flex px-4 relative py-2 bg-white  text-primary hover:-translate-y-1   rounded-md text-center font-semibold hover:bg-[#7C828A] cursor-pointer hover:text-white transition duration-300">
        <img
          src={btnlogo}
          alt=""
          className="w-8 absolute group-hover:invert  mr-auto top-1 left-2"
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
      className="h-full flex w-full flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${cardC})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div
          className="flex flex-col  gap-8 md:gap-4 w-full my-auto  backdrop-blur-lg rounded-2xl items-center p-5 shadow-2xl border border-[#7C828A] shadow-[#7C828A]"
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
            <h2 className="text-xl font-semibold ">John Smith</h2>
            <a href = "mailto: abc@example.com" className="text-lg">johnsmith@me.com</a>
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
            <img src={logoblack} alt="" className="w-20 mx-auto " />
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
      className=" h-full flex w-full flex-col justify-center font-Merri items-center "
      style={{
        backgroundImage: `url(${cardA})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full ">
        <div
          className="flex flex-col  gap-8 md:gap-4 w-full my-auto   backdrop-blur-lg rounded-2xl items-center p-5     shadow shadow-white"
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
            <h2 className="text-xl font-semibold ">John Smith</h2>
            <a href = "mailto: abc@example.com" className="text-lg">johnsmith@me.com</a>
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
      <div className="w-full justify-center group flex px-4 relative py-2 bg-white hover:-translate-y-1  text-primary   rounded-md text-center font-semibold hover:bg-[#663C92] cursor-pointer hover:text-white transition duration-300">
        <img
          src={btnlogo}
          alt=""
          className="w-8 absolute group-hover:invert  mr-auto top-1 left-2"
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
      className=" h-full flex w-full flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${cardD})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full ">
        <div
          className="flex flex-col  gap-8 md:gap-4 w-full my-auto rounded-2xl items-center p-5 shadow shadow-[#663C92]"
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
            className="w-1/3 mt-2 rounded-full border-2 border-[#663C92]"
          />
          <div className="flex text-white flex-col text-center gap-2 w-full">
            <h2 className="text-xl font-semibold ">John Smith</h2>
            <a href = "mailto: abc@example.com" className="text-lg">johnsmith@me.com</a>
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
      className="font-pixel h-full flex w-full flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${pac})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div
          className="flex flex-col gap-8 md:gap-4 w-full my-auto rounded-2xl items-center p-5 shadow shadow-[#0AFFFF] "
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
            className="w-1/3 mt-2 rounded-full border-2 border-[#0AFFFF]"
          />
          <div className="flex text-white flex-col text-center gap-2 w-full">
            <h2 className="text-xl font-semibold ">John Smith</h2>
            <a href = "mailto: abc@example.com" className="text-lg">johnsmith@me.com</a>
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

const CardF = () => {
  const LinkButton = ({ label, url, btnlogo }) => {
    return (
      <div className="w-full justify-center flex px-4 relative py-2 bg-[#BBFFE4] rounded-2xl text-primary    text-center font-semibold  cursor-pointer transition duration-300 hover:-translate-y-1 my-auto border border-black shadow-[5px_5px_0px_0px_rgba(33,37,41,1)] ">
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
    <div className=" h-full flex w-full flex-col justify-center font-paci bg-[#D7FDD7] items-center ">
      <div
        className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex  bg-[#D7FDD7]  sm:w-full  "
        
      >
        <div className="flex flex-col gap-8 md:gap-4 w-full my-auto rounded-2xl items-center p-5 shadow-2xl shadow-[#64a164] ">
          <img
            src={avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full border-2 border-black shadow-xl"
          />
          <div className="flex  flex-col text-center gap-2 w-full">
            <h2 className="text-xl font-semibold ">John Smith</h2>
            <a href = "mailto: abc@example.com" className="text-lg">johnsmith@me.com</a>
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
            <img src={logoblack} alt="" className="w-20 mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};
const CardG = () => {
  const LinkButton = ({ label, url, btnlogo }) => {
    return (
      <div className="w-full justify-center flex px-4 relative py-2 bg-white text-primary  text-center font-semibold  cursor-pointer transition duration-300 hover:-translate-y-1 my-auto border border-black shadow-[6px_6px_0px_0px_rgba(43,42,37,1)] ">
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
    <div className=" h-full flex w-full flex-col justify-center font-Merri bg-[#F4AC9A] items-center ">
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex     sm:w-full  ">
        <div className="flex flex-col gap-8 md:gap-4 w-full my-auto rounded-2xl bg-[#F2EADE] items-center p-5 shadow-2xl shadow-black border border-black ">
          <img
            src={avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full border-2 border-[rgba(43,42,37,1)] shadow-xl"
          />
          <div className="flex text-[rgba(43,42,37,1)] flex-col text-center gap-2 w-full">
            <h2 className="text-xl font-semibold ">John Smith</h2>
            <a href = "mailto: abc@example.com" className="text-lg">johnsmith@me.com</a>
          </div>

          <div className="grid gap-4 w-full bg-white p-2 border border-black shadow-[6px_6px_0px_0px_rgba(43,42,37,1)]">
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
            <div className="mt-auto">
              <img src={logoblack} alt="" className="w-20 mx-auto " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export { CardA, CardB, CardC, CardD, CardE, CardF, CardG};
