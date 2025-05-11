import React from "react";
// import "bootstrap/dist/bootstrap.min.css";

import { BrowserRouter, Route } from 'react-router-dom';
import MenuNavBar from "./Components/MenuNavBar";
// import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Partners from './Pages/Partners';
/*
needed to add  '.htaccess' in the html folder to resolve 
 1) click About - error page not found  https://stackoverflow.com/questions/53758525/react-routing-works-in-local-but-not-on-my-web-hosting
 2) fixing that also fixed the mobile error not being able to get to the dDapp when Mint is clicked
    the error being thrown was->
       reason: net err_cleartext_not_permitted
 htaccess content: 
 
 Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
*/
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <MenuNavBar />
          <div className="container-fluid">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Partners" component={Partners}></Route>
          </div>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}
