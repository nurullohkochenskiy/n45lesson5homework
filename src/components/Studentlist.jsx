import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
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
    {
      title: "Actions",
      dataIndex: "actions",
    },
  ];


  const {students,delStudent} = useUsers();
  const Handleclick = (id) => {
    delStudent(id);
  };
  const data = students.map(({id, firstname, lastname,  group }, index) => {
    return {
      key: index,
      index: index + 1,
      firstname: firstname,
      lastname: lastname,
      group: group ,
      actions: (
        <div>
          <Button>Edit</Button>{" "}
          <Button type="primary" danger onClick={() => Handleclick(id)}>Delete</Button>
        </div>
      ),
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