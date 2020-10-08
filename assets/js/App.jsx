import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home.jsx";
import Greetings from "./Greetings.jsx";

const Nav = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/hello">Greetings</Link>
            </li>
        </ul>
    </div>
);

const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/hello">
                    <Greetings />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
