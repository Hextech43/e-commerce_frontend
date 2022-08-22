import React from "react";
import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { BiSearch, BiUser } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Footer = ({ bc }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo src="/assets/soun-black.png" />
        </Link>

        <Navigations>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            <Nav>About Us</Nav>
          </Link>

          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            <Nav>Contact Us</Nav>
          </Link>

          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Nav>Privacy Policy</Nav>
          </Link>

          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Nav>Terms and Conditions</Nav>
          </Link>
        </Navigations>
        <Logos>
          <BrandLogo src="/assets/payment-1.png" />
          <BrandLogo src="/assets/payment-2.png" />
          <BrandLogo src="/assets/payment-3.png" />
          <BrandLogo src="/assets/payment-4.png" />
          <BrandLogo src="/assets/payment-9.png" />
          <BrandLogo src="/assets/paypal.png" />
          <BrandLogo src="/assets/shopify.png" />
        </Logos>
      </Wrapper>
      <Copy>© SOUN Demo. All Rights Reserved</Copy>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px 0px;
  min-height: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  box-sizing: border-box;

  @media screen and (max-width: 1150px) {
    padding: 0px 10px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   flex-wrap: wrap;
  padding: 30px 30px;
  box-sizing: border-box;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Logo = styled.img`
  width: 150px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;
const Navigations = styled.div`
  color: var(--grey);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  // justify-content: space-between;

  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;
const Nav = styled.div`
  margin: 0 15px;
  font-size: 14px;
  cursor: pointer;
  transition: all 350ms ease-in;
  text-transform: capitalize;
`;
const Logos = styled.div`
  display: flex;
  align-items: center;
`;
const BrandLogo = styled.img`
  width: 50px;
  margin: 10px 5px;
`;

const Copy = styled.div`
  color: var(--grey);
  font-size: 13px;
  width: 100%;
  padding: 0px 30px 30px;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;
// const Container = styled.div``
