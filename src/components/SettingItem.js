import React from "react";

const SettingItem = ({
  itemName,
  value,
  handleDecrementClick,
  handleIncrementClick
}) => (
  <div id={itemName} className="settings-block">
    <div id={`${itemName}-label`} className="settings-label">
      {itemName} length
    </div>
    <div className="settings">
      <div
        id={`${itemName}-decrement`}
        className="settings-button"
        onClick={handleDecrementClick}
      >
        -
      </div>
      <div id={`${itemName}-length`} className="settings-value" value={value}>
        {value}
      </div>
      <div
        id={`${itemName}-increment`}
        className="settings-button"
        onClick={handleIncrementClick}
      >
        +
      </div>
    </div>
  </div>
);

export default SettingItem;
