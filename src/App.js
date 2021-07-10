import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Views/Home'
import GuideHome from './Views/Guides/GuideHome'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/guides" component={GuideHome} />
        <Route exact path="/yr-apps" component={''} />
        <Route exact path="/tips" component={''} />
        <Route exact path="/resources" component={''} />
        <Route exact path="/contact" component={''} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    );

    return (
      <BrowserRouter>
        <div>{routes}</div>
      </BrowserRouter>
    );
  }
}

export default App;
