import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import NotFound from './NotFound';
import axios from 'axios';

function Users(props) {

  const [users, setUsers] = useState([])

  const handleClick = () => {
    props.history.push('/')
  }

  useEffect(() => {
    axios.get('/users/index').then(res => setUsers(res.data.user)).catch(err => console.log(err))
  }, []);

  if (!props.location.approved) {
    return <NotFound history={props.history}/>
  } else {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className='ml-auto'>
            <Nav.Link onClick={handleClick}>Back</Nav.Link>
          </Nav>
        </Navbar >
        <ListGroup>
          {
            (users.length > 0) ? users.map((user, i) => <ListGroup.Item key={`user ${i + 1}`}>{user.name}</ListGroup.Item>) : <h1>Loading...</h1>
          }
        </ListGroup>
      </div>
    )
  }
}

export default Users;
