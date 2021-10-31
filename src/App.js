import React, { useState, createContext } from "react";
import { Header, Navbar, Footer } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Team from "./pages/Team";
import CourseDetail from "./pages/CourseDetail";
import Email from "./pages/Email";
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
import authService from "./services/authService";
import "./assets/css/custom.scss";

export const Context = createContext();

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("login")) || null);
  const [openLogin, setOpenLogin] = useState(false);

  const togglePopupLogin = (flag) => {
    if (typeof flag === "undefined") {
      setOpenLogin(!openLogin);
    } else {
      setOpenLogin(flag);
    }
  };
  const login = async (user) => {
    let response = await authService.login(user);
    let res = await response.json();
    if (res.data) {
      setUser(res.data);
      localStorage.setItem("login", JSON.stringify(res.data));
      localStorage.setItem("token", JSON.stringify(res.data.token));
    } else {
      return res.error;
    }
    // const userLogin = {
    //   ...user,
    //   name: "Dang Thuyen Vuong",
    //   avatar: "...",
    // };
    // localStorage.setItem("login", JSON.stringify(userLogin));
    // setUser(userLogin);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("login");
  };

  return (
    <BrowserRouter>
      <Context.Provider value={{ user, login, logout, togglePopupLogin, openLogin }}>
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
