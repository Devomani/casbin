import React, { useEffect, useState } from "react";
import "./style.css";
import { BellOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Image, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Gift from "../images/Gift.svg";
import Waste from "../images/Waste.svg";
import Home from "../images/Home.svg";
import Arrow from "../images/BackArrow.svg";
// import { HomeComponent } from "../pages/home/home";
import { useNavigate } from "react-router-dom";

export const Layout = (props) => {
  const [visible, setvisible] = useState(false);
  const [UserData, setUserData] = useState();
  const history = useNavigate();

  const userName = () => {
    const data = JSON.parse(sessionStorage.getItem("loginDetails"));
    setUserData(data);
  };

  const showDrawer = () => {
    setvisible(true);
  };

  const closeDrawer = () => {
    setvisible(false);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("loginDetails")) {
      window.location.href = "/login";
    }
    userName();
  }, []);

  const List = [
    {
      name: "Account",
      url: "/",
      key: "1"
    },
    {
      name: "Profile",
      url: "/profle",
      key:"2"
    },
    {
      name: "Contact Us",
      url: "/contact-us",
      key:"3"
    },
    {
      name: "Logout",
      url: "",
      key:"4"
    },
  ]
  const Logout = () => {
    sessionStorage.clear()
    window.location.href = "/login"
  }

  return (
    <div className="container">
      <header>
        <div className="header-wrapper">
          {props.headerTitle === "Dashboard" ? (
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                marginBottom: "10px",
              }}
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="logo"
            />
          ) : (
            <img src={Arrow} alt="" onClick={() => history(-1)} />
          )}
          <h1 style={{ color: "white", fontWeight: 500 }}>
            {props.headerTitle}
          </h1>
          <Link to="/notification" style={{ color: "white" }}>
            {" "}
            <BellOutlined style={{ fontSize: 30 }} />
          </Link>
        </div>
      </header>
      <main style={{ overflowY: "auto" }}>{props.main}</main>
      <footer>
        <Drawer
          placement="right"
          closable={false}
          onClose={closeDrawer}
          visible={visible}
          width="70%"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30

            }}
          >
            <img
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                marginBottom: "10px",
              }}
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
            <h1 style={{ marginBottom: -5, color: "#ffffff" }}>
              {UserData?.fullName}
            </h1>
            <p style={{ marginBottom: 2, color: "#ffffff" }}>
              {UserData?.email}
            </p>
            <p style={{ color: "#ffffff" }}>{UserData?.phoneNo}</p>
          </div>
          <hr style={{margin:"0 auto",width:"inherit"}}/>
          <Row
            style={{
              display: "flex",
              marginTop: "3rem",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           {
            List.map(item => 
              <>
                <Col span={24} style={{padding:"50px"}}>
                  {
                    item.name === "Logout" ? <Button onClick={Logout} type="link" style={{color:"white", fontSize: '25px'}}>{item.name}</Button> :
                <Link to={item.url} style={{color:"white", fontSize: '25px'}}>{item.name}</Link>
                  }

                </Col>
                <hr style={{margin:"0 auto",width:"inherit"}} />
              </>
              )
           }
          </Row>
        </Drawer>
        <ul>
          <Link to="/dashboard" style={{ color: "white" }}>
            <li>
              {" "}
              <img src={Home} alt="" /> Home{" "}
            </li>
          </Link>
          <Link to="/trash" style={{ color: "white" }}>
            <li>
              {" "}
              <img src={Waste} alt="" /> Trash
            </li>
          </Link>
          <Link to="/earn" style={{ color: "white" }}>
            {" "}
            <li>
              <img src={Gift} alt="" /> Earn
            </li>
          </Link>
          <Button
            type="link"
            onClick={showDrawer}
            style={{ color: "white", fontSize: "16" }}
          >
            <li style={{ fontSize: "30" }}>
              <MenuOutlined style={{ fontSize: "30px", marginTop: "-18px" }} />{" "}
              <p style={{ fontSize: "16px" }}>More</p>
            </li>{" "}
          </Button>
        </ul>
      </footer>
    </div>
  );
};
