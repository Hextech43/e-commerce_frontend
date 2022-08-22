import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card2 from "./card2";
import { usePaystackPayment } from "react-paystack";

const ItemPage = () => {
  const cartData = useSelector((state) => state.myReducer.cart);
  console.log(cartData);

  const config = {
    reference: new Date().getTime().toString(),
    email: "nelsonelaye@gmail.com",
    amount: 5000,
    publicKey: "pk_test_889e016f92b4237677bf4c538aa3dbef0e0bac1f",
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("Closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <Container>
      <Wrapper>
        <Top>Cart Items</Top>
        {cartData?.map((props) => (
          <Card2 props={props} />
        ))}

        <Pay
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Checkout
        </Pay>
      </Wrapper>
    </Container>
  );
};

export default ItemPage;

const Pay = styled.div`
  padding: 15px 30px;
  color: white;
  background-color: black;
  cursor: pointer;
`;
const Top = styled.div`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 95%;
  border: 2px solid #ffffff;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #fff;
  margin: 30px 0;
  flex-wrap: Wrap;
  flex-direction: column;
`;
