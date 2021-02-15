import React from "react";
import SearchFood from "./components/searchFood";
import FoodValues from "./components/FoodValues";
import {Home} from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/my-app" component={Home} />
          <Route path="/plan" component={SearchFood} />
          <Route path="/macros" component={FoodValues} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
