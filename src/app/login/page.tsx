"use client";
import { Button, Form, Input, Col, Row } from "antd";
import React, { useState } from "react";
import type { FormProps } from "antd";
import styles from "./styles.module.scss";
import { postLogin } from "../_api/AuthService";
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
  const [loading, setLoading] = useState<boolean>(false);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    (async () => {
      setLoading(true);
      const res = await postLogin(values);
      if (res.status === 200) {
        localStorage.setItem("authUser", res.data);
        router.push("/");
        setLoading(false);
      } else {
        toast.error("password incorrect");
        setLoading(false);
      }
    })();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  return (
    <>
      {loading && <Loading />}
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
              <Input placeholder="username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input placeholder="password" />
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
    </>
  );
};

export default Login;
