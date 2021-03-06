import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./login.css";
import { login } from "../../../app/userSlice";

function LoginPage() {
  const fakeUserLogin = {
    username: "user1",
    password: "123456",
    remember: true,
    myTree: [
      {
        nameTreeFamily: "Gia Phả Họ Phan",
        id: "TF-1",
        data: {
          id: "root-2",
          name: "ROOT",
          children: [
            {
              id: "test-id-8",
              name: "Phan Đế",
              birthday: "1970-02-06T16:00:00.000Z",
              dataHealth: {
                blood: "A",
                diseaseTreatment: "Không",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 52,
                Sex: "Male",
                Relationship: "Chủ Hộ",
              },
              children: [
                {
                  id: "test-id-17",
                  name: "Lê Thị Hai",
                  birthday: "1972-08-08T16:00:00.000Z",
                  dataHealth: {
                    blood: "B",
                  },
                  attributes: {
                    Age: 50,
                    Sex: "Female",
                    Relationship: "Vợ",
                  },
                },
                {
                  id: "test-id-21",
                  name: "Phan Thị Hạnh",
                  birthday: "1991-03-05T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                    diseaseTreatment: "Covid-19",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 31,
                    Sex: "Female",
                    Relationship: "Con",
                  },
                  children: [
                    {
                      id: "test-id-42",
                      name: "Nguyễn Phúc",
                      birthday: "1990-01-17T17:00:00.000Z",
                      dataHealth: {
                        blood: "O",
                      },
                      attributes: {
                        Age: 32,
                        Sex: "Male",
                        Relationship: "Chồng",
                      },
                    },
                    {
                      id: "test-id-46",
                      name: "Nguyễn Giang",
                      birthday: "2019-01-17T17:00:00.000Z",
                      dataHealth: {
                        blood: "O",
                        diseaseTreatment: "Không",
                        diseaseCured: "Không",
                      },
                      attributes: {
                        Age: 3,
                        Sex: "Male",
                        Relationship: "Con",
                      },
                      children: [],
                    },
                  ],
                },
                {
                  id: "test-id-27",
                  name: "Phan Công Điền",
                  birthday: "1991-03-05T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                    diseaseTreatment: "Sỏi Thận",
                    diseaseCured: "Viêm Gan B",
                  },
                  attributes: {
                    Age: 29,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [
                    {
                      id: "test-id-55",
                      name: "Lê Thị Viên",
                      birthday: "1996-01-10T17:00:00.000Z",
                      dataHealth: {
                        blood: "AB",
                      },
                      attributes: {
                        Age: 26,
                        Sex: "Female",
                        Relationship: "Vợ",
                      },
                    },
                    {
                      id: "test-id-59",
                      name: "Phan Công Cán",
                      birthday: "2020-09-08T17:00:00.000Z",
                      dataHealth: {
                        blood: "A",
                        diseaseTreatment: "Không",
                        diseaseCured: "Không",
                      },
                      attributes: {
                        Age: 2,
                        Sex: "Male",
                        Relationship: "Con",
                      },
                      children: [],
                    },
                  ],
                },
                {
                  id: "test-id-33",
                  name: "Phan Công Tam",
                  birthday: "1998-03-18T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                    diseaseTreatment: "Viêm Gan B",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 24,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
              ],
            },
          ],
        },
      },
    ],
  };

  const dispatch = useDispatch();

  const history = useNavigate();

  const onSubmitLogin = (values) => {
    if (
      values.username === fakeUserLogin.username &&
      values.password === fakeUserLogin.password
    ) {
      dispatch(login(fakeUserLogin));
      history("/");
    }
  };

  return (
    <div className="container-fluid">
      <div className="login-container">
        <h1>Welcome Back - Login </h1>
        <div className="login-form-container">
          <Form
            name="normal_login"
            className="login-form"
            onFinish={onSubmitLogin}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me!</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" className="login-form-button">
                Login
              </Button>
            </Form.Item>
            <a className="login-form-forgot" href="/">
              I forgot my password
            </a>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
