import React from "react";
import styled from "styled-components";
const Features = () => {
  return (
    <Container id="features">
      <Wrapper>
        <Headline>Features</Headline>
        <FeatureHold>
          <Feature>
            {" "}
            <IconOne src="/assets/icon1.png" />
            <Title>
              ANC
              <span style={{ fontSize: "30px" }}>*</span>
            </Title>
            <Description>
              Nam tempus turpis at metus scelerisque placerat nulla deumantos a
              solicitud felis. Pellentesque diam dolor elementum etos lobortis
              des mollis.
            </Description>
          </Feature>
          <Feature>
            {" "}
            <Icon src="/assets/icon2.png" />
            <Title>Design</Title>
            <Description>
              Nam tempus turpis at metus scelerisque placerat nulla deumantos a
              solicitud felis. Pellentesque diam dolor elementum etos lobortis
              des mollis.
            </Description>
          </Feature>
          <Feature>
            {" "}
            <Icon src="/assets/icon3.png" />
            <Title>Charge</Title>
            <Description>
              Nam tempus turpis at metus scelerisque placerat nulla deumantos a
              solicitud felis. Pellentesque diam dolor elementum etos lobortis
              des mollis.
            </Description>
          </Feature>
        </FeatureHold>
      </Wrapper>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  height: 100%;
  background-image: url("/assets/features.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Headline = styled.div`
  font-size: 45px;
  color: var(--dark-blue);
  font-weight: 500;
`;
const FeatureHold = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  //   flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const IconOne = styled.img`
  width: 150px;
`;
const Icon = styled.img`
  width: 100px;
`;
const Title = styled.div`
  color: var(--dark-blue);
  font-size: 30px;
  font-weight: 500;
  margin: 50px 0;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;
const Description = styled.div`
  color: var(--grey);
  font-size: 15px;
`;
// const Container = styled.div``;
