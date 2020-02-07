import { useState } from "react";

const useHandleModal = initialState => {
  const [visible, setVisible] = useState(initialState);

  const showModal = () => setVisible(!visible);
  const handleOk = () => setVisible(false);
  const handleCancel = () => setVisible(false);

  return { visible, showModal, handleOk, handleCancel };
};

export default useHandleModal;
