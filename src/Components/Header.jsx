import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(obj) {
    console.log(obj.bgColor);
  return (
    <>
    <div style={{height:'60px'}}>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/50/28/university-college-school-badge-logo-design-vector-27305028.jpg" alt="" style={{width:'60px',height:'60px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Services</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </div>
    </>
  )
}

export default Header