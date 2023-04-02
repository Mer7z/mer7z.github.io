import { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import MainRouter from "./router/MainRouter";

function App() {


  return (
    <MainRouter/>
  );
}

export default App;
