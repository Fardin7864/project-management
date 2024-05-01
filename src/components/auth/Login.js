"use client";
import React, { useState } from "react";
import MainContainer from "../container/MainContainer";
import { useForm, Controller } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const { handleSubmit, control, reset } = useForm();
  const [user, setUser] = useState();

  const handleLogin = (data) => {
    setUser(data);
  };

  return (
    <MainContainer>
      <div className="xl:w-[33%] my-auto lg:w-1/2 md:w-3/4 w-full md:mx-auto flex flex-col shadow-xl lg:p-10 md:p-10 p-4 xl:py-5 xl:pt-7 rounded-xl bg-white  mt-0">
        <h1 className="text-center text-3xl font-bold mb-10">Login</h1>
        <Form
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 12,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
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
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 1,
            }}
          >

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MainContainer>
  );
};

export default Login;
