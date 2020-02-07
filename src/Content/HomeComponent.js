import React from "react";
import { Icon, Row, Col } from "antd";
import ModalComponent from "../Repeatable/ModalComponent";

const HomeComponent = () => (
  <div>
    <Row style={{ paddingTop: "100px" }}>
      <Col span={12} offset={6}>
        <Icon type="home" theme="filled" />
        <p>
          Donec tristique arcu eu libero ultricies, ac consectetur ipsum
          pellentesque. Donec elit justo, dignissim at augue id, lobortis varius
          erat. Nullam augue tortor, accumsan vel fringilla in, vulputate ut
          libero. Proin a accumsan ligula. Duis euismod sagittis nulla at
          bibendum. Donec volutpat sem vestibulum nulla semper consequat. Proin
          nec venenatis velit. Ut ut turpis ligula.
        </p>
        <ModalComponent />
      </Col>
    </Row>
  </div>
);

export default HomeComponent;
