import { Field, Formik } from 'formik';
import React, { FC, useState } from 'react';
import { Form, SubmitButton, TextField } from './Forms/Elements';
import * as Yup from 'yup';

type InputData = {
  inputAsText: string;
  inputAsURL: string;
  inputAsFile: File | string;
};

interface Props {
  onSubmitInputData: (item: any) => void;
}

const InputHandler = ({ onSubmitInputData }: Props) => {
  const [inputData, setInputData] = useState<InputData>({
    inputAsText: '',
    inputAsURL: '',
    inputAsFile: ''
  });
  const onSubmit = (values: any, onSubmitProps: any) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    // onSubmitProps.resetForm();
    onSubmitInputData(values);
  };

  const validationSchema = Yup.object({
    inputAsText: Yup.string().required('Required')
  });

  const clearAllValuesOnTabShifting = () => {
    setInputData({
      inputAsText: '',
      inputAsURL: '',
      inputAsFile: ''
    });
    onSubmitInputData(inputData);
  };
  return (
    <>
      <Formik
        initialValues={inputData}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
      >
        {({ setFieldValue, handleSubmit, handleChange, values }) => {
          return (
            <>
              <form onSubmit={handleSubmit}>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      onClick={clearAllValuesOnTabShifting}
                    >
                      <span className="icon-stack"></span>Enter Data
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      onClick={clearAllValuesOnTabShifting}
                    >
                      <span className="icon-world"></span>Enter URL
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      onClick={clearAllValuesOnTabShifting}
                    >
                      <span className="icon-attachment"></span>Choose File
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <TextField
                      rows={8}
                      name="inputAsText"
                      as="textarea"
                      onChange={handleChange}
                      value={values.inputAsText}
                    />
                    <SubmitButton title="Submit Data" />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <label htmlFor="basic-url" className="form-label">
                      Your vanity URL
                    </label>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon3">
                        https://example.com/users/
                      </span>

                      <TextField
                        name="inputAsURL"
                        onChange={handleChange}
                        value={values.inputAsURL}
                      />

                      <SubmitButton title="Submit Data" />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <label htmlFor="basic-url" className="form-label">
                      Choose Your File
                    </label>

                    <div>
                      <input
                        type="file"
                        onChange={e => {
                          if (e.target.files) {
                            setFieldValue('inputAsFile', e.target.files[0]);
                          }
                        }}
                      />
                    </div>
                    <SubmitButton title="Submit Data" />
                  </div>
                </div>
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default InputHandler;
