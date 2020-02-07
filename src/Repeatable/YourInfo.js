import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Progress, Modal, List, Icon } from "antd";

const profileInfo = [
  { url: "https://github.com/Shoulao", icon: "github", title: "github" },
  { url: "https://facebook.com", icon: "facebook", title: "facebook" },
  { url: "test@mail.com", icon: "mail", title: "mail" }
];

const YourInfo = ({ visible, handleCancel, handleOk }) => {
  const [profileFillUp, setProfileFillUp] = useState(0);
  const [profileData, setProfileData] = useState(profileInfo);

  const checkProfileFillUp = () => {
    const fillUp = profileData.length;

    if (fillUp === 3) {
      setProfileFillUp(100);
    } else if (fillUp === 2) {
      setProfileFillUp(66);
    } else if (fillUp === 1) {
      setProfileFillUp(33);
    } else {
      setProfileFillUp(0);
    }
  };

  useEffect(() => {
    checkProfileFillUp();
  });

  return (
    <Modal
      title="Profile info"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div>
        <List
          itemLayout="horizontal"
          dataSource={profileData}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Icon type={item.icon} />}
                title={
                  <a href={item.url} rel="noopener noreferrer" target="_blank">
                    {item.title}
                  </a>
                }
                description={item.url}
              />
            </List.Item>
          )}
        />
      </div>
      <br />
      <div>
        <h4>This is your profile info coverage</h4>
        <Progress
          percent={profileFillUp}
          size="small"
          status={profileFillUp < 34 ? "exception" : "active"}
          strokeColor={
            profileFillUp < 34
              ? "#ff0000"
              : profileFillUp > 33 && profileFillUp < 67
              ? "#fab525"
              : "#00c24a"
          }
        />
      </div>
    </Modal>
  );
};

export default YourInfo;

YourInfo.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired
};
