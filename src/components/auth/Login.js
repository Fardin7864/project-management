"use client";
import React, { useEffect, useState } from "react";
import MainContainer from "../container/MainContainer";
import { Button, Checkbox, Form, Input } from "antd";
import { useBearStore } from "@/stors/userStor";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

const Login = () => {
  const { setUser } = useBearStore();
  const router = useRouter();
  const updateUser = (data) => {
    
    setUser(data);
  };
  const onFinish = (values) => {
    console.log(values)
    if(values.username === "admin@mail.com" && values.password === "admin")
    {
      updateUser(values)
      toast.success('Successfully Logged in!')
      router.push("/dashboard")
    }
  };

  return (
    <MainContainer>
      <div className=" flex flex-col justify-center items-center w-screen h-screen  mt-5">
      <div className="xl:w-[33%] my-auto lg:w-1/2 md:w-3/4 w-full md:mx-auto flex flex-col shadow-xl lg:p-10 md:p-10 p-4 xl:py-5 xl:pt-7 rounded-3xl bg-white  mt-0">
        <h1 className="text-center text-3xl font-bold mb-10">Login</h1>
        <div className=" text-sm my-2">
          <p>Email: admin@mail.com</p>
          <p>Pass: admin</p>
        </div>
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
      </div>
    </MainContainer>
  );
};

export default Login;
