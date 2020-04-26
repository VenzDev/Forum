import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { Link, withRouter } from "react-router-dom";
import s from "./loginform.module.scss";
import b from "../button.module.scss";
import { user, userTypes } from "../../redux/user";
import showToast from "../../utils/showToast";
import Loader from "react-loader-spinner";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer, []);
  const errorMessage = userData.error.message;

  const redirectOnSuccessLogin = (type, name) => {
    if (type === userTypes.LOGIN_REQUEST_SUCCESS) {
      showToast(`Welcome ${name}`);
      props.history.push("/");
    }
  };

  let style = `${s.container}`;

  const handleLoadingEffect = () => {
    if (userData.loading) {
      style = `${s.container} ${s.opacity}`;
      return (
        <Loader
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000",
          }}
          type="BallTriangle"
          color="blue"
        />
      );
    } else style = `${s.container}`;
  };

  return (
    <>
      {handleLoadingEffect()}
      <div className={style}>
        <h2>Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(user.login(values)).then((res) =>
              redirectOnSuccessLogin(res.type, res.payload.name)
            );
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={s.form}>
              <p className={s.textField}>Email address</p>
              <Field type="email" name="email" className={s.field} />
              <p className={s.textField}>Password</p>
              <Field type="password" name="password" className={s.field} />
              <Link className={s.recoveryLink} to="/forgot">
                Forgot your password?
              </Link>
              <button
                style={{ height: "45px", margin: "0 auto", marginBottom: "2rem" }}
                className={b.button}
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
              <p className={s.textField}>
                Don't have account?{" "}
                <Link className={s.signup} to="/register">
                  Sign up
                </Link>
              </p>
              {!!errorMessage && (
                <p style={{ color: "red" }} className={s.textField}>
                  {errorMessage}
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default withRouter(LoginForm);
