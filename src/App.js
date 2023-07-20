import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.cpn";
import ShopPage from "./pages/shop/shop.cpn";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.cpn";
import Header from "./components/header/header.cpn";
import { auth, createUserProfilDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfilDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
    
        });
      } 
        this.setState({ currentUser: userAuth });
    
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/signin" Component={SignInAndSignUpPage} />
        </Routes>
      </div>
    );
  }
}

export default App;
