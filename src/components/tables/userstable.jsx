import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/Actions/UserActions";

const userColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Username", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
  { field: "role", headerName: "Role", width: 100 },
];

const paginationModel = { page: 0, pageSize: 5 };

const UsersTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.user.users);

  useEffect(() => {
    dispatch(getAllUsers()); // Fetch users when the component mounts.
  }, [dispatch]);

  const rows =
    users?.map((user: any, index: number) => ({
      id: user._id || index,
      username: user.username,
      email: user.email,
      phone: user.phone,
      age: user.age,
      role: user.role,
    })) || [];

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={userColumns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default UsersTable;
