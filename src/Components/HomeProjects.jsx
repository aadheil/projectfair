import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
function HomeProjects({allprojects}) {
  return (
    <>
    <h2 className='text-center mt-5 text-dark'>Explore Our Projects</h2>
     <marquee behavior="" direction="" >
     <Row>
        {allprojects?.map(project=>(
          <Col sm={12} md={6} lg={4}>


<ProjectCard project={project}/>
</Col>
        ))
         }
      </Row>
     </marquee>
      <div className='text-center mt-5'>
      <Link to={'/projects'} >View More Projects</Link>

      </div>
    </>
  )
}

export default HomeProjects