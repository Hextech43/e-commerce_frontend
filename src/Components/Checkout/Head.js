import { Link, NavLink } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux"

const Head = () => {
  const total = useSelector((state)=>state.totalPrice)

  return (
    <Hold>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Title>AVC-Sound</Title>
      </Link>

      <Path>
        {" "}
        <NavigationLink
          to="/cart"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <span>Cart</span>
        </NavigationLink>
        <Icon />
        <NavigationLink
          to="/information"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <span>Information</span>
        </NavigationLink>
        <Icon />
        <NavigationLink
          to="/shipping"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <span>shipping</span>
        </NavigationLink>
        <Icon />
        <NavigationLink
          to="/payment"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <span>payment</span>
        </NavigationLink>
      </Path>

      <Summary>
        <InnerBox>
          <Text>Order Summary</Text>

          <Price>${total}.00</Price>
        </InnerBox>
      </Summary>
    </Hold>
  );
};

export default Head;

const Hold = styled.div`
  margin-bottom: 30px;
  // background: red;
  width: inherit;
  span {
    font-size: 13px;
    color: var(--blue);
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Summary = styled.div`
  width: 100%;
  border: 2px solid var(--light-grey);
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  display: none;

  @media screen and (max-width: 867px) {
    display: block;
  }
`;
const InnerBox = styled.div`
  width: 100%;
  color: var(--grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
`;

const Text = styled.div`
  color: var(--blue);
  font-weight: 500;
`;
const Price = styled.div`
  font-weight: 500;
  color: black;
  font-size: 15px;
`;

const Path = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  // justify-content: center;
`;

const Icon = styled(MdKeyboardArrowRight)`
  margin: 0 5px;
  color: var(--grey);
  font-size: 18px;
`;

const NavigationLink = styled(NavLink)`
  &.active {
    color: var(--grey);
  }
`;
// const Hold = styled.div``
