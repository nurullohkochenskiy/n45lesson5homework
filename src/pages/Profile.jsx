import React from "react";
import Dashboard from "../components/Dashboard";
import { UserOutlined } from "@ant-design/icons";
import { Typography, Row, Button } from "antd";
import { useAuth } from "../components/Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Dashboard>
      <div className="mainContent" style={{ width: 400, height: 280 }}>
        <Row justify="center">
          <Typography
            style={{ fontSize: "24px", color: "white", marginTop: "30px" }}
            level={4}
          >
            <UserOutlined style={{ fontSize: "24px", marginRight: "8px" }} />{" "}
            Your profile
          </Typography>
        </Row>
        <Row justify="center">
          <Typography
            style={{ fontSize: "24px", color: "white", marginTop: "30px" }}
          >
            Username: {user.username}
          </Typography>
        </Row>
        <Row justify="center">
          <Typography
            style={{ fontSize: "24px", color: "white", marginTop: "15px" }}
          >
            Password: {user.password}
          </Typography>
        </Row>
        <Row style={{ marginTop: "30px" }} justify="center">
          <Button onClick={handleLogout} type="primary" danger ghost>
            Log out
          </Button>
        </Row>
      </div>
    </Dashboard>
  );
};

export default Profile;
