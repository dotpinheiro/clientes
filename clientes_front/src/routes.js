import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import { connect } from "react-redux";

const Routes = props => {
  const { auth } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        {!auth.loggedIn ? (
          <Redirect to="/" />
        ) : (
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Routes);
