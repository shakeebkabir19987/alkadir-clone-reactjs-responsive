import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import "./ViewWorkerstyles.css"
// import Profile from "../../src/images/profile1.jpg";

function ViewWorker() {
  return (
    <div style={{backgroundColor:"lightgray"}}>
    <div className='d-flex align-items-center justify-content-center mt-0 ' style={{
      maxWidth: '1150px', 
      margin: '0 auto', 
      padding: '20px', 
      boxSizing: 'border-box',
      
    }} >
    {/* navbar */}
      <Navbar expand="lg" className="bg-light" style={{ maxWidth: '1000px', width: '100%', borderRadius:"10px" }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "black", fontWeight:"bolder" }}>New Workers </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        
            <Form className="d-flex ms-auto">
              <Button variant="outline-danger" style={{color:"black", borderRadius:"20px", border:"1px solid grey"}} className='viewmore'>View more</Button>
            </Form>
        
        </Container>
      </Navbar>


      

    </div>
    </div>
    
  );
}

export default ViewWorker;
