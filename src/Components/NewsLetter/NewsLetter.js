import React from "react";
import styled from "styled-components";
const NewsLetter = () => {
  return (
    <Container>
      <Bg></Bg>
      <Wrap>
        <Title>Newsletter Signup </Title>
        <p>
          Sign Up for exclusive updates, new arrivals & insider-only discounts
        </p>
        <Form>
          <input type="email" placeholder="enter your email addres" />{" "}
          <button type="submit">submit</button>
        </Form>
      </Wrap>
    </Container>
  );
};

export default NewsLetter;

const Bg = styled.div`
  background-image: url("/assets/banner-footer2.png");
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  box-sizing: border-box;
`;
const Container = styled.div`
  min-height: 60vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
const Wrap = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  p {
    font-size: 16px;
  }
`;
const Title = styled.div`
  font-size: 45px;
  margin-bottom: 30px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const Form = styled.form`
  margin-top: 30px;
  input {
    width: 40%;
    height: 45px;
    border-radius: 3px;
    outline: 0;
    border: 1px solid var(--grey);
    text-align: center;
  }

  button {
    width: 20%;
    height: 45px;

    color: white;
    border: 1px solid var(--blue);
    font-weight: 500;
    border-radius: 3px;
    font-size: 18px;
    cursor: pointer;
    background-color: var(--blue);
    transition: all 350ms;
    text-transform: capitalize;
    :hover {
      background-color: white;
      border-color: var(--dark-blue);
      color: var(--dark-blue);
    }
  }

  @media screen and (max-width: 768px) {
    input {
      width: 60%;
    }

    button {
      width: 30%;
    }
  }
`;
