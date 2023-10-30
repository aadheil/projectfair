import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProjects() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant='warning' onClick={handleShow}>
       Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size='lg'
        
      >
        <Modal.Header className='bg-dark' closeButton>
          <Modal.Title className='bg-dark text-light'>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
         <div className='row'>
            <div className="col-lg-6">
            <label htmlFor="proname" className='projectpic'>
            <input id='proname' type="file" style={{display:'none'}} />
            <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-male-circle2-512.png" className='w-50 rounded-circle' alt="" />
        </label>
            </div>
            <div className='col-lg-6'>
              <input type="text" className='form-control mb-3' placeholder='Project Name' />
              <input type="text" className='form-control mb-3' placeholder='Language Used' />
              <input type="text" className='form-control mb-3' placeholder='Github Link' />
              <input type="text" className='form-control' placeholder='Website Link' />
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary">SAVE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProjects