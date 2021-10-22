import React from "react";
import {Header, Footer} from './components'

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Team from "./pages/Team";
import Project from "./pages/Projects";
import CourseDetail from "./pages/CourseDetail";
import Email from "./pages/Email";
import Faq from "./pages/Faq";
import CoinIntroduce from "./pages/CoinIntroduce";
import Co from "./pages/Contact";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Pay from "./pages/Pay";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Team /> */}
      {/* <Project /> */}
      {/* <Page404 /> */}
      {/* <CourseDetail /> */}
      {/* <Email /> */}
      {/* <Faq /> */}
      {/* <CoinIntroduce /> */}
      <Contact />
      {/* <Profile /> */}
      {/* <Register /> */}
      {/* <Pay /> */}
      <Footer />
    </>
  );
}

export default App;
