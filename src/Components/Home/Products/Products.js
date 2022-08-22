import Data from "./Products.json";
import React from "react";
import  {addToCart} from "../../../Global/User"
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"

const Products = () => {
  const dispatch = useDispatch()
  const hist = useNavigate()
  
  const [products, setProducts] = React.useState([]);

  const getData = async () => {
    const url = "http://localhost:2334/api/product";
    await axios
      .get(url)
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  React.useEffect(() => {
    getData();
    // console.log(Data);
    // setProducts(Data);
  }, []);
  return (
    <Container id="products">
      <Wrapper>
        {products?.map((props) => (
          <Card key={props._id}>
            <ImageHold>
              <img src={props.image} />
            </ImageHold>

            <Bottom>
              <Title>{props.title}</Title>
              <Description>{props.description}</Description>
              <Price>${props.price}</Price>
              <Cart
              onClick={()=>{
                dispatch(addToCart(props))
                hist("/cart")
              }}
              >Add to Cart</Cart>
            </Bottom>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 280px;
  height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
const ImageHold = styled.div`
  width: 100%;
  background-color: rgba(220, 220, 220, 0.3);
  overflow: hidden;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Bottom = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin: 10px 0px 0;
`;
const Description = styled.div`
  color: #dcdcdc;
  margin-bottom: 10px;
`;
const Price = styled.div`
  font-weight: 600;
`;
const Cart = styled.div`
  width: 80%;
  padding: 10px;
  background-color: black;
  color: white;
  margin-top: 20px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
`;
// const Container = styled.div``
