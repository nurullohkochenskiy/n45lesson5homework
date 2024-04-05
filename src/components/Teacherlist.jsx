import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useUsers } from "../context/UsersProvider";

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
  ];


  const {teachers} = useUsers();

  const data = teachers.map(({ firstname, lastname, level, groups }, index) => {
    return {
      key: index,
      index: index + 1,
      firstname: firstname,
      lastname: lastname,
      level: level,
      groups: groups.join(",") ,
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
export default Teacherlist;
