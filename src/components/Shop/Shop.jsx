import React from "react";
import Hero from "./Hero";
import "./Shop.scss";
import ItemsList from "../itemslist/itemslist";
import Offers from "./offers.jsx";
import CollectionList from "../itemslist/collectionlist.jsx";
import Footer from "./Footer.jsx";
const Shop = () => {
  return (
    <div className="shop">
      <Hero />
      <ItemsList />
      <Offers />
      <CollectionList />
      <Footer />
    </div>
  );
};

export default Shop;
