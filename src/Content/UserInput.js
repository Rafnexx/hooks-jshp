import React, { useState, useEffect } from "react";
import { Timeline, Icon, Upload } from "antd";

const { Dragger } = Upload;

const UserInput = () => {
  const [userText, setUserText] = useState("");

  const handleUserKeyPress = e => {
    const { key, keyCode } = e;

    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  return (
    <div className="user-input" style={{ margin: 100 }}>
      <h1>Your text will show up below!</h1>
      <blockquote className="user-input-block">{userText}</blockquote>

      <Timeline>
        <Timeline.Item
          dot={<Icon type="setting" style={{ fontSize: "20px" }} />}
          color="blue"
        >
          <b>Technical testing 2015-09-01</b>
          <p>test</p>
        </Timeline.Item>
        <Timeline.Item
          dot={<Icon type="clock-circle-o" style={{ fontSize: "20px" }} />}
          color="blue"
        >
          <b>Technical testing 2015-09-01</b>
          <p>test</p>
        </Timeline.Item>
        <Timeline.Item
          dot={<Icon type="search" style={{ fontSize: "25px" }} />}
          color="blue"
        >
          <b>Technical testing 2015-09-01</b>
          <p>test</p>
        </Timeline.Item>
        <Timeline.Item
          dot={<Icon type="sync" spin style={{ fontSize: "20px" }} />}
          color="blue"
        >
          <b>Technical testing 2015-09-01</b>
          <p>test</p>
        </Timeline.Item>
      </Timeline>

      <Dragger>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
};

export default UserInput;
