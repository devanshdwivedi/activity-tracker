import React from "react";
import Modal from "react-modal";
import { useFormik } from "formik";

interface NewActivityProps {
  isOpen: boolean;
  closeCallback: () => void;
}

export default function NewActivity({
  isOpen,
  closeCallback,
}: NewActivityProps) {
  const formik = useFormik({
    initialValues: {
      activityTitle: "New Activity",
      priority: "3",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="activityTitle">Event Title</label>
          <input
            id="activityTitle"
            name="activityTitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.activityTitle}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value={1} label="1" />
            <option value={2} label="2" />
            <option value={3} label="3" />
            <option value={4} label="4" />
            <option value={5} label="5" />
          </select>
        </div>
        <button type="submit">Create Activity</button>
      </form>
    </Modal>
  );
}
