import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function Thanks(props) {
  return (
    <Jumbotron style={{'height': '100vh'}}>
      <h1>Thank You!</h1>
      <p>
        Thanks for sending your info. Your cooperation and insight helps improve our team daily.
      </p>
      <p>
        <Button variant="primary" onClick={() => props.history.push('/')}>Go Back</Button>
      </p>
    </Jumbotron>

  )
}

export default Thanks;
