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
import instagram from "../assets/insta.svg";
import behance from "../assets/behance.svg";
import github from "../assets/git.svg";
import linkedin from "../assets/link.svg";
import youtube from "../assets/youtube.svg";
import pinterest from "../assets/pinterest.svg";
import twitch from "../assets/twitch.svg";
import pac from "../assets/pac.jpg";
import portfolio from "../assets/portfolio.png";
import logoblack from "../assets/logoblack.png";
import cardG from "../assets/cardG.png";
import { Link } from "react-router-dom";
import share from "../assets/share.svg";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import avatar1 from "../assets/avatar1.svg";
  import avatar2 from "../assets/avatar2.svg";
  import avatar3 from "../assets/avatar3.svg";
  import avatar4 from "../assets/avatar4.svg";
  import avatar5 from "../assets/avatar5.svg";
  import avatar6 from "../assets/avatar6.svg";

const demo = {
  username: "John",
  email: "johnsmith@abc",
  avatar: avatar,
  links: [
    {
      platform: "instagram",
      link: "samarthkashyap-1",
    },
    {
      platform: "x",
      link: "https://twitter.com",
    },
    {
      platform: "github",
      link: "https://github.com",
    },
    {
      platform: "linkedin",
      link: "https://linkedin.com",
    },
    {
      platform: "behance",
      link: "https://behance.com",
    },
  ],
  card: 1,
};
  const avatars = [
    { id: 1, avatar: avatar1 },
    { id: 2, avatar: avatar2 },
    { id: 3, avatar: avatar3 },
    { id: 4, avatar: avatar4 },
    { id: 5, avatar: avatar5 },
    { id: 6, avatar: avatar6 },
  ];
const notify = () =>
  toast.success("Link Copied!", {
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
  });

// const logos = {
//   x: x,
//   instagram: {instagram:instagram,url:"https://www.instagram.com"},
//   behance: behance,
//   github: github,
//   linkedin: linkedin,
//   youtube: youtube,
//   pinterest: pinterest,
//   portfolio: portfolio,
//   twitch: twitch,
// };

const logos = {
  x: { name: x, url: "https://www.twitter.com/" },
  instagram: { name: instagram, url: "https://www.instagram.com/" },
  behance: { name: behance, url: "https://www.behance.net/" },
  github: { name: github, url: "https://www.github.com/" },
  linkedin: { name: linkedin, url: "https://www.linkedin.com/in/" },
  youtube: { name: youtube, url: "https://www.youtube.com/" },
  pinterest: { name: pinterest, url: "https://www.pinterest.com/" },
  portfolio: { name: portfolio, url: "https://yourportfolio.com/" },
  twitch: { name: twitch, url: "https://www.twitch.tv/" },
};

