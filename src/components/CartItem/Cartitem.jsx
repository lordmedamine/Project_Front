import React from "react";
import "./CartItem.scss";

const CartItem = ({ item, handleRemoveItem }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">Price: ${item.price.toFixed(2)}</p>
        <p className="item-quantity">Quantity: {item.quantity}</p>
        <p className="item-total">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <button
        className="remove-button"
        onClick={() => handleRemoveItem(item._id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
