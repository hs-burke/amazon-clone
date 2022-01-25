import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./SubHeader.css";

function SubHeader() {
  return (
    <div className="subHeader">
      <div className="subHeader__optionLocation">
        <div className="subHeader__optionLogo">
          <LocationOnIcon />
        </div>
        <div className="subHeader__optionLogoText">
          <span className="subHeader__optionLineOne">Deliver To</span>
          <span className="subHeader__optionLineTwo">Westport</span>
        </div>
      </div>
      <div className="subHeader__option">
        <span>Amazon Basics</span>
      </div>
      <div className="subHeader__option">
        <span>Today's Deals</span>
      </div>
      <div className="subHeader__option">
        <span>Find a Gift</span>
      </div>
    </div>
  );
}

export default SubHeader;
