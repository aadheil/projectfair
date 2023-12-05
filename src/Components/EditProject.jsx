import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASEURL } from '../services/baseUrl';
import { editProjectApi } from '../services/allApis';
import { editProjectResponseContext } from '../Context/ContextShare';

function EditProject({displayData}) {

  const {editprojectresponse,setEditprojectresponse}=useContext(editProjectResponseContext)


    // console.log(displayData);
    const [project,setProject]=useState({
        id:displayData._id,
        title:displayData.title,
        languages:displayData.languages,
        github:displayData.github,
        website:displayData.website,
        overview:displayData.overview,
        projectImage:""
        
    })

    const [preview,setPeview]=useState("")

    useEffect(()=>{
        
        if(project.projectImage){
          setPeview(URL.createObjectURL(project.projectImage))
        }
        else{
            setPeview("")
        }
    },[project.projectImage])
    console.log(project);
    const[show,setShow]=useState(false)
    const hanldeShow=()=>setShow(true)

    const handleClose=()=>{
        setShow(false)
        setPeview("")
        setProject({
          id:displayData._id,
          title:displayData.title,
          languages:displayData.languages,
          github:displayData.github,
          website:displayData.website,
          overview:displayData.overview,
          projectImage:""
        })
    
    }

    const handleUpdate=async(e)=>{
        e.preventDefault()
        const{id,title,languages,github,website,overview,projectImage}=project
        if(!title || !languages || !github || !website || !overview){
            alert("Please fill the form completely")
          }
          else{
            const token=sessionStorage.getItem("token")
            const reqBody=new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("overview",overview)
    projectImage?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",displayData.projectImage)
    
    if(projectImage){
        const reqHeader={
            "Content-Type":"multipart/form-data", "Authorization":`Bearer ${token}`
          }
          const result = await editProjectApi(id,reqBody,reqHeader)
          if(result.status===200){
            handleClose()
            // share response with my project
            setEditprojectresponse(result.data)
          }
          else{
            alert(result.response.data)
          }
          }

          else{
            const reqHeader={
                "Content-Type":"application/json", "Authorization":`Bearer ${token}`
              }
              const result = await editProjectApi(id,reqBody,reqHeader)
          if(result.status===200){
            handleClose()
            // share response with my project
            setEditprojectresponse(result.data)

          }
          else{
            alert(result.response.data)
          }
              

          }

       }
 
    }

  return (
    <>
    <button onClick={hanldeShow} className='btn'><i class="fa-regular fa-pen-to-square text-danger  "></i></button>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size='lg'
        
      >
        <Modal.Header className='bg-info' closeButton>
          <Modal.Title className='bg-info text-light'>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-info'>
         <div className='row'>
            <div className="col-lg-6">
            <label htmlFor="projectpic" className='projectpic'>
            <input id='projectpic' type="file" style={{display:'none'}} onChange={e=>setProject({...project,projectImage:e.target.files[0]})} />
            <img src={preview?preview:`${BASEURL}/uploads/${displayData.projectImage}`}   className=' rounded-circle'  width={'200px'} height={'200px'} />
        </label>
            </div>
            <div className='col-lg-6'>
              <input type="text" className='form-control mb-3' placeholder='Project Name'  value={project.title?project.title:displayData.title} onChange={e=>setProject({...project,title:e.target.value})}/>
              <input type="text" className='form-control mb-3' placeholder='Language Used' value={project.languages?project.languages:displayData.languages} onChange={e=>setProject({...project,languages:e.target.value})} />
              <input type="text" className='form-control mb-3' placeholder='Github Link' value={project.github?project.github:displayData.github} onChange={e=>setProject({...project,github:e.target.value})} />
              <input type="text" className='form-control mb-3' placeholder='Website Link' value={project.website?project.website:displayData.website} onChange={e=>setProject({...project,website:e.target.value})} />
              <input type="text" className='form-control' placeholder='Project Overview' value={project.overview?project.overview:displayData.overview} onChange={e=>setProject({...project,overview:e.target.value})} />

            </div>
         </div>
        </Modal.Body>
        <Modal.Footer className='bg-info '>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleUpdate} >SAVE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject