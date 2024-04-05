import React, { useState } from "react";
import Dashboard from "../../components/Dashboard";
import Teacherlist from "../../components/Teacherlist";
import { Input, Space, Flex, Button, Select, Modal, Form } from "antd";
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
  //! Modal start
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => {
    setIsModalOpen(true);
  };

  //& Modal form start
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //& Modal form end
  //! Modal end
  return (
    <Dashboard>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
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
        <Button onClick={handleClick} type="primary">
          Add a teacher
        </Button>
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
