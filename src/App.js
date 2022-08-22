import { BrowserRouter, Route, Routes } from "react-router-dom";

import Account from "./Components/Account/Account";
import Cart from "./Components/Cart/Cart";
import CheckOutPrivate from "./Global/CheckOutPrivate"
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Information from "./Components/Checkout/Information";
import ItemPage from "./Components/itemPage/itemPage";
import Items from "./Components/Items/items";
import Payment from "./Components/Checkout/Payment";
import Private from "./Global/Private"
import React from "react";
import ScrollToTop from  "./Components/ScrollUp/ToTop"
import Shipping from "./Components/Checkout/Shipping";
import User from "./Components/Account/User";

const App = () => {
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
    <BrowserRouter>
    <ScrollToTop>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/account" element={<Private><Account/></Private>} />
        <Route path="/information" element={<CheckOutPrivate><Information /></CheckOutPrivate>} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
