import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.cpn";
import ShopPage from "./pages/shop/shop.cpn";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.cpn";
import Header from "./components/header/header.cpn";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
        <Route path="/signin" Component={SignInAndSignUpPage} />
      </Routes>
    </div>
  );
}

export default App;
