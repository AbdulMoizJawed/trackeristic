// import React from 'react'
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddWallet from "./../../SVG/AddWallet.svg";
import Key from "./../../SVG/Key.svg";
import Refresh from "./../../SVG/Refresh.svg";
import Edit from "./../../SVG/Edit.svg";
import Upload from "./../../SVG/Upload.svg";
import Delete from "./../../SVG/Delete.svg";



import "./Home.css";
import {
  faArrowRightArrowLeft,
  faKey,
  faPen,
  faPlus,
  faRotateLeft,
  faTrashCan,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="Container d-flex justify-content-around align-items-center flex-column homeContainer">
      <div className="heading  text-center my-2">
        <h1>TRACKERISTIC</h1>
      </div>
      <div className="">
        <Carousel />
      </div>
    </div>
  );
}
