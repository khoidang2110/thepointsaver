"use client";
import { Button, Form, Input, Col, Row } from "antd";
import React, { useState } from "react";
import type { FormProps } from "antd";
import styles from "./styles.module.scss";
import { postLogin } from "../_api/UnAuthService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loading from "../_components/Loading";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const Login = () => {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {};

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  return (
    <>
      <Row className={styles.loginForm} align="middle" justify="space-between">
        <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
          <div>
            <span className={styles.textLogin}>Register</span>
          </div>
          <Form
            form={form}
            style={{ maxWidth: 600, marginBottom: "3rem", marginTop: "3rem" }}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Business Name" name="businessName">
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item label={null}>
              <Button className={styles.btnSubmit} type="primary" htmlType="submit">
                Next
              </Button>
            </Form.Item>
          </Form>
          <span className={styles.text}>Already have an account?</span>
          <a className={styles.text}>Log in</a>
          <span className={styles.text}>Or continue in with</span>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
          <div className={styles.boxImg}>
            <img src="https://buyinggroup.com/static/media/login.cef9be0d.png" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
