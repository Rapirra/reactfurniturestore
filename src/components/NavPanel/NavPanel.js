import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


export default function NavPanel() {
  return (
     <div>
     
      <Navbar fixed="top" className="bg-white">
        <Container >
          <Navbar.Brand as={Link} to={"/"}><img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="foot-logo"/></Navbar.Brand>

          <Nav>
            <Nav.Link className="nav-link-list" as={HashLink} to={"/#"}>Home</Nav.Link>
            <Nav.Link className="nav-link-list" as={HashLink} to={"/#bestseller"}>Shop</Nav.Link>
            <Nav.Link className="nav-link-list" as={HashLink} to={"/#trendcategories"}>Product</Nav.Link>
          </Nav>

          <Nav>            
            <Nav.Link className='mx-2 hover:text-black' as={Link} to={"/usercart"}><img src={process.env.PUBLIC_URL + '/image/cart.svg'} alt="foot-logo"/></Nav.Link>
            <Nav.Link className='mx-2 hover:fill-red' as={Link} to={"/userfav"}><img src={process.env.PUBLIC_URL + '/image/heart.svg'} alt="foot-logo"/></Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </div>

   
  )
}

