import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  logoutUser,
  registerUser,
  deleteUser,
  resetPasswordUser,
  current,
} from "../redux/Actions/UserActions";

const UserComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const { user, load, error } = useSelector((state) => state.user);

  const userr = {
    username: "testuserredux",
    email: "testredux@example.com",
    password: "LJH*123456",
    age: 25,
    phone: "123456789",
    photo: "test-photo-url",
    role: "user",
  };

  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleRegister = () => {
    dispatch(registerUser(userr));
  };

  const handleDelete = () => {
    dispatch(deleteUser(userId));
  };

  const handleResetPassword = () => {
    dispatch(resetPasswordUser(userId, newPassword));
  };

  const handleGetCurrentUser = () => {
    dispatch(current());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Actions</h2>
      {load && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {user && (
        <div>
          <h3>Welcome, {user.username}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}

      <div>
        <h3>Login</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <h3>Register</h3>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>

      <div>
        <h3>Delete User</h3>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleDelete}>Delete User</button>
      </div>

      <div>
        <h3>Reset Password</h3>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>

      <div>
        <h3>Current User</h3>
        <button onClick={handleGetCurrentUser}>Get Current User</button>
      </div>

      <div>
        <h3>Logout</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserComponent;
