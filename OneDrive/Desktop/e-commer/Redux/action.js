import * as types from "./action.type"
import axios from "axios"


const  add_profile=(payload)=>{
    return{
        type:types.ADD_PROFILE,
        payload
    }
}

const update_profile=()=>{
    return{
        type:types.UPDATE_PROFILE
    }
}
const delet_profile=(id)=>{
    return{
        type:types.DELETE_PROFILE,
        payload
    }
}
const get_profile=()=>{
    return{
        type:types.UPDATE_PROFILE
    }
}

const request=()=>{
    return{
        type:types.REQUEST
    }
}
const error=()=>{
    return{
        type:types.ERROR
    }
}

export const add_profile_api=(payload)=>async(dispatch)=>{
    // console.log(payload);
    dispatch(request())
    try{
        let response=await axios.post(`http://localhost:8080/profiles`,payload).then((res)=>{
            console.log(res.data);
            dispatch(add_profile(res.data))
        })
        // console.log(response.data);
    }
    catch{
        dispatch(error())
    }
}




export default{get_profile,update_profile,add_profile,delet_profile,request,error}