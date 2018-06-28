import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Porfolio from "./components/Porfolio";
import Footer from "./components/Footer";
import Sumary from "./components/Sumary";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/personal" render={() => <PersonalInfo />} />
            <Route path="/skills" render={() => <Skills />} />
            <Route path="/porfolio" render={() => <Porfolio />} />
            <Route path="/sumary" render={() => <Sumary />} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
