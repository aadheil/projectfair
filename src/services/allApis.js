const { BASEURL } = require("./baseUrl");
const { commonAPI } = require("./commonApi");

// register API
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/user/register`,user,"")
}

// login API
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASEURL}/user/login`,user,"")
}

// add project api
export const addProjectAPI=async(project,header)=>{
    return await commonAPI("POST",`${BASEURL}/projects/add`,project,header)
}

// user/all-projects
export const userProjectApi =async(header)=>{
    return await commonAPI("GET",`${BASEURL}/user/allprojects`,"",header)
}

// home projects
export const homeProjectsApi=async()=>{
    return await commonAPI("GET",`${BASEURL}/home/projects`,"","")
}

// all projects
export const allProjectApi=async(searchkey,header)=>{
    return await commonAPI("GET",`${BASEURL}/projects/all?search=${searchkey}`,"",header)
}

// editproject
export const editProjectApi = async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASEURL}/project/edit/${projectId}`,reqBody,reqHeader)
}

// deleteproject
export const deleteProjectApi=async(projectid,reqHeader)=>{
    return await commonAPI("DELETE",`${BASEURL}/project/remove/${projectid}`,{},reqHeader)
}

// updateprofile
export const updateProfileApi = async(user,reqHeader)=>{
    return await commonAPI("PUT",`${BASEURL}/user/update`,user,reqHeader)
}