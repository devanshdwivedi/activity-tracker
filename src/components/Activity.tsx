import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { ActvityContext } from "../context/ActivitiesState";
import { useGlobalStyles } from "../GlobalStyles";

interface ActivityProps {
  id: string;
  title: string;
  activityState: ActivityState;
  priority: Priority;
  originalEsimate?: number;
  remainingWork?: number;
  tags?: string[];
  tasks?: Task[];
}

export default function Activity({
  id,
  title,
  activityState,
  priority,
}: ActivityProps) {
  const { editActivity } = useContext(ActvityContext);
  const [isLocked, setIsLocked] = useState(true);
  const classes = useGlobalStyles({});

  const formik = useFormik({
    initialValues: {
      activityTitle: title,
      priority: priority,
      activityState: activityState,
      id: id,
    },
    onReset: () => {
      setIsLocked(true);
    },
    onSubmit: (values) => {
      editActivity({
        title: values.activityTitle,
        priority: values.priority as Priority,
        id,
        activityState,
      });
      setIsLocked(true);
    },
  });

  return (
    <div style={{ margin: "2px 5px" }}>
      <div style={{ padding: "5px" }}>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <fieldset className={classes.myFieldset}>
            <label className={classes.myLabel} htmlFor={"id" + id}>
              Activity Id
            </label>
            <input
              id={"id" + id}
              name="id"
              type="text"
              disabled={true}
              value={formik.values.id}
            />
            <label className={classes.myLabel} htmlFor={"activityState" + id}>
              Activity State
            </label>
            <input
              id={"activityState" + id}
              name="activityState"
              type="text"
              disabled={true}
              value={formik.values.activityState}
            />
            <label className={classes.myLabel} htmlFor={"activityTitle" + id}>
              Activity Title
            </label>
            <input
              id={"activityTitle" + id}
              name="activityTitle"
              type="text"
              disabled={isLocked}
              onChange={formik.handleChange}
              value={formik.values.activityTitle}
            />
            <label className={classes.myLabel} htmlFor={"priority" + id}>
              Priority
            </label>
            <select
              id={"priority" + id}
              name="priority"
              value={formik.values.priority}
              onChange={formik.handleChange}
              disabled={isLocked}
              onBlur={formik.handleBlur}
            >
              <option value={1} label="1" />
              <option value={2} label="2" />
              <option value={3} label="3" />
              <option value={4} label="4" />
              <option value={5} label="5" />
            </select>
            <label className={classes.myLabel}></label>
            {!isLocked && <button type="submit">Edit</button>}
            {!isLocked && <button type="reset">Reset</button>}
            {isLocked && (
              <button onClick={() => setIsLocked(false)}>Edit Activity</button>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
}
