import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import NotFound from './NotFound';

function Thanks(props) {
  if (!props.location.name) { return <NotFound history={props.history}/> }
    
  let name = props.location.name.charAt(0).toUpperCase() + props.location.name.slice(1)
  return (
    <Jumbotron style={{'height': '100vh'}}>
      <h1>Thank You!</h1>
      <p>
        Thanks for sending your info, {name}. Your cooperation and insight helps improve our team daily.
      </p>
      <p>
        <Button variant="primary" onClick={() => props.history.push('/')}>Go Back</Button>
      </p>
    </Jumbotron>

  )
}

export default Thanks;
