import React from "react";
import styled from "styled-components";
// import Button from "../../Button/Button";

const Hero = () => {
  return (
    <Container>
      <Bg></Bg>
      <Hold>
        <span>Phasellus lorem malesuada ligula pulvinar commodo maecenas</span>
        <Title>Hear Whatever you need</Title>
        <a
          href="#products"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button>Shop Now</Button>
        </a>
      </Hold>
      <ImageDiv>
        <img src="/assets/banner-left.png" />
      </ImageDiv>
    </Container>
  );
};

export default Hero;
const Bg = styled.div`
  background-image: url("/assets/banner.png");
  position: fixed;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -6;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  position: relative;

  @media screen and (max-width: 1150px) {
    height: 100%;
    min-height: 100vh;
    flex-direction: column;
  }
`;
const Hold = styled.div`
  color: white;
  // padding-top: 120px;
  padding-left: 50px;
  box-sizing: border-box;
  width: 600px;

  span {
    font-size: 14px;
  }

  @media screen and (max-width: 1150px) {
    margin-top: 100px;
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
  margin: 50px 0;
  text-transform: capitalize;
  @media screen and (max-width: 1150px) {
    font-size: 45px;
  }
`;

const Button = styled.button`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0px;
  color: white;
  border: 2px solid white;
  font-weight: 500;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  transition: all 350ms;
  text-transform: capitalize;
  :hover {
    background-color: var(--blue);
    border-color: var(--blue);
  }

  @media screen and (max-width: 1150px) {
    width: 200px;
    padding: 15px 0;
  }
`;

const ImageDiv = styled.div`
  width: 45%;
  position: absolute;
  bottom: -100px;
  right: 0;
  img {
    width: 100%;
  }

  @media screen and (max-width: 1150px) {
    position: relative;
    bottom: 0;
    top: 0;

    width: 100%;
  }
`;
