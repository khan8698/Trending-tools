// FormElements.jsx

import React from 'react';
import { Field, ErrorMessage } from 'formik';

export function SelectField(props: any) {
  const { name, label, options } = props;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field className="form-control" as="select" id={name} name={name}>
        <option value="">Choose...</option>
        {options.map((optn: any, index: number) => (
          <option
            key={optn.value}
            value={optn.value}
            label={optn.label || optn.value}
          />
        ))}
      </Field>
      <ErrorMessage
        name={name}
        render={msg => <div style={{ color: 'red' }}>{msg}</div>}
      />
    </>
  );
}
