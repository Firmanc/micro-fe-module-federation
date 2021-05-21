import { Route, Switch, Redirect } from "react-router-dom";

import Auth from "./pages/Auth";
import JobCorridor from "./pages/JobCorridor";
import JobProfiles from "./pages/JobProfiles";
import Onboarding from './pages/Onboarding';
import React from "react";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true}>
      <Redirect to="/auth" />
    </Route>
    <Route path="/auth">
      <Auth />
    </Route>
    <Route path="/job-profiles">
      <JobProfiles />
    </Route>
    <Route path="/job-corridor">
      <JobCorridor />
    </Route>
    <Route path="/onboarding">
      <Onboarding />
    </Route>
  </Switch>
);

export default Routes;
