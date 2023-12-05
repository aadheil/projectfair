import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function HeaderForDashb({insideDashboard}) {
  const navigate=useNavigate()
  const handlelogout=()=>{
    sessionStorage.removeItem("token")
    localStorage.removeItem("existingUser")
    localStorage.removeItem("Role")
    navigate('/')
  }

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
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link onClick={handlelogout}><span>Log Out</span> <i className='fa-solid fa-right-from-bracket ms-2'></i></Link>
          </Navbar.Text>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default HeaderForDashb