import React, { useState } from "react";
import styled from "styled-components";
import Card from "./card";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
const ItemPage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get("http://localhost:2334/api/product").then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Top>Perfect Furniture</Top>
        <Cart>
          <Link to="/items">
            <Count>2</Count>
            <BiCart size="25" />
          </Link>
        </Cart>
        {data?.map((props) => (
          <Card props={props} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ItemPage;

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
  margin-top: 30px;
`;

const Top = styled.div`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
  color: black;
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
  min-height: 90vh;
  width: 90%;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 30px 0;
  flex-wrap: Wrap;
  flex-direction: column;
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
