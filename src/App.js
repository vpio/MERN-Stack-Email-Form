import React from 'react';
import Form from './components/Form.js';
import Thanks from './components/Thanks.js';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Form} />
      <Route path="/thankyou" exact component={Thanks} />
    </BrowserRouter>
  );
}

export default App;
