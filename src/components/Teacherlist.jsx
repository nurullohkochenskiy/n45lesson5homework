import React, { useEffect, useState } from "react";
import { Table } from "antd";

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


  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/teachers")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const data = users.map(({ firstname, lastname, level, groups }, index) => {
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
