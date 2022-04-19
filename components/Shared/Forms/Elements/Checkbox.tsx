import React from 'react';
import { Field, ErrorMessage } from 'formik';
// import TextError from './TextError';

function CheckboxGroup(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <label>{label}</label>
      <Field name={name}>
        {({ field }: any) => {
          return options.map((option: any) => {
            return (
              // <label
              //   htmlFor={option.value}
              //   className="form-control"
              //   key={option.key}
              //   style={{
              //     display: 'flex',
              //     justifyContent: 'space-between',
              //     alignItems: 'center',
              //     marginBottom: '10px'
              //   }}
              // >
              //   <span style={{ marginRight: '20px' }}>{option.key}</span>
              //   <input
              //   className=''
              //     type="checkbox"
              //     id={option.value}
              //     {...field}
              //     {...rest}
              //     value={option.value}
              //     checked={field.value?.includes(option.value)}
              //   />
              // </label>

              <div className="form-check" key={option.key}>
                <label className="form-check-label" htmlFor={option.value}>
                  {option.key}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value?.includes(option.value)}
                />
              </div>
            );
          });
        }}
      </Field>
      {/* <ErrorMessage
        name={name}
        render={msg => <div style={{ color: 'red' }}>{msg}</div>}
      /> */}
    </>
  );
}

export default CheckboxGroup;
