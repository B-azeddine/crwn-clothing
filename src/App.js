import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.cpn";

const HatsPage = () => {
  return(
  <div>
   <h1>
     This is the hats page! 
   </h1>
  </div>
)}

class App extends Component {
  render() {
    return (
      <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/hats" Component={HatsPage} />
      </Routes>
      </div>
    );
  }
}

export default App;
