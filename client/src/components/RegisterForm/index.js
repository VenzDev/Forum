import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./register.module.scss";
import { Formik, Form, Field } from "formik";
import b from "../button.module.scss";
import { user, userTypes } from "../../redux/user";
import { withRouter } from "react-router-dom";
import showToast from "../../utils/showToast";
import Loader from "react-loader-spinner";

const RegisterForm = props => {
  const dispatch = useDispatch();

  const userState = useSelector(state => state.userReducer);
  let errorMessage = userState.error.message;

  let style = `${s.container}`;

  const handleLoadingEffect = () => {
    if (userState.loading) {
      style = `${s.container} ${s.opacity}`;
      return (
        <Loader
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000"
          }}
          type="BallTriangle"
          color="blue"
        />
      );
    } else style = `${s.container}`;
  };

  const handleSuccess = type => {
    if (type === userTypes.REGISTER_REQUEST_SUCCESS) {
      showToast("Successfully Registered!");
      props.history.push("/login");
    }
  };

  return (
    <>
      {handleLoadingEffect()}
      <div className={style}>
        <h2>Create account</h2>
        <Formik
          initialValues={{ name: "", surname: "", email: "", password: "", confirmPassword: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.password !== values.confirmPassword)
              errorMessage = "password and confirm password not equal";
            else dispatch(user.register(values)).then(res => handleSuccess(res.type));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={s.nameContainer}>
                <div>
                  <p className={s.textField}>Name</p>
                  <Field className={s.fieldSmall} type="text" name="name" />
                </div>
                <div>
                  <p className={s.textField}>Surname</p>
                  <Field className={s.fieldSmall} type="text" name="surname" />
                </div>
              </div>
              <div className={s.passContainer}>
                <p>Email</p>
                <Field className={s.field} type="email" name="email" />
                <p>Password</p>
                <Field className={s.field} type="password" name="password" />
                <p>Confirm password</p>
                <Field className={s.field} type="password" name="confirmPassword" />
                <button
                  style={{ margin: "1rem auto", padding: "1.5rem" }}
                  className={b.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </button>
                {!!errorMessage && <p className={s.errorMessage}>{errorMessage}</p>}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default withRouter(RegisterForm);
