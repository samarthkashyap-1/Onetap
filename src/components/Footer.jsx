import React from 'react'
import wave2 from "../assets/wave2.svg";

const Footer = () => {
  return (
    <footer
      className="absolute right-0 left-0 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${wave2})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="text-center text-white pt-20 pb-6">
        <div>
          <p>Design and Developed by</p>
          <p>Samarth Kashyap</p>
        </div>
        <div className="flex gap-4 justify-center text-xs text-center mt-4">
          <a
            href="https://github.com/samarthkashyap-1"
            target="_blank"
            className="hover:text-sec transition-colors duration-300 ease-in-out"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/samarthkashyap_/"
            target="_blank"
            className="hover:text-sec transition-colors duration-300 ease-in-out"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/samarth-kashyap-5249b9207/"
            target="_blank"
            className="hover:text-sec transition-colors duration-300 ease-in-out"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/samarthkashyap0"
            target="_blank"
            className="hover:text-sec transition-colors duration-300 ease-in-out"
          >
            Twitter
          </a>
        </div>
        <div className="mx-auto mt-2">
          <p className="text-xs">©2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
