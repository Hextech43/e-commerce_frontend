import { useDispatch, useSelector } from "react-redux";

import Footer from "../Footer/Footer";
import LoginForm from "./LoginForm";
import NewsLetter from "../NewsLetter/NewsLetter";
import OtherHeader from "../Header/OtherHeader";
import PageHead from "../PageHead/PageHead";
import React from "react";
import { removeUser } from "../../Global/User";
import styled from "styled-components";

const User = () => {
  const user = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  return (
    <Container>
       <OtherHeader />
      <PageHead page="Account" title="My Account" />

      <Hold>
        <Head bd>Order History</Head>
        <Head br yl cn style={{ fontSize: "13px" }}>
          You have not made any orders yet
        </Head>
        <Head bd>Account Details</Head>
        <Text>{user.lastName}</Text>
        <Text>{user.email}</Text>
        <Button
       onClick={() => {
        dispatch(removeUser());
      }}
        >Log Out</Button>
      </Hold>

      <NewsLetter />
      <Footer />
      
    </Container>
  );
};

export default User;
const Button = styled.div`
width: 200px;
display: flex;
align-items: center;
justify-content: center;
padding: 15px 0px;
color: white;
border: 1px solid var(--blue);
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
`
const Container = styled.div``;
const Hold = styled.div`
  //   width: 80%;
  background-color: white;
  box-sizing: border-box;
  // padding-bottom: 80px;
  padding: 0 50px 80px;
`;
const Head = styled.div`
  background-color: ${({ yl }) =>
    yl ? " var(--yellow)" : "var(--light-grey)"};
  color: ${({ br }) => (br ? "var(--brown)" : "var(--dark-blue)")};
  width: 100%;
  padding: 20px;
  // height: 55px;
  display: flex;
  align-items: center;
  justify-content: ${({ cn }) => (cn ? "center" : "")};
  border-radius: 5px;
  font-size: 15px;
  font-weight: ${({ bd }) => (bd ? "600" : "400")};
  // box-sizing: border-box;
  margin-bottom: 30px;
`;

const Text = styled.div`
  color: var(--grey);
  margin: 0 0 15px;
  font-size: 15px;
`;
