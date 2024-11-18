"use client";
import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import React from "react";
import type { FormProps } from "antd";
import styles from "./styles.module.scss";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const Login = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  return (
    <Row className={styles.loginForm}>
      <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
        <div>
          <span className={styles.textLogin}>Log In</span>
        </div>
        <Form
          form={form}
          style={{ maxWidth: 600, marginBottom: "3rem", marginTop: "3rem" }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <div>
            <span className={styles.forgot}>forgot your password?</span>
          </div>
          <Form.Item label={null}>
            <Button className={styles.btnSubmit} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <span className={styles.text}>Don't have a Buying Group account?</span>
        <a className={styles.text}>Register</a>
        <span className={styles.text}>Or continue in with</span>
      </Col>
      <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
        <div className={styles.boxImg}>
          <img src="https://buyinggroup.com/static/media/login.cef9be0d.png" />
        </div>
      </Col>
    </Row>
  );
};

export default Login;
