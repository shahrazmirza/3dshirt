import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const CustomButton = ({ title, handleClick }) => {
  return (
    <button
      className={`btn bg-amber-300 hover:bg-amber-400`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
