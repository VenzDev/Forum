import React from "react";
import s from "./createthread.module.scss";
import b from "../button.module.scss";
import { useSelector } from "react-redux";
import { Form, Field, Formik } from "formik";
import axios from "axios";
import { createThreadEndpoint } from "../../apiConfig";
import { withRouter } from "react-router-dom";
import showToast from "../../utils/showToast";

const CreateThreadForm = props => {
  const { forums } = useSelector(state => state.forumReducer);

  let forumName = "React";

  const token = localStorage.getItem("token");

  const handleChange = e => {
    forumName = e.target.value;
    console.log(forumName);
  };

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
      <h2>Create thread</h2>
      <DropdownMenu />
      <Formik
        initialValues={{ threadTopic: "", content: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ ...values, forumName });
          axios
            .post(
              createThreadEndpoint,
              { ...values, forumName },
              {
                headers: { Authorization: `Bearer ${token}` }
              }
            )
            .then(res => {
              console.log(res.data);
              showToast("Thread created successfully!");
              props.history.push("/thread/" + res.data._id);
            })
            .catch(err => {
              console.log(err);
            });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>Thread topic</p>
            <Field className={s.topicInput} type="text" name="threadTopic" />
            <p>Content</p>
            <Field as="textarea" type="text" className={s.topicArea} name="content" />
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
