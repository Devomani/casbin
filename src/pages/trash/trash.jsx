import React from "react";
import "./trash.css";
import Bincoin from '../../images/Bincoin.svg'
import FormPix from '../../images/form-trash.svg'

export const TrashComponent = () => {
  return (
    <>
      <div className="container">
        <div className="input-field">
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Landmark" />
        </div>

        <div className="trashInput">
          <input type="text" placeholder="Trash Kg" />
          <div className="equal">=</div>
          <div className="money-bin">
              <img src={Bincoin} alt="" />
          </div>
        </div>
        <div className="submit">
          <img src={FormPix} alt="" />
          <button>Trash Now</button>
        </div>
      </div>
    </>
  );
};
