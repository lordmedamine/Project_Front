import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addToCart,
} from "../../redux/Actions/CartActions";

import { current } from "../../redux/Actions/UserActions";
import { addOrder } from "../../redux/Actions/OrdersActions";

import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { user, load, error } = useSelector((state) => state.user);

  const handleQuantityChange = (itemId, quantityChange) => {
    const item = cartItems.find((item) => item._id === itemId);
    if (item) {
      dispatch(
        addToCart({
          ...item,
          quantity: Math.max(1, item.quantity + quantityChange),
        })
      );
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleSubmitOrder = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Order submission logic
    const orderDetails = cartItems.map(({ _id, quantity }) => ({
      productId: _id,
      quantity,
    }));
    const newOrder = {
      user: current._id,
      items: orderDetails,
      shippingAddress: "123 Main St, City, Country", // Shipping address
      paymentMethod: "credit-card", // Can be "credit-card", "paypal", or "bank-transfer"
      status: "pending", // Can be "pending", "paid", "shipped", "delivered", "cancelled"
      totalAmount: 130, // Total amount for all items
      paymentStatus: "pending", // Can be "pending", "completed", or "failed"
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    dispatch(addOrder(newOrder));
    console.log("Order Submitted: ", orderDetails);

    dispatch(clearCart());
    alert("Order submitted successfully!");
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {!cartItems || cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => handleQuantityChange(item._id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item._id, 1)}>
                    +
                  </button>
                </div>
                <button onClick={() => handleRemoveItem(item._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>
          Total: $
          {cartItems
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
        <button onClick={handleSubmitOrder} className="submit-order">
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
