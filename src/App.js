import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contacts" component={Contact} />
    </div>
  );
}

export default App;
