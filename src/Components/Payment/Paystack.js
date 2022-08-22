import React from "react";
import styled from "styled-components";
import { usePaystackPayment } from "react-paystack";
const Paystack = () => {
  const config = {
    reference: new Date().getTime().toString(),
    email: "nelsonelaye@gmail.com",
    amount: 788,
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
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Make Payment
      </button>
    </Container>
  );
};

export default Paystack;

const Container = styled.div`
  padding-top: 20px;
`;
// const Container = styled.div``
// const Container = styled.div``
