import * as React from "react";
import Header from "./components/header/header";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./page/homepage/homepage";
import CheckoutPage from "./page/checkout/checkout";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
