import { addToCart, removeCart } from "../../Global/User";
import { useDispatch, useSelector } from "react-redux";

import { BiCart } from "react-icons/bi";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import pic from "../../img/1.jpg";
import styled from "styled-components";

const Card = ({ props }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.myReducer.totalPrice);
  const cartData2 = useSelector((state) => state.myReducer.qty);

  return (
    <Container>
      <ImageHold>
        <ImageDiv>
          <img src={props.image} />
        </ImageDiv>
        {/* <Icon>
          <FaCircle color="#A8A7A2" size="35" />
          <FaCircle color="#5C5954" size="35" />
          <FaCircle color="#E5913A" size="35" />
          <FaCircle color="#63858C" size="35" />
        </Icon> */}
        <Icon2>
          <Sub
            onClick={() => {
              dispatch(removeCart(props));
            }}
          >
            -
          </Sub>
          <QTY>{props.qty}</QTY>
          {props.qty === props.quantity ? (
            <Increase
              style={{
                background: "silver",
                border: "none",
              }}
            >
              +
            </Increase>
          ) : (
            <Increase
              // disabled={props.qty === props.quantity}
              onClick={() => {
                dispatch(addToCart(props));
              }}
            >
              +
            </Increase>
          )}
        </Icon2>
      </ImageHold>
      <DescHolder>
        <Title>{props.title}</Title>
        <Text>{props.description}</Text>
        <AddToCart>
          <Add>Order</Add>
          <Price>#{props.price}</Price>
        </AddToCart>
        <div>totalPrice : {props.price * cartData2}</div>
        <div>totalQuantity : {cartData2}</div>
      </DescHolder>
    </Container>
  );
};

export default Card;

const Icon2 = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;
`;
const Sub = styled.button`
  height: 35px;
  background-color: #020201;
  width: 35px;
  border-radius: 100%;
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Increase = styled.button`
  height: 35px;
  background-color: #020201;
  width: 35px;
  border-radius: 100%;
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QTY = styled.div`
  font-size: 17px;
`;
const Price = styled.div`
  color: white;
  margin-left: 50px;
`;
const Add = styled.div`
  color: white;
  margin-left: 5px;
`;
const Btn2 = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  background-color: white;
  outline: none;
  font-size: 30px;
  border-radius: 5px;
  font-weight: 500;
`;
const Count = styled.div`
  position: absolute;
  width: 15px;
  height: 14px;
  border-radius: 100%;
  background-color: red;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-left: 13px;
  display: flex;
  top: 0;
  bottom: 0;
  font-size: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  font-weight: 700;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  /* margin-top: 150px; */
  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;
const AddToCart = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #132229;
  border-radius: 5px;
  margin: 50px 0;
`;
const Text = styled.div`
  width: 95%;
  /* margin-top: 30px; */
  border-radius: 5px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 20px;
  justify-content: space-between;
  /* flex-direction: column; */
  margin-bottom: 18px;
  margin-top: 18px;
`;
const Btn = styled.button`
  background-color: white;

  font-size: 15px;
  text-transform: uppercase;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.6);
`;
const ArrowHold = styled.div``;
const Icon = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImageDiv = styled.div`
  height: 350px;
  width: 100%;
  background-color: var(--grey);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    // object-fit: cover;
    height: 350px;
    width: 350px;
    position: center;
  }
`;
const Top = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-right: 10px;
`;
const DescHolder = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 90%;
    align-items: center;
    margin: 15px 0;
  }
`;
const ImageHold = styled.div`
  width: 50%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
const Container = styled.div`
  height: 100%;

  width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;
