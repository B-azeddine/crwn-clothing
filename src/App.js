import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.cpn";
import ShopPage from "./pages/shop/shop.cpn";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
