import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
  updateOrder,
} from "../redux/Actions/OrdersActions";

const OrdersComponent = () => {
  const dispatch = useDispatch();

  // Access state from the Redux store
  const { orders, currentOrder, loading, error } = useSelector(
    (state) => state.orders
  );

  // Local state for creating/updating orders
  const [newOrder, setNewOrder] = useState({
    user: "",
    items: [],
    shippingAddress: "",
    paymentMethod: "",
  });

  const [updateDetails, setUpdateDetails] = useState({
    _id: "",
    updatedOrder: {
      shippingAddress: "",
      paymentMethod: "",
    },
  });

  // Fetch all orders on component mount
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  // Handlers for creating, updating, and deleting orders
  const handleAddOrder = () => {
    const newOrder = {
      user: "67399f8640555865914f12a7", // User's ObjectId (replace with the actual user's ID)
      items: [
        {
          product: "6737d96fdf54852a220192c5", // Product's ObjectId (replace with the actual product's ID)
          quantity: 2,
          price: 50,
          totalPrice: 100, // price * quantity
        },
        {
          product: "67399d5c40555865914f1296", // Another product's ObjectId
          quantity: 1,
          price: 30,
          totalPrice: 30, // price * quantity
        },
      ],
      shippingAddress: "123 Main St, City, Country", // Shipping address
      paymentMethod: "credit-card", // Can be "credit-card", "paypal", or "bank-transfer"
      status: "pending", // Can be "pending", "paid", "shipped", "delivered", "cancelled"
      totalAmount: 130, // Total amount for all items
      paymentStatus: "pending", // Can be "pending", "completed", or "failed"
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch(addOrder(newOrder));
  };

  const handleGetOrderById = (id) => {
    dispatch(getOrderById(id));
  };

  const handleDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  const handleUpdateOrder = () => {
    dispatch(updateOrder(updateDetails));
  };

  return (
    <div>
      <h1>Orders Management</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <h2>Add Order</h2>
      <input
        type="text"
        placeholder="User ID"
        value={newOrder.user}
        onChange={(e) => setNewOrder({ ...newOrder, user: e.target.value })}
      />
      <input
        type="text"
        placeholder="Shipping Address"
        value={newOrder.shippingAddress}
        onChange={(e) =>
          setNewOrder({ ...newOrder, shippingAddress: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Payment Method"
        value={newOrder.paymentMethod}
        onChange={(e) =>
          setNewOrder({ ...newOrder, paymentMethod: e.target.value })
        }
      />
      <button onClick={handleAddOrder}>Add Order</button>

      <h2>Orders List</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>User: {order.user}</p>
          <p>shippingAddress: {order.shippingAddress}</p>
          <p>totalAmount: {order.totalAmount}</p>
          <button onClick={() => handleGetOrderById(order._id)}>
            View Order Details
          </button>
          <button onClick={() => handleDeleteOrder(order._id)}>
            Delete Order
          </button>
        </div>
      ))}

      {currentOrder && (
        <div>
          <h2>Order Details</h2>
          <p>Order ID: {currentOrder._id}</p>
          <p>Shipping Address: {currentOrder.shippingAddress}</p>
          <p>Total Amount: {currentOrder.totalAmount}</p>
        </div>
      )}

      <h2>Update Order</h2>
      <input
        type="text"
        placeholder="Order ID"
        value={updateDetails._id}
        onChange={(e) =>
          setUpdateDetails({ ...updateDetails, _id: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Updated Shipping Address"
        value={updateDetails.updatedOrder.shippingAddress}
        onChange={(e) =>
          setUpdateDetails({
            ...updateDetails,
            updatedOrder: {
              ...updateDetails.updatedOrder,
              shippingAddress: e.target.value,
            },
          })
        }
      />
      <input
        type="text"
        placeholder="Updated Payment Method"
        value={updateDetails.updatedOrder.paymentMethod}
        onChange={(e) =>
          setUpdateDetails({
            ...updateDetails,
            updatedOrder: {
              ...updateDetails.updatedOrder,
              paymentMethod: e.target.value,
            },
          })
        }
      />
      <button onClick={handleUpdateOrder}>Update Order</button>
    </div>
  );
};

export default OrdersComponent;
