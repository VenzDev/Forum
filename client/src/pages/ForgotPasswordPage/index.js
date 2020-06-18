import React from "react";
import s from "./forgot.module.scss";
import { Formik, Form, Field } from "formik";
import b from "../../components/button.module.scss";
import UndrawForgot from "../../svg/undraw_forgot.svg";

const forgotPasswordPage = () => {
  return (
    <div className={s.forgot}>
      <h2>Forgot your password?</h2>
      <div>
        <img src={UndrawForgot} alt="forgot password" />
      </div>
      <p>Enter your email address below and we will email instructions for setting a new one.</p>
      <Formik initialValues={{ email: "" }}>
        {() => (
          <Form>
            <p>Email address</p>
            <Field className={s.field} type="email" name="email" />
            <button
              style={{ margin: "2rem auto", width: "18rem", height: "40px " }}
              className={b.button}
              type="submit"
            >
              Reset password
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default forgotPasswordPage;
