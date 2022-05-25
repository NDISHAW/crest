import React from "react";
import { Link, Routes as Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";

function Quotation() {
  return (
    <div>
      <h1>Router multi-step navigation test</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/step1">Form</Link>
          </Route>
          <Route path="/step1">
            <Step1 />
          </Route>
          <Route path="/step2">
            <Step2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Quotation;
