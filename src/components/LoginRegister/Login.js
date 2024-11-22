import React, { useState, useEffect } from "react";
import { Google, Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../redux/Actions/UserActions";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { user, load, error } = useSelector((state) => state.user);

  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      age: "18",
      phone: null,
      photo: null,
      role: "user",
    };
    await dispatch(registerUser(newUser));
    dispatch(loginUser(email, password)); // Automatically log in after registration
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleToggle = () => {
    setIsRegister(!isRegister);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className={`container ${isRegister ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <Google />
            </a>
            <a href="#" className="icon">
              <Facebook />
            </a>
            <a href="#" className="icon">
              <GitHub />
            </a>
            <a href="#" className="icon">
              <LinkedIn />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={load}>
            {load ? "Registering..." : "Sign Up"}
          </button>
          {error && <p className="error">{error.message || error}</p>}
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <Google />
            </a>
            <a href="#" className="icon">
              <Facebook />
            </a>
            <a href="#" className="icon">
              <GitHub />
            </a>
            <a href="#" className="icon">
              <LinkedIn />
            </a>
          </div>
          <span>or use your email and password</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">Forget Your Password?</a>
          <button type="submit" disabled={load}>
            {load ? "Logging In..." : "Sign In"}
          </button>
          {error && <p className="error">{error.message || error}</p>}
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features.</p>
            <button className="hidden" onClick={handleToggle}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features.</p>
            <button className="hidden" onClick={handleToggle}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
