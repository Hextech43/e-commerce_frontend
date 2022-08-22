import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const PageHead = ({ title, page }) => {
  return (
    <Container>
      <Top>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          <span>Home</span>
        </Link>

        <Icon />
        <span>{page}</span>
      </Top>
      <Title>{title}</Title>
    </Container>
  );
};

export default PageHead;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin-top: 80px;
  padding: 20px 0 30px;
`;

const Top = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  span {
    font-size: 14px;
    color: var(--grey);
  }
`;
const Icon = styled(MdKeyboardArrowRight)`
  margin: 0 10px;
  color: var(--grey);
`;

const Title = styled.div`
  font-size: 30px;
  color: var(--dark-blue);
  font-weight: 600;
`;
// const Container = styled.div`  `
