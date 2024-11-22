/* import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Pages/list/List";
import Home from "./Pages/home/Home";
import New from "./Pages/new/New";
import Single from "./Pages/single/Single";
import Login from "./components/LoginRegister/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/List" element={<List />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 */
import React from "react";
import Single from "./Pages/single/Single";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UserNavbar from "./components/UserNavbar/UserNavbar";
import Shop from "./components/Shop/Shop"; // Replace with actual Shop component
import Product from "./Pages/Product/Product"; // Replace with actual Product component
import Cart from "./components/Cart/Cart"; // Replace with actual Cart component
import LoginPage from "./Pages/Login/LoginPage";
import MainFooter from "./components/Main-Footer/MainFooter";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";

const App = () => {
  const location = useLocation();

  // Check if the current path is '/login', and if so, don't render the navbar
  const shouldRenderNavbar = location.pathname !== "/login";

  return (
    <div className="App">
      {shouldRenderNavbar && <UserNavbar />}

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:_id" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {shouldRenderNavbar && <MainFooter />}
    </div>
  );
};

export default App;
