import React from "react";
import { AuthLayout } from "../../layout/authLayout";
import SignupForm from "./SignupForm";
import { LeftCircleOutlined } from "@ant-design/icons";

export const SignUp = () => {
  return (
    <AuthLayout
      headerTitle="Sign Up"
      icon={<LeftCircleOutlined />}
      main={<SignupForm />}
    ></AuthLayout>
  );
};
