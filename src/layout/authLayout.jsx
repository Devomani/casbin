import React from "react";
import "./style.css";

export const AuthLayout = (props) => {
  return (
    <div className="container"  style={{overflow: "auto"}}>
      <header>
        <div className="header-wrapper">
          <div
            className="header-title"
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            {props.icon}
            {" "}
            <h1
              style={{ color: "white", fontWeight: 500, textAlign: "center" }}
            >
              {props.headerTitle}
            </h1>
          </div>
        </div>
      </header>
      <main
        style={{padding: 30,overflow: "auto"}}
      >
        {props.main}
      </main>
    </div>
  );
};
