import React from "react";
import { Link } from "@reach/router";
import { Menu, Icon, Dropdown, message } from "antd";
import useHandleModal from "../Repeatable/modalActions";
import SettingsModalComponent from "../Repeatable/SettingsModalComponent";
import YourInfo from "../Repeatable/YourInfo";

function handleMenuClick() {
  message.error("Ta funkcja jeszcze nie jest dostępna.");
}

const Navigation = () => {
  const {
    visible: settingsVisibility,
    showModal: showSettingsModal,
    handleOk: handleSettingsOk,
    handleCancel: handleSettingsCancel
  } = useHandleModal(false);

  const {
    visible: yourInfoVisibility,
    showModal: showInfoModal,
    handleOk: handleInfoOk,
    handleCancel: handleInfoCancel
  } = useHandleModal(false);

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={showInfoModal}>
        <Icon type="idcard" />
        your Info
      </Menu.Item>
      <Menu.Item key="2" onClick={showSettingsModal}>
        <Icon type="setting" />
        settings
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="close-circle" />
        log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Menu mode="horizontal">
      <Menu.Item key="1">
        <Link to="/">
          <Icon type="home" />
          home
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="calculator">
          <Icon type="calculator" />
          currency calculator
        </Link>
      </Menu.Item>

      <Dropdown overlay={menu}>
        <Icon type="appstore" theme="twoTone" />
      </Dropdown>

      <SettingsModalComponent
        visible={settingsVisibility}
        handleOk={handleSettingsOk}
        handleCancel={handleSettingsCancel}
      />
      <YourInfo
        visible={yourInfoVisibility}
        showModal={showInfoModal}
        handleOk={handleInfoOk}
        handleCancel={handleInfoCancel}
      />
    </Menu>
  );
};

export default Navigation;
