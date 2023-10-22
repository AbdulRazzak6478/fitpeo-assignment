import React from "react";
import "./styles/LeftBoard.css";
import { RiSettingsLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
import { BiSolidUserPin, BiSolidUserRectangle } from "react-icons/bi";
import { PiUniteSquareFill, PiSubtractSquareFill } from "react-icons/pi";
import { FaDashcube, FaAngleDown } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
const LeftBoard = ({isMenu}) => {
  const list_obj = ["Product", "Customer", "Income"];
  return (
    <>
      <div className={`left-board ${ isMenu ? '':'menu-bar'}`}>
        <div className="top">
          <div className="dash">
            <RiSettingsLine fontSize={"25px"} />
            <p>Dashboard</p>
          </div>
          <ul>
            <li className="item active">
              <div className="one">
                <FaDashcube />
                <p>Dashboard</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className="item">
              <div className="one">
                <PiUniteSquareFill />
                <p>Product</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className="item">
              <div className="one">
                <BiSolidUserPin />
                <p>Customers</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className="item">
              <div className="one">
                <FaHeadset />
                <p>Income</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className="item">
              <div className="one">
                <CiDiscount1 />
                <p>Promote</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className="item">
              <div className="one">
                <MdOutlineLiveHelp />
                <p>Help</p>
              </div>
              <AiOutlineRight />
            </li>
          </ul>
          </div>
          <div className="profile account">
                <div className="two">
                    <BiSolidUserRectangle />
                    <div className="user">
                        <p>Evana</p>
                        <p className="role">Project Manager</p>
                    </div>
               </div>
              <div className="drop">
                <FaAngleDown />
              </div>
          </div>
      </div>
    </>
  );
};

const Item = (icon, text) => {
  return (
    <>
      <div className="item">
        <div className="both">
          {/* <icon /> */}
          <div className="">{text}</div>
        </div>
        <AiOutlineRight />
      </div>
    </>
  );
};

export default LeftBoard;
