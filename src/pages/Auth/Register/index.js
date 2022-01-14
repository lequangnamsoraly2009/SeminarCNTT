import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./register.css";

function RegisterPage() {
  return (
    <div className="container-fluid">
      <div className="register-container">
        <h1>Welcome to Family Tree - Register</h1>
        <Form
          name="normal_register"
          className="register-form-container"
          //   onFinish={handleSubmit}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="passwordConfirmation"
            rules={[
              { required: true, message: "Please confirm your Password!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password Confirmation"
              //   onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="register-form-button">
              Register
            </Button>
          </Form.Item>
          <Link className="register-form-forgot" to="/login">
            Already have an account?
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
