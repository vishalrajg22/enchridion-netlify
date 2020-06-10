import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import HomePage from "./HomePage/HomePage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/profile-page" component={ProfilePage} />
    </Switch>
  </Router>
);

