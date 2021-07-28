import "bootstrap/dist/css/bootstrap.min.css";
import GuideHome from "./Views/Guides/GuideHome";
import TicketEscalation from "./Views/Guides/TicketEscalation";
import Issues from "./Views/Guides/Issues";
import Emails from "./Views/Guides/Emails";
import Calls from "./Views/Guides/Calls";

import Home from "./Views/Home";
import Tools from "./Views/Tools";
import Tips from "./Views/Tips";
import Resources from "./Views/Resources";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { Component } from "react";

// class App extends Component {
// render() {
//   let routes = (
//     <Switch>
//       <Route exact path="/home" component={Home} />
//       <Route exact path="/guides" component={GuideHome} />
//       <Route exact path="/tools" component={Tools} />
//       <Route exact path="/tips" component={Tips} />
//       <Route exact path="/resources" component={Resources} />
//       <Route exact path="/ticketescalation" component={TicketEscalation} />
//       <Route exact path="/issues" component={Issues} />
//       <Route exact path="/emails" component={Emails} />
//       <Route exact path="/calls" component={Calls} />

//       <Route exact path="/">
//         <Redirect to="/home" />
//       </Route>
//     </Switch>
//   );

//   return (
//     <Router>
//       <div>{routes}</div>
//     </Router>
//   );
// }
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guides" component={GuideHome} />
        <Route exact path="/tools" component={Tools} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/ticketescalation" component={TicketEscalation} />
        <Route exact path="/issues" component={Issues} />
        <Route exact path="/emails" component={Emails} />
        <Route exact path="/calls" component={Calls} />
      </Switch>
    </Router>
  );
}
export default App;
