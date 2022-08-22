import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {useSelector} from 'react-redux'

// const cartData2 = useSelector((state)=>state.qty)
const OrderSummary = () => {
  const cartData1 = useSelector((state)=>state.subTotalPrice)
  const [agree, setAgree] = React.useState(false);

  const changeAgreement = () => {
    setAgree(!agree);
  };
  return (
    <Container>
      <Title>Order Summary</Title>
      <PriceSummary>
        <span>Total:</span>
        <PriceHold>
          <Circle></Circle>
          <Price>${cartData1}</Price>
        </PriceHold>
      </PriceSummary>

      <Check>
        <input type="checkbox" id="check" onChange={changeAgreement} />
        <label htmlFor="check">I agree with the terms and conditions</label>
      </Check>
      {agree ? (
        <Link
          to="/information"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button>Proceed to Checkout</Button>
        </Link>
      ) : (
        <Button style={{ backgroundColor: "rgba(236, 51, 35, .6)" }}>
          Proceed to Checkout
        </Button>
      )}
    </Container>
  );
};

export default OrderSummary;

const Container = styled.div`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 100%;
  padding: 15px;
  text-align: center;
  color: var(--dark-blue);
  background-color: var(--light-grey);
  margin-bottom: 30px;
  border-radius: 3px;
`;
const PriceSummary = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--light-grey);
  margin-bottom: 30px;
  span {
    font-weight: 500;
  }
`;
const PriceHold = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: var(--light-grey);
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  label {
    font-size: 14px;
    color: var(--grey);
  }
`;

const Button = styled.div`
  width: 100%;
  background-color: var(--orange);
  border: 1px solid var(--orange);
  color: white;
  padding: 15px;
  //   height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    border: 1px solid var(--dark-blue);
    color: var(--dark-blue);
    background-color: white;
  }
`;
// const Container = styled.div``
