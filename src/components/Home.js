import React, { useState, useEffect } from 'react';
import EmailForm from './EmailForm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/home.css';

const PASSWORD = 'password'

function Home(props) {

  const [modalShow, setModalShow] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(false)

  const handleClick = () => {
    setModalShow(!modalShow)
  }

  const handleChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    passwordMatch ? props.history.push('/users') : console.log('no')
  }

  useEffect(() => {
    (password === PASSWORD) ? setPasswordMatch(true) : setPasswordMatch(false)
  }, [password])


  return (
    <div>
      <Navbar bg="dark" variant="dark">
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
                isValid={passwordMatch}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Home;
