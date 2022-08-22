import { BiSearch, BiUser } from "react-icons/bi";

import { BsCart3 } from "react-icons/bs";
import Button from "../Button/Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";
import SideNav from "./SideNav";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Header = ({ bc }) => {
  const cartQty = useSelector((state)=> state.qty)
  const [sideMenu, setSideMenu] = React.useState(false);

  const displaySideMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <Container bc={bc}>
      <Wrapper>
        <MenuIcon bc={bc} onClick={displaySideMenu} />

        {sideMenu ? <SideNav func={displaySideMenu} /> : null}
        {bc ? (
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo src="/assets/soun-black.png" />
          </Link>
        ) : (
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo src="/assets/soun-white.png" />
          </Link>
        )}

        <Navigations bc={bc}>
          <a
            href="#features"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <Nav>Features</Nav>
          </a>

          <Nav>Overview</Nav>
          <Nav>Specification</Nav>

          <a
            href="#products"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Nav>Accessories</Nav>
          </a>
          <Nav>Support</Nav>
        </Navigations>
        <Actions>
          <Icons bc={bc}>
            <SearchIcon bc={bc} />

            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <CartHold>
                <CartIcon bc={bc} />
                <span>{cartQty}</span>
              </CartHold>
            </Link>

            <Link
              to="/account"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <UserIcon bc={bc} />
            </Link>
          </Icons>
          <BHold>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button text="Buy Now" />
            </Link>
          </BHold>
        </Actions>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: ${({ bc }) => (bc ? "white" : "transparent")};

  box-shadow: ${({ bc }) => (bc ? "rgba(0, 0, 0, 0.16) 0px 1px 4px" : "")};
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  box-sizing: border-box;
  z-index: 100;

  @media screen and (max-width: 1150px) {
    padding: 0px 10px;
    height: 70px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuIcon = styled(HiOutlineMenuAlt3)`
  color: ${({ bc }) => (bc ? "var(--dark-blue)" : "white")};

  font-size: 30px;
  margin: 0 10px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1150px) {
    display: block;
  }
`;
const Logo = styled.img`
  width: 150px;
`;
const Navigations = styled.div`
  color: ${({ bc }) => (bc ? "var(--dark-blue)" : "white")};
  display: flex;
  align-items: center;
  // justify-content: space-between;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
const Nav = styled.div`
  margin: 0 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 350ms ease-in;
  text-transform: capitalize;

  :hover {
    border-bottom: 1px solid var(--dark-blue);
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
`;
const Icons = styled.div`
  margin-right: 20px;
  color: ${({ bc }) => (bc ? "var(--dark-blue)" : "white")};
`;

const SearchIcon = styled(BiSearch)`
  font-size: 25px;
  margin: 0 10px;
  cursor: pointer;
  display: none;
`;

const CartHold = styled.div`
  position: relative;
  display: inline-block;
  span {
    color: white;
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--dark-blue);
    top: -10px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const CartIcon = styled(BsCart3)`
  font-size: 25px;
  margin: 0 10px;
  cursor: pointer;
`;
const UserIcon = styled(BiUser)`
  font-size: 25px;
  margin: 0 10px;
  cursor: pointer;

  @media screen and (max-width: 1150px) {
  }
`;
const BHold = styled.div`
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
// const Container = styled.div``
