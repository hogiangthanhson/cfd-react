import React, { useState, createContext } from "react";
import { Header, Navbar, Footer } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Team from "./pages/Team";
import CourseDetail from "./pages/CourseDetail";
// import Email from "./pages/Email";
import Faq from "./pages/Faq";
import CoinIntroduce from "./pages/CoinIntroduce";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Pay from "./pages/Pay";
import Course from "./pages/Course";
import Projects from "./pages/Projects";
import LoginModal from "./components/LoginModal";
import PrivateRoute from "./components/PrivateRoute";
import "./assets/css/custom.scss";
import { useAuth } from "./hooks/useAuth";

export const Context = createContext();

function App() {
  let { user } = useAuth();
  return (
    <BrowserRouter>
      <Context.Provider value={user}>
        <Header />
        <Navbar />
        {!user && <LoginModal />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chi-tiet-khoa-hoc/:slug" component={CourseDetail} />
          <Route path="/faq" component={Faq} />
          <Route path="/about" component={CoinIntroduce} />
          <Route path="/hop-tac" component={Contact} />
          {/* <Route><Email /></Route> */}
          <Route path="/khoa-hoc" component={Course} />
          <PrivateRoute path="/thong-tin-ca-nhan" component={Profile} />
          <Route path="/du-an" component={Projects} />
          <Route path="/dang-ky/:slug" component={Register} />
          <Route path="/team" component={Team} />
          <Route path="/thanh-toan" component={Pay} />
          <Route component={Page404}></Route>
        </Switch>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}
export default App;
