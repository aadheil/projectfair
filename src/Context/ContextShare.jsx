import React, { createContext, useState } from 'react'

export const addProjectResponseContext = createContext()

export const editProjectResponseContext = createContext()

function ContextShare({children}) {
    const [addprojectresponse,setAddprojectresponse]=useState({})
    const [editprojectresponse,setEditprojectresponse]=useState({})

  return (
    <addProjectResponseContext.Provider value={{addprojectresponse,setAddprojectresponse}}>
        
        <editProjectResponseContext.Provider value={{editprojectresponse,setEditprojectresponse}}>

        {children}

        </editProjectResponseContext.Provider>
    
    </addProjectResponseContext.Provider>
  )
}

export default ContextShare