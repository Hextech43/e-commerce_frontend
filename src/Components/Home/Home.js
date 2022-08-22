import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";
import Features from "./Features/Features";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";

const Home = () => {
  const [scroll, setScroll] = React.useState(false);

  const getScroll = () => {
    const check = window.scrollY;
    if (check >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", getScroll);
  return (
    <Container>
      {scroll ? <Header bc="bc" /> : <Header />}
      <Hero />
      <Features />
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;
