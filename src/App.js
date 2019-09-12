import React from 'react';
import EmailForm from './components/EmailForm.js';
import Thanks from './components/Thanks.js';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={EmailForm} />
      <Route path="/thankyou" exact component={Thanks} />
    </BrowserRouter>
  );
}

export default App;
