import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-info w-100 position-fixed top-0" style={{zIndex:'1'}}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration:'none',fontSize:'35px'}} className='text-dark'>
            <img
              alt=""
              src="https://www.dwhpro.com/wp-content/uploads/2019/11/report-customization.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Project Fair
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header