import React from "react";
import "./List.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProductsTable from "../../components/tables/productstable";
import UsersTable from "../../components/tables/userstable";
import OrdersTable from "../../components/tables/orderstable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ProductsTable />
        <UsersTable />

        <OrdersTable />
      </div>
    </div>
  );
};

export default List;
