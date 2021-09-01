import React, { useContext } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import { ActvityContext } from "../context/ActivitiesState";
import { generateId } from "../utils/commonUtils";
import { useGlobalStyles } from "../GlobalStyles";

interface NewActivityProps {
  isOpen: boolean;
  closeCallback: () => void;
}

export default function NewActivity({
  isOpen,
  closeCallback,
}: NewActivityProps) {
  const { addActivity } = useContext(ActvityContext);
  const classes = useGlobalStyles({});
  const genId = generateId();

  const formik = useFormik({
    initialValues: {
      activityTitle: "New Activity",
      priority: 3,
    },
    onSubmit: (values) => {
      addActivity({
        title: values.activityTitle,
        priority: values.priority as Priority,
        id: genId,
        activityState: "New",
      });
      closeCallback();
      formik.resetForm();
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
        <fieldset className={classes.myFieldset}>
          <label className={classes.myLabel} htmlFor={"activityTitle" + genId}>
            Event Title
          </label>
          <input
            id={"activityTitle" + genId}
            name="activityTitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.activityTitle}
          />
          <label className={classes.myLabel} htmlFor={"priority" + genId}>
            Priority
          </label>
          <select
            id={"priority" + genId}
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
          <label className={classes.myLabel}></label>
          <button type="submit">Create Activity</button>
        </fieldset>
      </form>
    </Modal>
  );
}
