import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Dashboard from "./containers/Dashboard";
import * as ROUTES from "./constants/routes.js";
import About from "./containers/About";
import ReactF2019 from './containers/React_Fall_2019'
import ReactResources from './containers/React_Resources'


function App() {
  return (
    <div className="App">
        <HashRouter basename='/'>
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Dashboard} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.REACT_FALL19} component={ReactF2019} />
            <Route exact path={ROUTES.REACT_RESOURCES} component={ReactResources} />
          </Switch>
          <Footer />
        </HashRouter>
    </div>
  );
}

export default App;