const CardA = ({ user }) => {
  console.log(user);
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
          className="text-center text-lg w-full capitalize"
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
      <ToastContainer />

      <div className=" md:p-4 rounded-lg min-h-screen  font-Dancing w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div className="flex flex-col relative   gap-8 md:gap-4 w-full my-auto  backdrop-blur-lg bg-transparent rounded-2xl items-center p-5  shadow-2xl">
          <img
            src={share}
            alt=""
            className="invert absolute top-0 right-0 scale-50 ml-auto cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              notify();
            }}
          />
          <img
            src={user ? avatars.find((avatar) =>
                    (avatar.id == user.avatar)
                  ).avatar : demo.avatar}
            alt="avatar"
            className="w-1/3 mt-2 rounded-full  sm:w-1/3 md:w-1/3 border-2 border-white"
          />
          <div className="flex text-white flex-col text-center gap-2">
            <h2 className="text-2xl">
              @{user ? user.username : demo.username}
            </h2>
            <a href="mailto: abc@example.com" className="text-sm">
              {user ? user.email : demo.email}
            </a>
          </div>

          <div className="grid gap-4 w-full">
            {(user ? user.links : demo.links).map((link) => {
              console.log(logos.x.name)
              return (
                <LinkButton
                  label={link.platform}
                  url={logos[link.platform].url+link.link}
                  btnlogo={logos[link.platform].name}
                />
              );
            })}
          </div>
          <div className="mt-auto">
            <Link to="/">
              <img src={logowhite} alt="" className="w-20 mx-auto" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardB = ({ user }) => {
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
          className="text-center w-full capitalize"
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
      <ToastContainer />
      <div className=" md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div
          className="flex flex-col relative  gap-8 md:gap-4 w-full my-auto  backdrop-blur-lg rounded-2xl items-center p-5 shadow-2xl border border-[#7C828A] shadow-[#7C828A]"
          style={{
            backgroundImage: `url(${cardC})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={share}
            alt=""
            className="absolute top-0 right-0 scale-50 ml-auto cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              notify();
            }}
          />
          <img
            src={user ? avatars.find((avatar) =>
                    (avatar.id == user.avatar)
                  ).avatar : demo.avatar}
            alt="avatar"
            className="w-1/3 mt-2 sm:w-1/3 md:w-1/4 rounded-full border-2 border-[#7C828A]"
          />
          <div className="flex  flex-col text-center gap-2 w-full">
            <h2 className="text-xl">@{user ? user.username : demo.username}</h2>
            <a href="mailto: abc@example.com" className="text-sm">
              {user ? user.email : demo.email}
            </a>
          </div>

          <div className="grid gap-4 w-full">
            {(user ? user.links : demo.links).map((link) => {
              return (
                <LinkButton
                  label={link.platform}
                  url={logos[link.platform].url+link.link}
                  btnlogo={logos[link.platform].name}
                />
              );
            })}
          </div>
          <Link to="/">
            <div className="mt-auto">
              <img src={logoblack} alt="" className="w-20 mx-auto " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardC = ({ user }) => {
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
          className="text-center w-full capitalize"
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
      <ToastContainer />
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full ">
        <div
          className="flex flex-col relative gap-8 md:gap-4 w-full my-auto   backdrop-blur-lg rounded-2xl items-center p-5     shadow shadow-white"
          style={{
            backgroundImage: `url(${cardA})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={share}
            alt=""
            className="invert absolute top-0 right-0 scale-50 ml-auto cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              notify();
            }}
          />
          <img
            src={user ? avatars.find((avatar) =>
                    (avatar.id == user.avatar)
                  ).avatar : demo.avatar}
            alt="avatar"
            className="w-1/3 mt-2 sm:w-1/3 md:w-1/4 rounded-full border-2 border-white"
          />
          <div className="flex text-white flex-col text-center gap-2 w-full">
            <h2 className="text-xl">@{user ? user.username : demo.username}</h2>
            <a href="mailto: abc@example.com" className="text-sm">
              {user ? user.email : demo.email}
            </a>
          </div>

          <div className="grid gap-4 w-full">
            {(user ? user.links : demo.links).map((link) => {
              return (
                <LinkButton
                  label={link.platform}
                  url={logos[link.platform].url+link.link}
                  btnlogo={logos[link.platform].name}
                />
              );
            })}
          </div>
          <Link to="/">
            <div className="mt-auto">
              <img src={logowhite} alt="" className="w-20 mx-auto " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardD = ({ user }) => {
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
          className="text-center w-full capitalize"
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
      <ToastContainer />
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full ">
        <div
          className="flex flex-col gap-8 md:gap-4 w-full my-auto rounded-2xl items-center relative p-5 shadow shadow-[#663C92]"
          style={{
            backgroundImage: `url(${cardD})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={share}
            alt=""
            className="invert absolute top-0 right-0 scale-50 ml-auto cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              notify();
            }}
          />
          <img
            src={user ? avatars.find((avatar) =>
                    (avatar.id == user.avatar)
                  ).avatar : demo.avatar}
            alt="avatar"
            className="w-1/3 mt-2 md:w-1/4 sm:w-1/3 rounded-full border-2 border-[#663C92]"
          />
          <div className="flex text-white flex-col text-center gap-2 w-full">
            <h2 className="text-xl">@{user ? user.username : demo.username}</h2>
            <a href="mailto: abc@example.com" className="text-sm">
              {user ? user.email : demo.email}
            </a>
          </div>

          <div className="grid gap-4 w-full">
            {(user ? user.links : demo.links).map((link) => {
              return (
                <LinkButton
                  label={link.platform}
                  url={logos[link.platform].url+link.link}
                  btnlogo={logos[link.platform].name}
                />
              );
            })}
          </div>
          <Link to="/">
            <div className="mt-auto">
              <img src={logowhite} alt="" className="w-20 mx-auto " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardE = ({ user }) => {
  // console.log();
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
          className="text-center w-full capitalize"
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
      <ToastContainer />
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex   sm:w-full  ">
        <div
          className="flex flex-col gap-8 md:gap-4 w-full my-auto rounded-2xl items-center relative p-5 shadow shadow-[#0AFFFF] "
          style={{
            backgroundImage: `url(${pac})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={share}
            alt=""
            className="invert absolute top-0 right-0 scale-50 ml-auto cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              notify();
            }}
          />
          <img
            src={
              user
                ? avatars.find((avatar) => avatar.id == user.avatar).avatar
                : demo.avatar
            }
            alt="avatar"
            className="w-1/3 mt-2  md:w-1/4 sm:w-1/3 rounded-full border-2 border-[#0AFFFF]"
          />
          <div className="flex text-white flex-col text-center gap-2 w-full">
            <h2 className="text-xl">@{user ? user.username : demo.username}</h2>
            <a href="mailto: abc@example.com" className="text-sm">
              {user ? user.email : demo.email}
            </a>
          </div>

          <div className="grid gap-4 w-full">
            {(user ? user.links : demo.links).map((link) => {
              return (
                <LinkButton
                  label={link.platform}
                  url={logos[link.platform].url + link.link}
                  btnlogo={logos[link.platform].name}
                />
              );
            })}
          </div>
          <Link to="/">
            <div className="mt-auto">
              <img src={logowhite} alt="" className="w-20 mx-auto " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CardF = ({ user }) => {
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
          className="text-center w-full capitalize"
        >
          {label}
        </a>
      </div>
    );
  };
  return (
    <div className=" h-full flex w-full flex-col justify-center font-paci bg-[#D7FDD7] items-center ">
      <ToastContainer />
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex  bg-[#D7FDD7]  sm:w-full  ">
        <div className="flex flex-col gap-8 md:gap-4 w-full my-auto rounded-2xl items-center relative p-5 shadow-2xl shadow-[#64a164] ">
          <img
            src={share}
            alt=""
            className=" absolute top-0 right-0 scale-50 ml-auto cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              notify();
            }}
          />
          <img
            src={user ? avatars.find((avatar) =>
                    (avatar.id == user.avatar)
                  ).avatar : demo.avatar}
            alt="avatar"
            className="w-1/3 mt-2 sm:w-1/3 md:w-1/4 rounded-full border-2 border-black shadow-xl"
          />
          <div className="flex  flex-col text-center gap-2 w-full">
            <h2 className="text-xl">@{user ? user.username : demo.username}</h2>
            <a href="mailto: abc@example.com" className="text-sm">
              {user ? user.email : demo.email}
            </a>
          </div>

          <div className="grid gap-4 w-full">
            {(user ? user.links : demo.links).map((link) => {
              return (
                <LinkButton
                  label={link.platform}
                  url={logos[link.platform].url+link.link}
                  btnlogo={logos[link.platform].name}
                />
              );
            })}
          </div>
          <Link to="/">
            <div className="mt-auto">
              <img src={logoblack} alt="" className="w-20 mx-auto " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
const CardG = ({ user }) => {
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
          className="text-center w-full capitalize"
        >
          {label}
        </a>
      </div>
    );
  };
  return (
    <div className=" h-full flex w-full flex-col justify-center font-Merri bg-[#F4AC9A] items-center ">
      <ToastContainer />
      <div className="md:p-4 rounded-lg min-h-screen w-1/4 md:w-1/2 p-5 flex     sm:w-full  ">
        <div className="flex flex-col relative gap-8 md:gap-4 w-full my-auto rounded-2xl bg-[#F2EADE] items-center p-5 shadow-2xl shadow-black border border-black ">
          <img
            src={share}
            alt=""
            className=" absolute top-0 right-0 scale-50  ml-auto cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              notify();
            }}
          />
          <img
            src={user ? avatars.find((avatar) =>
                    (avatar.id == user.avatar)
                  ).avatar : demo.avatar}
            alt="avatar"
            className="w-1/3 mt-2 md:w-1/4 sm:w-1/3 rounded-full border-2 border-[rgba(43,42,37,1)] shadow-xl"
          />
          <div className="flex text-[rgba(43,42,37,1)] flex-col text-center gap-2 w-full">
            <h2 className="text-xl">@{user ? user.username : demo.username}</h2>
            <a href="mailto: abc@example.com" className="text-sm">
              {user ? user.email : demo.email}
            </a>
          </div>

          <div className="grid gap-4 w-full bg-white p-2 border border-black shadow-[6px_6px_0px_0px_rgba(43,42,37,1)]">
            {(user ? user.links : demo.links).map((link) => {
              return (
                <LinkButton
                  label={link.platform}
                  url={logos[link.platform].url+link.link}
                  btnlogo={logos[link.platform].name}
                />
              );
            })}
            <Link to="/">
              <div className="mt-auto">
                <img src={logoblack} alt="" className="w-20 mx-auto " />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardA, CardB, CardC, CardD, CardE, CardF, CardG };
