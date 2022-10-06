import React from "react";
import "./home.css";
import Imagge from "../../images/Imagge.svg";
import Bincoin from "../../images/Bincoin.svg";
import Naira from "../../images/Naira.svg";

export const HomeComponent = () => {
  return (
    <div>
      <div className="dashboardContainer">
        <div className="money-header" style={{marginTop: '-35px'}}>
          <div className="money-bin">
            <img src={Bincoin} alt="" />
            <div className="details">
              <p>BinCoin</p>
              <b>BC 2,500</b>
            </div>
          </div>
          <div className="money-bin">
            <img src={Naira} alt="" />
            <div className="details">
              <p>Naira</p>
              <b>N 250</b>
            </div>
          </div>
        </div>
        <div className="title-bar" style={{marginTop: '-5px'}}>
          <div className="t-img">
            <img
              style={{ height: "8rem", paddingBottom: "" }}
              src={Imagge}
              alt="img"
            />
          </div>
          <div className="t-text">
            <h1>Yay, Keep it up!</h1>
            <p>
              You have trashed <br />
              <b>600 kg</b> of plastic waste
            </p>
          </div>
        </div>
        <div
          className="history"
          style={{
            display: "flex",
            justifyItem: "right",
            alignItem: "right",
            height: "50%",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyItem: "right!important",
              alignItem: "right!important",
              height: "40px",
              color: '#39561A',
              marginLeft: "220px",
              fontSize: "22px",
              fontWeight: "600",
              paddingTop: "15px",
            }}
          >
            Recent History :
          </h1>
          <div className="withdraw">
            <div className="wd-cover">
              <h1>WD</h1>
            </div>
            <div className="wd-content">
              <b>Withdraw</b>
              <p>
                You just withdrawed <b>BC 4,000</b> which is worth <b>N400</b> from your wallet
              </p>
            </div>
          </div>
          <hr />
          <div className="withdraw">
            <div className="wd-cover">
              <h1>TR</h1>
            </div>
            <div className="wd-content">
              <b>Trashed</b>
              <p>
                You just withdrawed <b>BC 4,000</b> which is worth <b>N400</b>{" "}
                from your wallet
              </p>
            </div>
          </div>
          <hr />
          <div className="withdraw">
            <div className="wd-cover">
              <h1>TR</h1>
            </div>
            <div className="wd-content">
              <b>Transferred</b>
              <p>
                You just transferred <b>BC 4,000</b> to <b>08012345678</b>, your
                balance is<b>N400</b>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
