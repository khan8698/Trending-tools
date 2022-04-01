// FormElements.jsx

import React from "react";
import { Field, ErrorMessage } from "formik";

export function TextField(props: any) {
  const { name, label, placeholder, ...rest } = props;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className="form-control"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder || ""}
        {...rest}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      />
    </>
  );
}
