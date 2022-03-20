import {
  faGasPump,
  faChartRadar,
  faGear,
  faGears,
  faGem,
  faMessage,
  faMoneyCheckDollar,
  faRotateRight,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "./MainLayout.css";

import Settings from "../SVG/Settings.svg";
import Task from "./../SVG/Task.svg";
import Home from "../SVG/Home.svg";
import { CryptoState } from "../CryptoContext";

export default function MainLayout({ Component, ...props }) {
  const sideBarLinks = [
    {
      link: "/",
      name: "Home",
      svg: Home,
    },
    {
      link: "/coin",
      name: "Coins",
      svg: Task,
    },
    {
      link: "/coin/:id",
      name: "Coin Page",
      svg: Settings,
    },
    {
      link: "/news",
      name: "News",
      svg: Settings,
    },
  ];

  const{ currency, setCurrency }= CryptoState()

  return (
    <>
      <div className="MainScreen">
        <div className="Sidebar">
         <h5>Trackeristic</h5>
          <ul className="SidebarList">
            {sideBarLinks.map((link) => {
              return (
                <li
                  className={
                    window.location.pathname === link.link ? "active" : ""
                  }
                  key={link.link}
                >
                  <Link to={link.link}>
                    {" "}
                    <img src={link.svg} /> {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="SidebarList"  >
            <Form.Select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
              <option value='USD'>USD  </option>
              <option value='PKR'>PKR</option>
            </Form.Select>
          </div>
         
        </div>
        <div className="MainScreenContainer">
          <Component {...props} />
          <Footer />
        </div>
      </div>
    </>
  );
}

// <div className="SidebarGasInfo">
// <span className="LastBlockMineInfo">Last Block: </span>
// <button className="LastBlockMineButton">
//   <FontAwesomeIcon icon={faRotateRight} />
// </button>
// <div className="SidebarGasInfoCard">
//   <div className="SidebarGasInfoHeader">
//     <span className="SidebarGasInfoHeaderTitle">Gas Monitor</span>
//     <span className="SidebarGasInfoHeaderIcon">
//       <FontAwesomeIcon icon={faGasPump} />
//     </span>
//   </div>
//   <div className="SidebarGasInfoBody">
//     <p>Base Fee: </p>
//     <p>Rapid Fee: </p>
//   </div>
// </div>
// </div>