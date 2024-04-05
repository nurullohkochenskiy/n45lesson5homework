import React from "react";
import Dashboard from "../../components/Dashboard";
import Teacherlist from "../../components/Teacherlist";
import { Input, Space, Flex, Button, Select } from "antd";
import { useUsers } from "../../context/ContextProvider";
const { Search } = Input;
const Teachers = () => {
  // const onSearch = (value, _e) => console.log(value, _e);
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const { setInpValTeacher } = useUsers();
  const handleSearch = (e) => {
    setInpValTeacher(e.target.value);
  };
  return (
    <Dashboard>
      <Flex
        style={{
          width: 1240,
          marginTop: 20,
        }}
        justify="space-between"
      >
        <Search
          placeholder="input search text"
          // onSearch={onSearch}
          onChange={handleSearch}
          style={{
            width: 200,
          }}
        />
        <Button type="primary">Add a teacher</Button>
        <div>
          <Space
            style={{
              width: 150,
            }}
            direction="vertical"
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Filter level"
              // defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Filter group"
              // defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          </Space>
        </div>
      </Flex>
      <Teacherlist />
    </Dashboard>
  );
};

export default Teachers;
