import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/Actions/ProductActions"; // Adjust the path as necessary
import { addToCart } from "../../redux/Actions/CartActions"; // Action to handle adding items to the cart
import "./Single.scss";
import basket from "../../assets/basket.png";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";

const Single = () => {
  const { _id } = useParams(); // Extract the product ID from the URL
  const dispatch = useDispatch();

  // Access product state from Redux
  const { currentProduct, load, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductById(_id)); // Fetch product by ID when the component mounts
  }, [_id, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct));
  };

  if (load) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || "Product not found"}</div>;
  if (!currentProduct) return <div>No product found</div>;

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="single">
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={basket} alt="basket" />
            <img src={basket} alt="basket" />
            <img src={basket} alt="basket" />
            <img src={basket} alt="basket" />
          </div>
          <div className="productdisplay-img">
            <img src={basket} alt="basket" />
          </div>
        </div>

        <div className="productdisplay-right">
          <h1>{currentProduct.name}</h1>
          <div className="productdisplay-right-star">
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarHalfOutlinedIcon />
            <StarBorderOutlinedIcon />
            <p>{100 + randomNumber}</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ${((currentProduct.price || 0) + 20).toFixed(2)}
            </div>
            <div className="productdisplay-right-price-new">
              ${currentProduct.price}
            </div>
          </div>
          <div className="productdisplay-right-description">
            {currentProduct.description}
          </div>
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>
      <div className="review-section">
        <EngineeringOutlinedIcon />
        <span>Reviews section will be added soon</span>
      </div>
    </div>
  );
};

export default Single;
