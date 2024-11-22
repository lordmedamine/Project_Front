import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllOrders } from "../../redux/Actions/OrdersActions"; // Assuming you have a `getOrders` action.

const orderColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "user", headerName: "User", width: 130 },
  { field: "total", headerName: "Total Price", type: "number", width: 130 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "date", headerName: "Order Date", width: 160 },
];

const paginationModel = { page: 0, pageSize: 5 };

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state: any) => state.orders);

  useEffect(() => {
    dispatch(getAllOrders()); // Fetch orders when the component mounts.
  }, [dispatch]);

  const rows =
    orders?.map((order: any, index: number) => ({
      id: order._id || index,
      user: order.user?.username || "Guest", // Assuming `user` is a populated field.
      total: order.total,
      status: order.status,
      date: new Date(order.date).toLocaleDateString(), // Format the date.
    })) || [];

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={orderColumns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default OrdersTable;
