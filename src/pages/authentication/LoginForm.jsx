import React, { useState } from "react";
import { Form, Button, Input, Row, Col } from "antd";
import google from "../../images/google.svg";
import facebook from "../../images/Facebook.svg";
import apple from "../../images/apple.svg";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    const [showForgetPassword, setShowForgetPassword] = useState(false)

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <button
          style={{
            backgroundColor: "rgba(153, 204, 99, 0.4)",
            borderRadius: "9px",
            padding: 30,
            border: "none",
          }}
        >
          <img src={google} alt="google-logo" /> Sign in with google
        </button>
        <img
          src={facebook}
          alt="facebook-imag"
          width={50}
          height={85}
          style={{
            backgroundColor: "#F2F2F2",
            padding: "30px 10px",
            borderRadius: "9px",
          }}
        />
        <img
          src={apple}
          alt="apple-imag"
          width={50}
          height={85}
          style={{
            backgroundColor: "#F2F2F2",
            padding: "30px 10px",
            borderRadius: "9px",
          }}
        />
      </div>
      {
        showForgetPassword ? 
        <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        autoComplete="off"
      >
        <Row style={{ height: "100%", width: "100%", marginTop: 30 }}>
            <p style={{textAlign: "center",width: "100%"}}>Forget Password</p>
          <Col style={{ width: "100%" }} className="gutter-row">
            <Form.Item
              label="Enter Email Address"
              name=""
              rules={[
                {
                  required: true,
                  message: "Please input your email address!",
                },
              ]}
            >
              <Input
                style={{
                  borderRadius: "9px",
                  padding: "30px 10px",
                  borderColor: "#5C872E",
                }}
                placeholder="Email address"
              />
            </Form.Item>
          </Col>
          <Col style={{ width: "100%" }} className="gutter-row">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#39561A",
                  padding: "30px",
                  borderRadius: "9px",
                  border: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form> :

      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        autoComplete="off"
      >
        <Row style={{ height: "100%", width: "100%", marginTop: 30 }}>
          <Col style={{ width: "100%" }} className="gutter-row">
            <Form.Item
              label="Phone number or email address"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number or email address!",
                },
              ]}
            >
              <Input
                style={{
                  borderRadius: "9px",
                  padding: "30px 10px",
                  borderColor: "#5C872E",
                }}
                placeholder="Phone number or email address"
              />
            </Form.Item>
          </Col>
          <Col style={{ width: "100%" }} className="gutter-row">
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
              <Input.Password
                style={{
                  borderRadius: "9px",
                  padding: "30px 10px",
                  borderColor: "#5C872E",
                }}
                placeholder="Phone number or email address"
              />
            </Form.Item>
          </Col>
          <Col style={{ width: "100%" }}>
            <p onClick={() => setShowForgetPassword(!showForgetPassword)} style={{ color: "#5C872E", textAlign: "right" }}>
              Forget password
            </p>
          </Col>
          <Col style={{ width: "100%" }} className="gutter-row">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#39561A",
                  padding: "30px",
                  borderRadius: "9px",
                  border: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      }
      
      <div>
        <p style={{textAlign: "center"}}>No Account?&nbsp;&nbsp;&nbsp; <Link to={"/signup"} style={{color: "#39561A"}}>Sign up</Link></p>
      </div>
    </>
  );
};
