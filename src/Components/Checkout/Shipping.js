import Head from "./Head";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PurchaseSummary from "./PurchaseSummary";
import React from "react";
import styled from "styled-components";

const Shipping = () => {
  return (
    <Container>
      <Wrap>
        <DetailsHold>
          <Head />

          <Form>
            <Summary>
              <InnerBox>
                <TopHold>
                  <Title>Contact</Title>
                  <Detail>nelsonelaye@gmail.com</Detail>
                </TopHold>

                <Link
                  to="/information"
                  style={{ textDecoration: "none", color: "var(--blue)" }}
                >
                  <span>Change</span>
                </Link>
              </InnerBox>
              <Line></Line>
              <InnerBox>
                <TopHold>
                  <Title>Ship to</Title>
                  <Detail>1 Pike Street, Lagos Island, Lagos</Detail>
                </TopHold>

                <Link
                  to="/information"
                  style={{ textDecoration: "none", color: "var(--blue)" }}
                >
                  <span>Change</span>
                </Link>
              </InnerBox>
            </Summary>

            <Second>
              <Subtitle>Shipping method</Subtitle>
              <Summary>
                <InnerBox>
                  <Hold>
                    <Circle></Circle>
                    <Title>Customers</Title>
                  </Hold>

                  <Price>$10.00</Price>
                </InnerBox>
              </Summary>
            </Second>

            <Actions>
              <Path>
                <Icon />
                <Link
                  to="/information"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  <span>Return to information</span>
                </Link>
              </Path>
              <Link
                  to="/payment"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
              <Button>Continue to payment</Button>
                </Link>
            </Actions>
          </Form>

          <Copy> &copy;All rights reserved </Copy>
        </DetailsHold>

        <PurchaseSummary />
      </Wrap>
    </Container>
  );
};

export default Shipping;

const Container = styled.div`
  width: 100%;
  @media screen and (max-width: 867px) {
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--light-grey);

  @media screen and (max-width: 867px) {
    flex-direction: column;
    // flex-wrap: wrap;
    background-color: white;
    align-items: center;
  }
`;
const DetailsHold = styled.div`
  padding-top: 50px;
  //   flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  border-right: 2px solid var(--grey);
  background-color: white;
  padding-bottom: 50px;

  @media screen and (max-width: 867px) {
    border: none;
    width: 90%;
    padding-bottom: 0;
  }
`;

const Form = styled.div`
  width: inherit;
  padding-bottom: 30px;

  border-bottom: 2px solid var(--light-grey);
`;
const Subtitle = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   flex-direction: column;
  margin-bottom: 10px;
  span {
    font-size: 12px;
    // text-align: right;
  }
`;
const Summary = styled.div`
  width: 100%;
  border: 2px solid var(--light-grey);
  border-radius: 5px;
  padding: 10px;
`;
const InnerBox = styled.div`
  width: 100%;
  color: var(--grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
`;
const Line = styled.div`
  height: 3px;
  background-color: var(--light-grey);
  width: 100%;
  margin: 10px 0;
`;
const Title = styled.div``;
const Detail = styled.div`
  flex: 0.8;
  //   text-align: left;
  margin-left: 20px;
  @media screen and (max-width: 867px) {
    margin: 0;
  }
`;

const Second = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const TopHold = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 867px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 7px solid var(--blue);
  border-radius: 50%;
  background-color: white;
  margin-right: 5px;
`;
const Price = styled.div`
  font-weight: 500;
  color: black;
  font-size: 15px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 867px) {
    flex-direction: column-reverse;
  }
`;
const Button = styled.button`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  border: 1px solid var(--blue);
  font-weight: 600;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;
  background-color: var(--blue);
  transition: all 350ms;
  text-transform: capitalize;
  :hover {
    background-color: white;
    border-color: var(--blue);
    color: var(--dark-blue);
  }

  @media screen and (max-width: 867px) {
    margin-bottom: 10px;
  }
`;

const Path = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  // justify-content: center;
  span {
    font-size: 13px;
    color: var(--blue);
  }
  @media screen and (max-width: 867px) {
    justify-content: center;
  }
`;

const Icon = styled(MdKeyboardArrowLeft)`
  margin-right: 0px;
  color: var(--blue);
  font-size: 18px;
`;

const Copy = styled.div`
  font-size: 11px;
  width: inherit;
  padding-top: 20px;
  color: var(--grey);

  @media screen and (max-width: 867px) {
    padding: 10px 20px;
  }
`;
// const CheckBox = styled.div``;
