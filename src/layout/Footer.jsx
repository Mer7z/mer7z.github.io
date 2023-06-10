import React from "react";
import NLinks from "../components/NLinks";

function Footer() {
  return (
    <div className="Footer w-full bg-black py-14 px-32 text-white text-center">
      <div className="footer-links flex justify-center">
        <NLinks classN="fill-white w-7 h-7 mx-3" />
      </div>
      <div className="contacts flex flex-col gap-1 items-center text-white/70 fill-white/70 mt-10">
        <div className="flex w-80 flex-wrap justify-center items-center">
          <svg
            className="w-5 h-5 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <h3 className="text-lg ml-3">mer7zy@hotmail.com</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
