import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allApis';
import { addProjectResponseContext } from '../Context/ContextShare';

function AddProjects() {

  const {addprojectresponse,setAddprojectresponse}=useContext(addProjectResponseContext)


  const [projectDetails,setprojectDetails]=useState({
    title:"",
    languages:"",
    github:"",
    website:"",
    overview:"",
    image:"",
    userId:""

  })

  const[token,settoken]=useState()

  const[preview,setpreview]=useState("")

  useEffect(()=>{
    if(localStorage.getItem("existingUser")&&sessionStorage.getItem("token")){
      setprojectDetails({...projectDetails,userId:JSON.parse(localStorage.getItem("existingUser"))._id})
      settoken(sessionStorage.getItem("token"))
      

    }
  },[])

  useEffect(()=>{
    if(projectDetails.image){
      setpreview(URL.createObjectURL(projectDetails.image))
    }
  },[projectDetails.image])

console.log(projectDetails);
    const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setpreview("")
    setprojectDetails({
      title:"",
      languages:"",
      github:"",
      website:"",
      overview:"",
      image:"",
      userId:""
  
    })
  }
  const handleShow = () => setShow(true);


const handleSave=async(e)=>{
  e.preventDefault()
  const{title,languages,github,website,overview,image,userId}=projectDetails
  if(!title || !languages || !github || !website || !overview || !image || !userId){
    alert("Please fill the form completely")
  }
  else{
    const reqBody=new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("overview",overview)
    reqBody.append("projectImage",image)
    reqBody.append("userId",userId)

    const reqHeader={
      "Content-Type":"multipart/form-data", "Authorization":`Bearer ${token}`
    }

    const result =await addProjectAPI(reqBody,reqHeader)
    console.log(result);
    if(result.status==200){
      alert(`Project ${result.data.title} added successfully`)
      setprojectDetails({
        title:"",
        languages:"",
        github:"",
        website:"",
        overview:"",
        image:"",
        userId:""
    
      })
      setAddprojectresponse(result.data)
      handleClose()
    }
    else{
      alert(result.response.data)
      
      // alert("Error!!! Project already exists / Try after some time")
    }
    

  }
}

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
            <label htmlFor="projectpic" className='projectpic'>
            <input id='projectpic' type="file" style={{display:'none'}} onChange={e=>setprojectDetails({...projectDetails,image:e.target.files[0]})} />
            <img src={preview?preview:"https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-male-circle2-512.png"} className='w-50 rounded-circle' alt="" />
        </label>
            </div>
            <div className='col-lg-6'>
              <input type="text" className='form-control mb-3' placeholder='Project Name'  value={projectDetails.title} onChange={(e)=>setprojectDetails({...projectDetails,title:e.target.value})}/>
              <input type="text" className='form-control mb-3' placeholder='Language Used' value={projectDetails.languages} onChange={(e)=>setprojectDetails({...projectDetails,languages:e.target.value})} />
              <input type="text" className='form-control mb-3' placeholder='Github Link' value={projectDetails.github} onChange={(e)=>setprojectDetails({...projectDetails,github:e.target.value})} />
              <input type="text" className='form-control mb-3' placeholder='Website Link' value={projectDetails.website} onChange={(e)=>setprojectDetails({...projectDetails,website:e.target.value})}/>
              <input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={(e)=>setprojectDetails({...projectDetails,overview:e.target.value})}/>

            </div>
         </div>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleSave}>SAVE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProjects