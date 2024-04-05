import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useUsers } from "../context/ContextProvider";

const Teacherlist = () => {
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
      title: "Level",
      dataIndex: "level",
    },
    {
      title: "Groups",
      dataIndex: "groups",
    },
    {
      title: "Actions",
      dataIndex: "actions",
    },
  ];

  const { teachers, delTeacher } = useUsers();
  const Handleclick = (id) => {
    delTeacher(id);
  };

  const data = teachers.map(
    ({ id, firstname, lastname, level, groups }, index) => {
      return {
        key: index,
        index: index + 1,
        firstname: firstname,
        lastname: lastname,
        level: level,
        groups: groups.join(","),
        actions: (
          <div>
            <Button>Edit</Button>{" "}
            <Button type="primary" danger onClick={() => Handleclick(id)}>Delete</Button>
          </div>
        ),
      };
    }
  );
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
export default Teacherlist;
