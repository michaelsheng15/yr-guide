import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Views/Home'
import GuideHome from './Views/Guides/GuideHome'
import TicketEscalation from './Views/Guides/TicketEscalation'

import Tools from './Views/Tools'
import Tips from './Views/Tips'
import Resources from './Views/Resources'



import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/guides" component={GuideHome} />
        <Route exact path="/tools" component={Tools} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/ticketescalation" component={TicketEscalation} />
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
