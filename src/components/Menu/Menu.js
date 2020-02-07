import React from "react";
// import { css, cx } from "emotion";
import styled from "@emotion/styled";
import { Menu, Icon } from "antd";

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 100vw;
  height: 80px;
  background: #1ca1f3;
  &:hover {
    background: #fab525;
  }
`;

const MenuComponent = () => {
  return (
    <Navigation>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "24px" }}
      >
        <Menu.Item key="1">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="2" to="/asd">
          <Icon type="setting" />
          Settings
        </Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Navigation>
  );
};

export default MenuComponent;
