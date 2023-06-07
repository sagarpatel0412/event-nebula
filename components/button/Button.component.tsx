import React from "react";
import { ButtonComponentPropsInterface } from "../../interface/profile-interface";

function ButtonComponent(props: ButtonComponentPropsInterface) {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default ButtonComponent;
