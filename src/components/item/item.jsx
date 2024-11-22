// item.jsx
import React from "react";
import "./item.scss";
import basket from "../../assets/basket.png";
import { Link } from "react-router-dom";

const Item = ({ _id, img, price, name }) => {
  return (
    <div className="item">
      <img src={basket} alt="" />
      <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
        <p className="item-name">{name}</p>
      </Link>
      <div className="item-prices">
        <div className="item-price-new">$ {price}</div>
        <div className="item-price-old">$ {(price + 10).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Item;
