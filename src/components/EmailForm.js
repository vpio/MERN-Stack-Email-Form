import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios';

function EmailForm(props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [persistent, setPersistent] = useState(false)
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/submit', {
      email,
      name
    }).then((res) => {
      res.data.success ? props.history.push('/thankyou') : console.log('ERROR!')
    })
    setValidated(true);
  }

  return (
    <Container className='mt-5'>
      <Form noValidate validated={validated}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
                    type="email"
                    placeholder="jon@doe.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
          />
          <Form.Control.Feedback type="invalid">
              Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
                    type="text"
                    placeholder="Jon"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
          />
          <Form.Control.Feedback type="invalid">
              Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Check
                    type="checkbox"
                    label="Actually Persist To Database"
                    onClick={() => setPersistent(!persistent)}
                    value={persistent}
          />
        </Form.Group>
        <Button type='submit' variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default EmailForm;
