import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
            <Nav.Link  as={Link} to={"/usercart"}><FontAwesomeIcon className='iconfacart' icon={faCartShopping}/></Nav.Link>
            <Nav.Link className='mx-2 hover:text-red' as={Link} to={"/userfav"}><FontAwesomeIcon className='iconfaheart' icon={faHeart}/></Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </div>

   
  )
}

