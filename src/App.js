import './App.scss';
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
                  <Route exact path="/my-portfolio/" component={Home} />
                  <Route path="/my-portfolio/random-image" component={RandomImage} />
              </Switch>
      </Router>
  );
}

export default App;
