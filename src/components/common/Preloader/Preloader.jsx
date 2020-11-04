import React from "react";
import preloader from "../../../assets/img/preloader.svg";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
