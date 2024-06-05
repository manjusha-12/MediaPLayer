import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}} className='fw-bolder p-2 head'>
              <Navbar.Brand style={{color:"white"}}>
              <i className="fa-solid fa-music"></i>
                MEDIA PLAYER
              </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>  
    </>
  )
}

export default Header



