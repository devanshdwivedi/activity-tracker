import React from "react";
import Modal from "react-modal";

interface NewActivityProps {
  isOpen: boolean;
  closeCallback: () => void;
}

export default function NewActivity({
  isOpen,
  closeCallback,
}: NewActivityProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeCallback} style={customStyles}>
      {"This is the new activity modal"}
    </Modal>
  );
}
