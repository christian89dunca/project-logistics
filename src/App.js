import React, { Component } from "react";
import {BrowserRouter} from "react-router-dom";
import "./styles/App.css";

import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
