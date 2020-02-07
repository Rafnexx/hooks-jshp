import React from "react";
import PropTypes from "prop-types";
import { Modal, Icon, Switch } from "antd";

const SettingsModalComponent = ({ visible, handleCancel, handleOk }) => {
  return (
    <Modal
      title="Settings"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>
        Donec tristique arcu eu libero ultricies, ac consectetur ipsum
        pellentesque.
      </p>
      <div>
        <Switch
          checkedChildren={<Icon type="notification" />}
          unCheckedChildren={<Icon type="close" />}
          defaultChecked
        />{" "}
        <span>show notifications </span>
        <br />
        <br />
        <Switch
          checkedChildren={<Icon type="global" />}
          unCheckedChildren={<Icon type="close" />}
          defaultChecked
        />{" "}
        <span>show active status </span>
        <br />
        <br />
        <Switch
          checkedChildren={<Icon type="check" />}
          unCheckedChildren={<Icon type="close" />}
          defaultChecked
        />{" "}
        <span>enable access to my phones contact list</span>
      </div>
    </Modal>
  );
};

export default SettingsModalComponent;

SettingsModalComponent.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired
};
