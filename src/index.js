import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Desgin from "./design";
import reportWebVitals from "./reportWebVitals";
import TextAnimation from "./textAnimation/textAnimation";
import SeedingAnimation from "./seedingAnimation/seedingAnimation";
import Home from "./webApp/Home";
import SubServices from "./webApp/subServices";

ReactDOM.render(
  <>
    {/* <App /> */}
    {/* <TextAnimation /> */}
    {/* <SeedingAnimation /> */}
    {/* <Home /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sub_services/:id" element={<SubServices />}></Route>
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

reportWebVitals();
