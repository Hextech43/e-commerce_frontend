import Account from "../Components/Account/Account"
import {Navigate} from "react-router-dom"
import React from "react"
import User from "../Components/Account/User"
import {useSelector} from "react-redux"

const Private =({children})=>{
    const user = useSelector((state)=>state.user)
if(user){
    return <User/>
}
   
    return  <Account/>
    

    
}




export default Private