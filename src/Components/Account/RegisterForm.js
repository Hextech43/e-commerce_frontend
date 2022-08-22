import * as yup from "yup"

import React from "react";
import axios from "axios"
import styled from "styled-components";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup"

const RegisterForm = () => {
const cartData = useSelector((state)=> state.cart)
const navigate = useNavigate()

  const yupSchema  = yup.object({
    firstName:yup.string().required("firstName is required"),
    lastName:yup.string().required("lastName is required"),
   email:yup.string().required("fEmail is required"),
   password:yup.string().required("fPassword is required"),
  })

  const {register, reset,handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(yupSchema)
  })

  const onSubmit = handleSubmit (async(value)=>{
    console.log(value)

    const {firstName,lastName, email, password}= value
 await axios.post("http://localhost:2334/api/user",{firstName,lastName, email, password} ).then((res)=>{
   console.log(res)

   if(cartData.length>0){
     navigate("/information")
   }else{
     navigate("/account")
     alert("Registration Success. Proceed to login")
   }
   reset()
 }).catch((err)=> {
   alert(err.reponse.message)
 })

  })
  return (
    <Container>
      <Top>
        <Title>New Customer</Title>
        <p>Register Account</p>
        <p>
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </p>
      </Top>

      <FormHold onSubmit={onSubmit}>
        <InputHold>
          <label>First Name</label>
          <input type="text" {...register("firstName")} />
        </InputHold>
        <InputHold>
          <label>Last Name</label>
          <input type="text"  {...register("lastName")}/>
        </InputHold>
        <InputHold>
          <label>
            Your Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input type="email"{...register("email")} />
        </InputHold>
        <InputHold>
          <label>
            Your Password <span style={{ color: "red" }}>*</span>
          </label>
          <input type="password" {...register("password")} />
        </InputHold>

        <Button type="submit">Create An Account</Button>
      </FormHold>
    </Container>
  );
};

export default RegisterForm;

const Container = styled.div`
  width: 100%;
  margin: 30px 15px;
  background-color: white;

  @media screen and (max-width: 768px) {
  }
`;

const Top = styled.div`
  margin-bottom: 30px;
  p {
    color: var(--grey);
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Title = styled.div`
  color: var(--blue);
  font-size: 25px;
  font-weight: 500;
`;
const FormHold = styled.form`
  width: 100%;
`;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 30px;
  label {
    color: var(--dark-blue);
    margin-bottom: 15px;
    font-size: 16px;
  }

  input {
    width: 100%;
    height: 55px;
    padding: 0 10px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    outline: 0;
    box-sizing: border-box;
    color: var(--grey);
  }
`;
const Button = styled.button`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  color: white;
  border: 2px solid var(--blue);
  font-weight: 500;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  background-color: var(--blue);
  transition: all 350ms;
  text-transform: capitalize;
  :hover {
    background-color: white;
    border-color: var(--dark-blue);
    color: var(--dark-blue);
  }
`;
