import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.cpn";
import ShopPage from "./pages/shop/shop.cpn";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.cpn";
import Header from "./components/header/header.cpn";
import { auth, createUserProfilDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {

  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfilDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null,mapDispatchToProps)(App);
