//avatars

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";
import avatar9 from "../assets/avatar9.png";
import avatar10 from "../assets/avatar10.png";



// logos
import x from "../assets/x.png";
import instagram from "../assets/insta.svg";
import behance from "../assets/behance.svg";
import github from "../assets/git.svg";
import linkedin from "../assets/link.svg";
import youtube from "../assets/youtube.svg";
import pinterest from "../assets/pinterest.svg";
import twitch from "../assets/twitch.svg";
import portfolio from "../assets/portfolio.png";


//Cards
import {
  CardA,
  CardB,
  CardC,
  CardD,
  CardE,
  CardF,
  CardG,
} from "../components/Cards";
import cardatemp from "../assets/cardatemp.png";
import cardbtemp from "../assets/cardbtemp.png";
import cardctemp from "../assets/cardctemp.png";
import carddtemp from "../assets/carddtemp.png";
import cardetemp from "../assets/cardetemp.png";
import cardftemp from "../assets/cardftemp.png";
import cardgtemp from "../assets/cardgtemp.png";


export const avatars = [
  { id: 1, avatar: avatar1 },
  { id: 2, avatar: avatar2 },
  { id: 3, avatar: avatar3 },
  { id: 4, avatar: avatar4 },
  { id: 5, avatar: avatar5 },
  { id: 6, avatar: avatar6 },
  { id: 7, avatar: avatar7 },
  { id: 8, avatar: avatar8 },
  { id: 9, avatar: avatar9 },
  { id: 10, avatar: avatar10 },
];


export const logos = {
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

export const cards = [
  {
    id: 1,
    image: cardatemp,
    card: CardA,
    name: "Breeze",
  },
  {
    id: 5,
    image: cardetemp,
    card: CardE,
    name: "Pixel",
  },
  {
    id: 2,
    image: cardbtemp,
    card: CardB,
    name: "Hex",
  },
  {
    id: 7,
    image: cardgtemp,
    card: CardG,
    name: "Peachy",
  },
  {
    id: 6,
    image: cardftemp,
    card: CardF,
    name: "Eco Boy",
  },
  {
    id: 3,
    image: cardctemp,
    card: CardC,
    name: "Dear Diary",
  },
  {
    id: 4,
    image: carddtemp,
    card: CardD,
    name: "Bloom",
  },
];