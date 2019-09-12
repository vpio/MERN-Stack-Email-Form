import React from 'react';
import EmailForm from './EmailForm.js';
import Thanks from './Thanks.js';
import Users from './Users.js';
import { BrowserRouter, Route} from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={EmailForm} />
      <Route path="/thankyou" exact component={Thanks} />
      <Route path="/users" exact component={Users} />
    </BrowserRouter>
  )
}

export default Routes;
