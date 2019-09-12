import React from 'react';
import Home from './Home';
import Thanks from './Thanks';
import Users from './Users';
import { BrowserRouter, Route} from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/thankyou" exact component={Thanks} />
      <Route path="/users" exact component={Users} />
    </BrowserRouter>
  )
}

export default Routes;
