import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Flex, Button, Menu } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Teachers", "1", <UsergroupAddOutlined />, "/teachers"),
  getItem("Students", "2", <UsergroupAddOutlined />, "/students"),
];

const Dashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const { user } = useAuth();
  
  return (
    <>
      <Flex justify="space-between">
        <div
          style={{
            width: 256,
          }}
        >
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
          >
            {items.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={`/${item.label}`}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>

        <Link
          to={"/profile"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button type="primary">
            <Typography style={{ color: "white" }} level={4}>
              <UserOutlined /> {user.username}
            </Typography>
          </Button>
        </Link>
      </Flex>
      
      <Flex justify="center">{children}</Flex>
     
    </>
  );
};

export default Dashboard;

