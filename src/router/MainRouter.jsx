import { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Curriculum from "../components/Curriculum";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

function MainRouter() {
  const [colorTheme, setColorTheme] = useState("light");
  const [hovering, setHovering] = useState("");
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [hideNav, setHideNav] = useState("");
  const lastScroll = useRef(0);
  const nav = useRef(null);
  const app = useRef(null);

  useEffect(() => {
    const themeLocal = localStorage.getItem("color-theme");
    if (themeLocal) {
      setColorTheme(themeLocal);
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (mediaQuery.matches) {
        setColorTheme("dark");
      }
    }

    //Scroll logic
    const { current } = app;

    const handleScroll = () => {
      const containerTop = current.getBoundingClientRect().top;
      const height = window.innerHeight * 0.65;
      //skills
      const skills = document.querySelector(".skills");
      if (skills) {
        const skillsTop = skills.getBoundingClientRect().top;
        const skillsPos = skillsTop - containerTop;

        if (skillsPos <= height && skillsPos > 0) {
          skills.classList.add("animate");
        }
      }

      //projects
      const pj = document.querySelector(".projects");
      if (pj) {
        const pjTop = pj.getBoundingClientRect().top;
        const pjPos = pjTop - containerTop;

        if (pjPos <= height && pjPos > 0) {
          pj.classList.add("animate");
        }
      }

      //know-me
      const know = document.querySelector(".know-me");
      if (know) {
        const knowTop = know.getBoundingClientRect().top;
        const knowPos = knowTop - containerTop;

        if (knowPos <= height && knowPos > 0) {
          know.classList.add("animate");
        }
      }
    };

    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const { current: navbar } = nav;
    setNavbarHeight(navbar.clientHeight);
    const handleScroll = () => {
      const appTop = app.current.scrollTop;
      setScroll(appTop);
      const navTop = navbar.getBoundingClientRect().top;
      const navHeight = navbar.clientHeight;

      if (appTop > navHeight) {
        setHovering("hovering");
      } else if (appTop == 0) {
        setHovering("");
      }
    };

    app.current.addEventListener("scroll", handleScroll);

    return () => {
      app.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (hovering === "hovering") {
      if (scroll > lastScroll.current) {
        setHideNav("hide");
      } else if (scroll < lastScroll.current) {
        setHideNav("");
      }
      lastScroll.current = scroll;
    } else{
      setHideNav("")
    }
  }, [scroll]);

  return (
    <BrowserRouter>
      <div ref={app} className={"App h-full overflow-auto " + colorTheme}>
        <Navbar
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
          nav={nav}
          hovering={hovering}
          hideNav={hideNav}
          app={app}
        />
        <div
          id="content"
          className="mt-3 font-serif"
          style={
            window.innerWidth <= 640 ? {paddingTop: '120px'} : hovering === "hovering" ? { paddingTop: "80px" } : {}
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default MainRouter;
