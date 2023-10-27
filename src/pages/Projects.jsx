import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <>
   <Header/>
   
   {/* all projects */}
   <div className='text-center' style={{marginTop:'100px'}}>
      <h1 className='mt-5 mb-5'>All Projects</h1>
      {/* search */}
      <div className='d-flex mb-5 justify-content-center w-100'>
        <div className='d-flex w-50 align-items-center p-1 rounded'>
        <input className='form-control shadow' placeholder='Searcg By Technoogies'/>
        <div className='btn' style={{marginLeft:'-50px'}} ><i className='fa-solid fa-magnifying-glass text-info'></i></div>
        </div>
      </div>

      <div className='container'>
       <Row>
        <Col sm={12} md={6} lg={4}>
          <ProjectCard/>
        </Col>
       </Row>
      </div>
   </div>


    </>
  )
}

export default Projects