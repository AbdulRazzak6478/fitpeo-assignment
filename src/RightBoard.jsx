import React from "react";
import "./styles/RightBoard.css";
import Search from "./components/Search";
import { PiHandWavingDuotone } from 'react-icons/pi'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import Tokens from "./components/Tokens";
import Analyse from "./components/Analyse";
import ProductSell from "./components/ProductSell"
const RightBoard = ({isMenu, setIsMenu}) => {
  function click()
  {
    setIsMenu(!isMenu);
  }
  return (
    <>
      <div className="right-board">
        <div className="menu" onClick={click}> { isMenu ? <AiOutlineMenu className="main" fontSize={'40px'} /> : <CgClose fontSize={'40px'} />}</div>
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
