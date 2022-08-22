import Account from "../Components/Account/Account"
import Information from "../Components/Checkout/Information"
import {Navigate} from "react-router-dom"
import Payment from "../Components/Checkout/Payment"
import React from "react"
import {useSelector} from "react-redux"

const Private =({children})=>{
    const user = useSelector((state)=>state.user)

    if(user && user.address){
        return <Payment/>
    }
   
    return  <Information/>
    
}

export default Private