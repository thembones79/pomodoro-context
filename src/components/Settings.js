import React from "react";
import SettingItem from "./SettingItem";

const Settings = ({
  breakLength,
  sessionLength,
  handleBreakDecrementClick,
  handleBreakIncrementClick,
  handleSessionDecrementClick,
  handleSessionIncrementClick
}) => (
  <div id="settings">
    <SettingItem
      itemName="session"
      value={sessionLength}
      handleDecrementClick={handleSessionDecrementClick}
      handleIncrementClick={handleSessionIncrementClick}
    />
    <SettingItem
      itemName="break"
      value={breakLength}
      handleDecrementClick={handleBreakDecrementClick}
      handleIncrementClick={handleBreakIncrementClick}
    />
  </div>
);

export default Settings;
