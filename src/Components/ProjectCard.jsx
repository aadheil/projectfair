import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASEURL } from '../services/baseUrl';

function ProjectCard({project},{allproject}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    {project&&
      <Card className='shadow mb-5 btn' onClick={handleShow}>
    <Card.Img className='w-100' style={{height:'300px'}}  variant="top" src={project?.projectImage?`${BASEURL}/uploads/${project.projectImage}`:project.projectImg} />
    <Card.Body>
      <Card.Title className='text-dark'>{project.title}</Card.Title>
      {/* <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text> */}
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card> }

{project&&
  <Modal size='lg' show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>{project.title}</Modal.Title>
</Modal.Header>
<Modal.Body>
    <Row>
        <Col>
          <img src={project?.projectImage?`${BASEURL}/uploads/${project.projectImage}`:project.projectImg} style={{height:'200px'}} className='img-fluid' alt="" />
        </Col>
        <Col>
        <h2>{project.title} </h2>
        <p>{project.overview}</p>
        <p>Language Used : <span className='ms-2 fw-bolder'> {project.languages}</span></p>
        </Col>
    </Row>
    <hr />
    <div>
    <a  href={`${project.github}`} target='_blank' className='btn me-5 shadow'><i className='fa-brands fa-github fa-2x text-info'></i></a>
    <a  href={`${project.website}`} target='_blank' className='btn shadow'><i className='fa-solid fa-link fa-2x text-info'></i></a>

    </div>
</Modal.Body>

</Modal>}






</>
   )
}

export default ProjectCard