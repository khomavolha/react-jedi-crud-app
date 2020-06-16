import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ReactDOM from "react-dom";
import PeoplePage from "./pages/people";
import PlanetPage from "./pages/planets";
import StarPage from "./pages/starships";
import NavBar from "./components/common/Navbar";

//const element = <h1> Hello Javascript , { 2 + 7 }</h1>

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/people" />
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/planets" component={PlanetPage} />
        <Route exact path="/starships" component={StarPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
