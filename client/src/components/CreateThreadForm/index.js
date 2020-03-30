import React from "react";
import s from "./createthread.module.scss";
import b from "../button.module.scss";
import { useSelector } from "react-redux";
import { Form, Field, Formik } from "formik";
import axios from "axios";
import { createThreadEndpoint } from "../../apiConfig";
import { withRouter } from "react-router-dom";
import showToast from "../../utils/showToast";
import RichEditor from "../RichEditor";
const CreateThreadForm = props => {
  const { forums } = useSelector(state => state.forumReducer);
  let forumName = "React";
  let rawData = "";
  const token = localStorage.getItem("token");

  const handleChange = e => (forumName = e.target.value);
  const handleRichEditor = editorState => (rawData = JSON.stringify(editorState));

  const DropdownMenu = () => (
    <select onClick={handleChange} className={s.dropdown}>
      <option default disabled>
        Select forum
      </option>
      {forums.map(forum => (
        <option value={forum.name} key={forum._id}>
          {forum.name}
        </option>
      ))}
    </select>
  );

  return (
    <div className={s.container}>
      <h2 className={s.title}>Create thread</h2>
      <DropdownMenu />
      <Formik
        initialValues={{ threadTopic: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ ...values, content: rawData, forumName });
          axios
            .post(
              createThreadEndpoint,
              { ...values, content: rawData, forumName },
              {
                headers: { Authorization: `Bearer ${token}` }
              }
            )
            .then(res => {
              showToast("Thread created successfully!");
              props.history.push("/thread/" + res.data._id);
            })
            .catch(err => {});
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>Thread topic</p>
            <Field className={s.topicInput} type="text" name="threadTopic" />
            <p>Content</p>
            <RichEditor handleRichEditor={handleRichEditor} />
            <button
              disabled={isSubmitting}
              type="submit"
              style={{ margin: "1.5rem auto", padding: "1rem" }}
              className={b.button}
            >
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(CreateThreadForm);
