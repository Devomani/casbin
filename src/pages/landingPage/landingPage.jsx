import React from "react";
import "./style.css";
import logo from "../../images/logo.svg";
import { ArrowRightOutlined } from "@ant-design/icons"

export const LandingPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#39561A" }}>
      <div className="header_landing">
        <img src={logo} alt="logo" width={"70%"} />
      </div>
      <div
        style={{
          backgroundColor: "#39561A",
          height: "40%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{color: "white",fontSize: 20,marginTop: 10}}>Trash &nbsp;| &nbsp;Earn &nbsp;|&nbsp; Rewards </p>

        <a
          href={"/login"}
          style={{
            outline: "1px solid white",
            backgroundColor: "#39561A",
            padding: 30,
            borderRadius: "9px",
            color: "white",
            width: "80%",
            margin: "auto 0",
            textAlign: "center",
          }}
        >
          Get Started &nbsp;<ArrowRightOutlined />
        </a>
      </div>
    </div>
  );
};
