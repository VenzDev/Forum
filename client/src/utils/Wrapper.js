import React from "react";
import s from "./wrapper.module.scss";

const Wrapper = props => {
  return <div className={s.wrapper}>{props.children}</div>;
};

export default Wrapper;
