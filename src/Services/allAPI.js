import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"


export const registerAPI =async (student)=>    {
    return await commonAPI("POST",`${SERVER_URL}/register`,student,"")
}

export const getAllStudProfileAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/students`,"","")
    //console.log(res);
    
}