import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.cpn";

import ErrorBoundary from "../../components/error-boundary/error-boundary";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <ErrorBoundary componentName="SignIn">
      <SignIn />
    </ErrorBoundary>
  </div>
);
export default SignInAndSignUpPage;
