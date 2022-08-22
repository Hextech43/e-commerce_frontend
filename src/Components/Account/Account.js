import Footer from "../Footer/Footer";
import LoginForm from "./LoginForm";
import NewsLetter from "../NewsLetter/NewsLetter";
import OtherHeader from "../Header/OtherHeader";
import PageHead from "../PageHead/PageHead";
import React from "react";
import RegisterForm from "./RegisterForm";
import UserDetails from "./User";
import styled from "styled-components";

const Account = () => {

  const [user, setUser] = React.useState(true);


  return (
    <Container>
      <OtherHeader />
      <PageHead page="Account" title="My Account" />

    
        <FormHold>
          <LoginForm />
          <RegisterForm />
        </FormHold>
    

      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Account;

const Container = styled.div``;
const FormHold = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 0 30px;
  background-color: white;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
