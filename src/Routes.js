import React from "react";
import Home from "./Home.js";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FirebaseContext, Firebase } from "./firebase/index.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <FirebaseContext.Provider value={new Firebase()}>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route path="/app" component={Home} />
        </FirebaseContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
