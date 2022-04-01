// FormElements.jsx

import React from "react";
import { Formik, Form as FormikForm } from "formik";

export function Form(props: any) {
  return (
    <Formik {...props}>
      <FormikForm className="needs-validation" noValidate={true}>
        {props.children}
      </FormikForm>
    </Formik>
  );
}
