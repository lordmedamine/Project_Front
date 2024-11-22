import React from "react";
import "./Product.scss";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Item from "../../components/item/item"; // Import with capital 'I'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/Actions/ProductActions";

const Product = () => {
  const dispatch = useDispatch();
  const { products, currentProduct, load, error } = useSelector(
    (state) => state.products
  );
  return (
    <div className="products">
      <div className="products-page-hero">
        <h2>12 Hours 12 Mins</h2>
        <p>FLAT 50% OFF</p>
        <span>Dont Miss This Chance!</span>
      </div>

      <div className="shop-category">
        <div className="shopcategory-indexSort">
          <p>
            <span>showing 1 to 12</span>out of 36 products
          </p>

          <div className="shopcategory-sort">
            <button>
              Sort by <ArrowDropDownOutlinedIcon />
            </button>
          </div>
        </div>
        <div className="shopcategory-products">
          {products.map((product) => (
            <Item
              key={product._id}
              img={product.img}
              price={product.price}
              name={product.name}
              _id={product._id}
            />
          ))}
          {products.map((product) => (
            <Item
              key={product._id}
              img={product.img}
              price={product.price}
              name={product.name}
              _id={product._id}
            />
          ))}
          {products.map((product) => (
            <Item
              key={product.id}
              img={product.img}
              price={product.price}
              name={product.name}
            />
          ))}
        </div>

        <div className="shopcategory-loadmore">
          <button>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
