import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useUsers } from "../context/UsersProvider";

const Studentlist = () => {
  const columns = [
    {
      title: "No_",
      dataIndex: "index",
      width: 150,
    },
    {
      title: "Firstname",
      dataIndex: "firstname",
      width: 150,
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      width: 150,
    },
    
    {
      title: "Group",
      dataIndex: "group",
    },
  ];


  const {students} = useUsers();

  const data = students.map(({ firstname, lastname,  group }, index) => {
    return {
      key: index,
      index: index + 1,
      firstname: firstname,
      lastname: lastname,
      group: group ,
    };
  });
  return (
    <Table
      className="container darkbg"

      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 5,
      }}
      scroll={{
        y: 240,
      }}
    />
  );
};
export default Studentlist;