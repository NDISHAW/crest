import React from 'react'
import{Link, Switch, Route, BrowserRouter as Router,} from "react-router-dom";
import Step1 from './Step1';
import Step2 from './Step2';

export default function Quotation() {
  return (
    <div>
      <h1> Follow along to get a free guotation </h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/step1">
              <button>NEXT</button>
            </Link>
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

