import React from "react";
import { Route, Switch } from "react-router-dom";

import AppRoute from "./components/AppRoute";
import Layer from "./components/Layer";

function App() {
  return (
    <div className="App">
      <Layer />
      <Switch>
        <Route path="/" component={AppRoute} exact={true} />
        {/* <Route component={EmptyPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
