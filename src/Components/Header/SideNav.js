import React from "react";
import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { BiSearch, BiUser } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const SideNav = ({ func }) => {
  return (
    <Container>
      <Wrapper>
        <Cancel onClick={func}>
          <img src="/assets/close.png" />
        </Cancel>
        <Navigations>
          <a
            href="#features"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <Nav onClick={func}>Features</Nav>
          </a>

          <Nav onClick={func}>Overview</Nav>
          <Nav onClick={func}>Specification</Nav>

          <a
            href="#products"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Nav onClick={func}>Accessories</Nav>
          </a>
          <Nav onClick={func}>Support</Nav>
        </Navigations>
        <Actions>
          <BHold>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={func}
            >
              <Button text="Buy Now" />
            </Link>
          </BHold>
        </Actions>
      </Wrapper>
    </Container>
  );
};

export default SideNav;

const Container = styled.div`
  background-color: white;

  box-shadow: ;
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  display: flex;
  align-items: center;
  //   justify-content: center;
  flex-direction: column;
  padding: 30px 20px;
  box-sizing: border-box;
  z-index: 100;
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;

  // display: flex;
  // align-items: center;
  // justify-content: space-between;
`;

const Cancel = styled.div`
  width: 40px;
  position: absolute;
  top: -20px;
  right: -55px;
  background-color: var(--light-grey);
  padding: 10px;

  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;
const Navigations = styled.div`
  color: var(--dark-blue);
  //   display: flex;
  //   align-items: center;
  // justify-content: space-between;
`;
const Nav = styled.div`
  padding: 15px 0;
  font-size: 14px;
  cursor: pointer;
  transition: all 350ms ease-in;
  text-transform: capitalize;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--light-grey);

  :hover {
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const BHold = styled.div``;
// const Container = styled.div``
