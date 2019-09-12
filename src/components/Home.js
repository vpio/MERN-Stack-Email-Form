import React, { useState, useEffect } from 'react';
import EmailForm from './EmailForm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import '../styles/home.css';

function Home(props) {

  const [modalShow, setModalShow] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = () => {
    setModalShow(!modalShow)
  }

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/password', { password }).then(res => {
      res.data.approved ? props.history.push({ pathname: '/users', approved: true }) : alert('Invalid Password')
    }).catch(err => console.log('Error: ', err))
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="http://piomolina.com">Pio Molina</Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link onClick={handleClick}>View Entries</Nav.Link>
        </Nav>
      </Navbar >
      <EmailForm history={props.history}/>
      <Modal
          show={modalShow}
          onHide={handleClick}
          backdropClassName='custom-backdrop'
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
                type='password'
                autoComplete='off'
                onChange={handleChange}
                value={password}
                required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default Home;
