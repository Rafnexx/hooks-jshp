import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";
import useHandleModal from "./modalActions";

const ModalComponent = ({ data }) => {
  const { visible, showModal, handleOk, handleCancel } = useHandleModal(false);
  const [ddata, setData] = useState(data);

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        read more
      </Button>
      <Modal
        title={ddata?.title ? ddata.title : "Sample title"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Donec tristique arcu eu libero ultricies, ac consectetur ipsum
          pellentesque.
        </p>
      </Modal>
    </div>
  );
};

export default ModalComponent;

ModalComponent.propTypes = {
  data: PropTypes.array.isRequired
};

/*
const ModalComponent = (props) => {
    const [data, setData] = useState(props.data)
    const [visible, setVisible] = useState(false)

    const showModal = e => setVisible(!visible)
    const handleOk = e => setVisible(false)
    const handleCancel = e => setVisible(false)

    return (
        <div>
        <Button type="primary" onClick={showModal}>
            read more
        </Button>
        <Modal
            title={data?.title ? data.title : "Sample title"}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <p>Donec tristique arcu eu libero ultricies, ac consectetur ipsum pellentesque.</p>
        </Modal>
        </div>
    );
  }
  */
