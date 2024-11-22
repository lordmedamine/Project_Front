import React, { useEffect } from "react";
import "./itemslist.scss";
import Item from "../item/item"; // Import with capital 'I'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/Actions/ProductActions";

const ItemsList = () => {
  const dispatch = useDispatch();
  const { products, currentProduct, load, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    // Fetch all products when the component mounts
    dispatch(getProducts());
  }, [dispatch]);

  // Get only the first 4 products
  const displayedProducts = products.slice(0, 4);

  return (
    <div className="itemslist">
      <h1>Most Popular</h1>
      <hr />
      <div className="items">
        {displayedProducts.map((product) => (
          <Item
            key={product._id}
            img={product.img}
            price={product.price}
            name={product.name}
            _id={product._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
