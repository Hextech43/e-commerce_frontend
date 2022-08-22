import { useDispatch, useSelector } from "react-redux";

import React from "react";
import styled from "styled-components";

const PurchaseSummary = () => {
  const cartData = useSelector((state)=>state.cart)
  const subTotal = useSelector((state)=>state.subTotalPrice)
  const total = useSelector((state)=>state.totalPrice)

  return (
    <Container>
      <Wrap>
        <Products>
         {
           cartData.map((props)=>(
            <Product key={props.id}>
            <ProductInfo>
              <ProductImage>
                <img src={props.image} alt=""/>
                <span>{props.qty}</span>
              </ProductImage>
              <div>
`                <Desc>{props.description}</Desc>
              </div>
            </ProductInfo>
`            <Price>${props.price}</Price>
          </Product>
           ))
         }
        </Products>

        <Bills>
          <Bill>
            <BillName>Subtotal</BillName>
            <Price>`${subTotal}</Price>
          </Bill>
          <Bill>
            <BillName>Shipping</BillName>
            <Price>$10.00</Price>
          </Bill>
        </Bills>

        <Total>
          <BillName>Total</BillName>
          <Price style={{ fontSize: "18px" }}>
            {" "}
            <span
              style={{
                color: "var(--grey)",
                fontSize: "13px",
                marginRight: "10px",
              }}
            >
              USD
            </span>
            ${total}
          </Price>
        </Total>
      </Wrap>
    </Container>
  );
};

export default PurchaseSummary;

const Container = styled.div`
  width: 50%;
  //   flex: 1;
  //   border-left: 2px solid var(--grey);
  height: 100%;
  min-height: 100vh;
  background-color: var(--light-grey);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 867px) {
    width: 100%;
    background-color: white;
    height: 100%;
    min-height: 100%;
    display: none;
  }
`;

const Wrap = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

const Products = styled.div`
  width: 100%;
  border-bottom: 0.5px solid var(--grey);
  padding-bottom: 30px;
`;
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom:10px;
`;
const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;
const ProductImage = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid var(--grey);
  border-radius: 5px;
  margin-right: 10px;
  position: relative;

  span {
    color: white;
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--grey);
    top: -10px;
    right: -3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  //   margin-bottom: 3px;
`;
const Desc = styled.div`
  color: var(--grey);
  font-size: 11px;
`;
const Price = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Bills = styled.div`
  width: 100%;
  padding: 30px 0 20px;
  border-bottom: 0.5px solid var(--grey);
`;
const Total = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 30px 0 20px;
  border-bottom: 0.5px solid var(--grey);
`;
const Bill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const BillName = styled.div`
  font-size: 14px;
  color: var(--grey);
`;
