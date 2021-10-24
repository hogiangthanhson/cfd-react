import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chi-tiet-khoa-hoc/:slug" component={CourseDetail} />
        <Route path="/faq" component={Faq} />

        <Route path="/about" component={CoinIntroduce} />
        <Route path="/hop-tac" component={Contact} />
        {/* <Route><Email /></Route> */}
        <Route path="/khoa-hoc" component={Course} />
        <Route path="/thong-tin-ca-nhan" component={Profile} />
        <Route path="/du-an" component={Projects} />
        <Route path="/dang-ky" component={Register} />
        <Route path="/team" component={Team} />
        <Route path="/thanh-toan" component={Pay} />
        <Route>
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
