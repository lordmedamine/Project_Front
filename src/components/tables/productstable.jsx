import "./Table.scss";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/Actions/ProductActions";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "imgURL", headerName: "Product img", width: 130 },
  { field: "name", headerName: "Product name", width: 130 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  {
    field: "description",
    headerName: "Description",
    width: 160,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products); // Adjust type if using TypeScript.

  useEffect(() => {
    dispatch(getProducts()); // Fetch products when the component mounts.
  }, [dispatch]);

  const rows =
    products?.map((product: any, index: number) => ({
      id: product._id || index, // Ensure a unique `id` for each row.
      imgURL: product.imgURL,
      name: product.name,
      price: product.price,
      description: product.description,
    })) || []; // Default to an empty array if products are undefined.

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default ProductsTable;
