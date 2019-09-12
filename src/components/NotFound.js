import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function NotFound(props) {
  return (
    <Jumbotron style={{'height': '100vh'}}>
      <h1>404</h1>
      <p>
        Uh oh! We can't seem to find the page you're looking for.
      </p>
      <p>
        <Button variant="primary" onClick={() => props.history.push('/')}>Go Back</Button>
      </p>
    </Jumbotron>
  )
}

export default NotFound;
