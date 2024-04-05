import React from "react";
import Dashboard from "../../components/Dashboard";
import { Flex, Typography } from "antd";
import { useAuth } from "../../components/Auth";
const Main = () => {
  const { user } = useAuth();
  return (
    <Dashboard>
      <Typography.Title style={{ color: "white" }} level={4}>
        Weclome {user.username}
      </Typography.Title>
      
    </Dashboard>
  );
};

export default Main;
