import React from "react";
//import "bootstarp/dist/bootstrap.min.css";

import { BrowserRouter, Route } from "react-router-dom";
import MenuNavBar from "./Components/MenuNavBar";
import Footer from "./Components/FooterFixedBottom";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MenuNavBar />
         <main role="main" className="container-fluid">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/page1" component={Page1}></Route>
          <Route exact path="/page2" component={Page2}></Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}
