import React from "react";
import s from "./stylebutton.module.scss";

const StyleButton = props => {
  const onToggle = e => {
    e.preventDefault();
    props.onToggle(props.style);
  };
  let className = s.RichEditorStyleButton;
  if (props.active) {
    className = s.RichEditorActiveButton;
  }
  return (
    <span className={className} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
};

export default StyleButton;
