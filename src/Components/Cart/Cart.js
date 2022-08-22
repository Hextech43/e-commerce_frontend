import React, { useEffect } from "react";

import CartProducts from "./CartProducts";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import NewsLetter from "../NewsLetter/NewsLetter";
import OrderSummary from "./OrderSummary";
import OtherHeader from "../Header/OtherHeader";
import PageHead from "../PageHead/PageHead";
import styled from "styled-components";
import {useSelector} from 'react-redux'

const Cart = () => {
const cartData = useSelector((state)=>state.cart)

  const [empty, setEmpty] = React.useState(false);

  const checkCart = ()=> {
    if(cartData.length < 1){
      setEmpty(true)
        } else{
        return
        }
  }
  useEffect(()=>{
checkCart()
  }, [])
  return (
    <Container>
      <OtherHeader />
      <PageHead page="Shopping Cart" title="My Cart" />

      {empty ? (
        <Hold>
          <EmptyNote>Your cart is currently empty.</EmptyNote>
          <a
            href="/#products"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button>Continue shopping</Button>
          </a>
        </Hold>
      ) : (
        <Hold>
          <Continue>
            <a
              href="/#products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Continue Shopping <Icon />
            </a>
          </Continue>

          <CartHold>
            <CartProducts />
            <OrderSummary />
          </CartHold>
        </Hold>
      )}

      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  width: 100%;
  // background-color: white;
`;
const Hold = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  // padding-bottom: 80px;
  padding: 0 20px 80px;
`;

const EmptyNote = styled.div`
background-color: var(--yellow);
color: var(--brown);
text-align: center;
width: 100%
padding: 20px 0;
height: 55px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
font-size: 15px;
box-sizing: border-box;
margin-bottom: 30px;

`;
const Button = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  color: var(--blue);
  border: 1.8px solid var(--blue);
  font-weight: 500;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  transition: all 350ms;
  margin: auto;
  text-transform: capitalize;
  :hover {
    background-color: var(--blue);
    // border-color: var(--dark-blue);
    color: white;
  }
`;
const Continue = styled.div`
  color: var(--blue);
  text-align: right;
  display: inline;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const Icon = styled(MdKeyboardArrowRight)`
  margin: 0 10px;
  color: var(--blue);
  // margin: auto;
`;
const CartHold = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
// const Container = styled.div``;
