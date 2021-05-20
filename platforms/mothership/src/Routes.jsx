import { Route, Switch } from "react-router-dom";

import DialogPage from "./platforms/dialog-page";
import IndexPage from "./platforms/index-page";
import React from "react";
import RoutingPage from "./platforms/routing-page";
import SveltePage from "./platforms/svelte-page";
import UiLibraryPage from "./platforms/ui-library-page";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true}>
      <IndexPage />
    </Route>
    <Route path="/dialog" component={DialogPage} />
    <Route path="/ui-library" component={UiLibraryPage} />
    <Route path="/routing" component={RoutingPage} />
    <Route path="/svelte" component={SveltePage} />
  </Switch>
);

export default Routes;
