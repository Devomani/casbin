import React, { useState } from "react";
import { Form, Button, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";

//function for the signup Form
const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [checkData, setcheckData] = useState(false)

  const onFinish = (values) => {
    if (values !== undefined) {
      setLoading(false);
      localStorage.setItem("UserDetails", JSON.stringify(values));
      window.location.href = "/dashboard";
      setcheckData(true)
    }
  };

  return (
    <>
      <Form
        onFinish={onFinish}
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        autoComplete="off"
      >
        <Row style={{ height: "100%", width: "100%" }}>
          <Col style={{ width: "100%" }} className="gutter-row">
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input
                style={{
                  borderRadius: "9px",
                  padding: "20px 10px",
                  borderColor: "#5C872E",
                }}
                placeholder="Full name"
              />
            </Form.Item>
          </Col>

          <Col style={{ width: "100%" }} className="gutter-row">
            <Form.Item
              label="Phone No"
              name="phoneNo"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
              minLength={11}
              maxLength={11}
              // addonBefore="NGN(+234)"
              type="number"
                style={{
                  borderRadius: "9px",
                  padding: "20px 10px",
                  borderColor: "#5C872E",
                }}
                placeholder="09000000000"
              />
            </Form.Item>
          </Col>

          <Col style={{ width: "100%" }} className="gutter-row">
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                type="email"
                style={{
                  borderRadius: "9px",
                  padding: "20px 10px",
                  borderColor: "#5C872E",
                }}
                placeholder="example@gmail.com"
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
                minLength={8}
                style={{
                  borderRadius: "9px",
                  padding: "20px 10px",
                  borderColor: "#5C872E",
                }}
                placeholder="********"
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
                  padding: "40px",
                  borderRadius: "9px",
                  border: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                loading={loading}
                onClick={() => setLoading(checkData ? !loading : loading)}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div style={{ marginTop: -15, width: "100%" }}>
        <p style={{ textAlign: "center" }}>
          Already have an Account?&nbsp;&nbsp;&nbsp;{" "}
          <Link to={"/login"} style={{ color: "#39561A" }}>
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignupForm;
