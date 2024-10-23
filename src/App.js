import './App.css';
import React from "react";
// import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Home from "./components/Home/Home";
import RandomImage from "./components/RandomImage/RandomImage";

function App() {
  return (
      <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/random-image" component={RandomImage} />
              </Switch>
      </Router>
  );
}

export default App;
