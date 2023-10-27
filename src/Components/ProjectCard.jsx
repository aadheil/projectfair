import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}>
    <Card.Img className='w-100' style={{height:'300px'}}  variant="top" src="https://thumbs.dreamstime.com/b/programming-web-banner-best-programming-languages-technology-process-software-development-programming-web-banner-159274390.jpg" />
    <Card.Body>
      <Card.Title className='text-dark'>Card Title</Card.Title>
      {/* <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text> */}
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card> 

<Modal size='lg' show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Project Details</Modal.Title>
</Modal.Header>
<Modal.Body>
    <Row>
        <Col>
          <img src="https://thumbs.dreamstime.com/b/programming-web-banner-best-programming-languages-technology-process-software-development-programming-web-banner-159274390.jpg" style={{height:'200px'}} className='img-fluid' alt="" />
        </Col>
        <Col>
        <h2>Project Tite</h2>
        <p>Project Overview</p>
        <p>Language Used : <span className='ms-2 fw-bolder'> HTML,CSS,JS,React</span></p>
        </Col>
    </Row>
    <hr />
    <div>
    <a  href="https://github.com/aadheil/movid-app" target='_blank' className='btn me-5 shadow'><i className='fa-brands fa-github fa-2x text-info'></i></a>
    <a  href="https://vercel.com/adils-projects-62e2faaf/movid-app" target='_blank' className='btn shadow'><i className='fa-solid fa-link fa-2x text-info'></i></a>

    </div>
</Modal.Body>

</Modal>
</>
   )
}

export default ProjectCard