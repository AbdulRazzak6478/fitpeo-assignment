import React from "react";
import "./styles/RightBoard.css";
import Search from "./components/Search";
import { PiHandWavingDuotone } from 'react-icons/pi'
import Tokens from "./components/Tokens";
import Analyse from "./components/Analyse";
import ProductSell from "./components/ProductSell";
const RightBoard = () => {
  return (
    <>
      <div className="right-board">
        <div className="box">
            <div className="head">
                <p>Hello Shahrukh < PiHandWavingDuotone /></p>
                <Search />
            </div>
            <Tokens />
            <Analyse />
            <ProductSell />
        </div>
      </div>
    </>
  );
};

export default RightBoard;
