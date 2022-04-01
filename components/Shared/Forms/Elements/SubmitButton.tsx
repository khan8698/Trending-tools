// FormElements.jsx

import React from "react";
import { useFormikContext } from "formik";

export function SubmitButton(props: any) {
  const { title, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <button type="submit" {...rest} disabled={isSubmitting}>
      {title}
    </button>
  );
}
