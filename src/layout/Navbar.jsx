import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import NLinks from "../components/NLinks";

function Navbar({ colorTheme, setColorTheme, nav, hovering, hideNav, app }) {
  const [navOpen, setNavOpen] = useState(false)

  const location = useLocation();

  useEffect(() => {
    app.current.scrollTo(0, 0);
    setNavOpen(false)
  }, [location]);

  const toogleColorTheme = () => {
    if (colorTheme === "light") {
      setColorTheme("dark");
      localStorage.setItem("color-theme", "dark");
      return;
    }
    if (colorTheme === "dark") {
      setColorTheme("light");
      localStorage.setItem("color-theme", "light");
      return;
    }
  };

  const toggleNavOpen = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };

  return (
    <>
      <div
        ref={nav}
        className={
          "navbar hidden md:block font-sans " + hovering + " " + hideNav
        }
      >
        <nav className="flex w-full px-10 py-3 h-20 justify-between">
          <div className="nav flex items-center justify-center gap-14">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-600 hover:text-sky-600 transition-colors font-bold uppercase"
                  : "hover:text-sky-600 transition-colors font-bold uppercase"
              }
            >
              home
            </NavLink>
            <NavLink
              to="/curriculum"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-600 hover:text-sky-600 transition-colors font-bold uppercase"
                  : "hover:text-sky-600 transition-colors font-bold uppercase"
              }
            >
              curriculum
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-600 hover:text-sky-600 transition-colors font-bold uppercase"
                  : "hover:text-sky-600 transition-colors font-bold uppercase"
              }
            >
              portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-sky-600 transition-colors text-emerald-600 font-bold uppercase"
            >
              contact me
            </NavLink>
          </div>
          <div className="misc flex items-center">
            {colorTheme === "light" ? (
              <button
                onClick={toogleColorTheme}
                className="w-6 h-6"
                title="Switch to Dark Mode"
              >
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              </button>
            ) : (
              <button
                onClick={toogleColorTheme}
                className="w-6 h-6"
                title="Switch to Light Mode"
              >
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              </button>
            )}
            <hr className="w-px border-none h-6 bg-gray-400 rounded px-px mx-3" />
            <NLinks />
          </div>
        </nav>
      </div>

      {
        //Nav Mobile
      }
      <div className={`navbar mobile flex fixed w-full p-7 z-30 md:hidden select-none ${hideNav} ${hovering}`}>
      {colorTheme === "light" ? (
              <button
                onClick={toogleColorTheme}
                className="w-6 h-6"
                title="Switch to Dark Mode"
              >
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              </button>
            ) : (
              <button
                onClick={toogleColorTheme}
                className="w-6 h-6"
                title="Switch to Light Mode"
              >
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              </button>
            )}
        <div onClick={toggleNavOpen} className={`toggle-btn relative flex flex-col gap-1 w-7 h-5 justify-center ml-auto cursor-pointer z-40 ${navOpen ? 'open' : ''}`}>
          <div className="row1 w-full h-1 bg-black rounded-full"></div>
          <div className="row2 w-full h-1 bg-black rounded-full"></div>
          <div className="row3 w-full h-1 bg-black rounded-full"></div>
        </div>
        <div className={`absolute w-full h-screen -z-20 top-0 left-0 ${navOpen ? '' : 'pointer-events-none'}`}>
          <div className={`nav-bg absolute w-full h-screen bg-black/30 top-0 left-0 pointer-events-none ${navOpen ? '' : 'hidden'}`}></div>
          <div className={`nav absolute top-0 flex flex-col text-xl gap-5 right-0 bg-white z-30 ` + `${navOpen ? 'open' : ''}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                {
                  let classes = "hover:text-sky-600 px-6 pt-5 transition-colors font-bold uppercase"
                  if(isActive){
                    classes += " text-sky-600" 
                  }
                  return classes
                }
              }
            >
              home
            </NavLink>
            <NavLink
              to="/curriculum"
              className={({ isActive }) =>
                {
                  let classes = "hover:text-sky-600 px-6 transition-colors font-bold uppercase"
                  if(isActive){
                    classes += " text-sky-600" 
                  }
                  return classes
                }
              }
            >
              curriculum
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                {
                  let classes = "hover:text-sky-600 px-6 transition-colors font-bold uppercase"
                  if(isActive){
                    classes += " text-sky-600" 
                  }
                  return classes
                }
              }
            >
              portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-sky-600 transition-colors px-6 pb-5 text-emerald-600 font-bold uppercase"
            >
              contact me
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
