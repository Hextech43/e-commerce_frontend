import React from "react";
import styled from "styled-components";
import Head from "./Head";
import PurchaseSummary from "./PurchaseSummary";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { SiBitcoincash } from "react-icons/si";

const Payment = () => {
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
              <Line></Line>
              <InnerBox>
                <TopHold>
                  <Title>Method</Title>
                  <Detail>
                    Customer -{" "}
                    <span style={{ fontWeight: 500, color: "black" }}>
                      $10.00
                    </span>
                  </Detail>
                </TopHold>
              </InnerBox>
            </Summary>

            <Second>
              <Subtitle>Payment</Subtitle>

              <PayHold>
                <CashIcon />
                <Note>We are not accepting payments at this time</Note>
              </PayHold>
            </Second>
          </Form>

          <Copy> &copy;All rights reserved </Copy>
        </DetailsHold>

        <PurchaseSummary />
      </Wrap>
    </Container>
  );
};

export default Payment;

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
const PayHold = styled.div`
  width: 100%;
  height: 100%;
  //   padding: 50px 0;

  height: 200px;
  background-color: var(--light-grey);
  border: 1px solid var(--grey);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CashIcon = styled(SiBitcoincash)`
  font-size: 50px;
  color: var(--blue);
  margin-bottom: 10px;
`;

const Note = styled.div`
  font-size: 13px;
  color: var(--grey);
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
