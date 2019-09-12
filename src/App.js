import React from 'react';
import Routes from './components/Routes';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className='ml-auto'>
          <Nav.Link href="#home">View Entries</Nav.Link>
        </Nav>
      </Navbar >
      <Routes />
    </div>
  );
}

export default App;
