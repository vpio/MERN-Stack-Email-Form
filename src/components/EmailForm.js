import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios';

function EmailForm(props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [persistent, setPersistent] = useState(false)

  const handleSubmit = () => {
    axios.post('/submit', {
      email,
      name
    }).then((res) => {
      res.data.success ? props.history.push('/thankyou') : console.log('ERROR!')
    })
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
                    type="checkbox"
                    label="Actually Persist To Database"
                    onClick={() => setPersistent(!persistent)}
                    value={persistent}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default EmailForm;
