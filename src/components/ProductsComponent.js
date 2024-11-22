import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from "../redux/Actions/ProductActions";

const ProductsComponent = () => {
  const dispatch = useDispatch();
  const { products, currentProduct, load, error } = useSelector(
    (state) => state.products
  );

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    imgURL: "",
  });

  const [updateDetails, setUpdateDetails] = useState({
    id: "",
    price: "",
  });

  useEffect(() => {
    // Fetch all products when the component mounts
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setNewProduct({ name: "", price: "", description: "", imgURL: "" });
  };

  const handleUpdateProduct = () => {
    dispatch(updateProduct(updateDetails.id, { price: updateDetails.price }));
    setUpdateDetails({ id: "", price: "" });
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleGetProductById = (id) => {
    dispatch(getProductById(id));
  };

  return (
    <div>
      <h1>Products Management</h1>
      {load && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.msg}</p>}

      <h2>All Products</h2>
      {products &&
        products.map((product) => (
          <div key={product._id}>
            <p>
              <strong>{product.name}</strong> - ${product.price}
            </p>
            <button onClick={() => handleGetProductById(product._id)}>
              View Details
            </button>
            <button onClick={() => handleDeleteProduct(product._id)}>
              Delete
            </button>
          </div>
        ))}

      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Description"
        value={newProduct.description}
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newProduct.imgURL}
        onChange={(e) =>
          setNewProduct({ ...newProduct, imgURL: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>

      <h2>Update Product</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={updateDetails.id}
        onChange={(e) =>
          setUpdateDetails({ ...updateDetails, id: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="New Price"
        value={updateDetails.price}
        onChange={(e) =>
          setUpdateDetails({ ...updateDetails, price: e.target.value })
        }
      />
      <button onClick={handleUpdateProduct}>Update Product</button>

      {currentProduct && (
        <div>
          <h3>Product Details</h3>
          <p>
            <strong>{currentProduct.name}</strong> - ${currentProduct.price}
          </p>
          <p>{currentProduct.description}</p>
          <img src={currentProduct.imgURL} alt={currentProduct.name} />
        </div>
      )}
    </div>
  );
};

export default ProductsComponent;
